# Migrate HTTPS cert to new server

If we plan to move to different VPS provider, we will wish to move the HTTPS cert too

## Instructions

https://ivanderevianko.com/2019/03/migrate-letsencrypt-certificates-certbot-to-new-server



```bash
# switch to root if needed
sudo su

# be carefull with the number at archive
sudo ln -s /etc/letsencrypt/archive/archangle.net/cert1.pem /etc/letsencrypt/live/archangle.net/cert.pem &&
sudo ln -s /etc/letsencrypt/archive/archangle.net/chain1.pem /etc/letsencrypt/live/archangle.net/chain.pem &&
sudo ln -s /etc/letsencrypt/archive/archangle.net/fullchain1.pem /etc/letsencrypt/live/archangle.net/fullchain.pem &&
sudo ln -s /etc/letsencrypt/archive/archangle.net/privkey1.pem /etc/letsencrypt/live/archangle.net/privkey.pem

sudo certbot renew --dry-run

sudo certbot certificates

# test only
sudo bash -c "certbot certonly -n --webroot -w /usr/share/nginx/html -d archangle.net --deploy-hook='docker exec archangle_nginx_1 nginx -s reload' --dry-run"
```

## Notes

- [Install certbot on Debian - Linode tutorial](https://www.linode.com/docs/websites/cms/ghost/how-to-install-ghost-cms-with-docker-compose-on-ubuntu-18-04/)
