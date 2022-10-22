# Archangle - Linode

Deploy tool for archangle blog.


## Steps

- Create Linode (debian 11 + preferred zone + backup) ~ 7.00$/month

- Create root user with password (set at Linode's dashboard when in create process)

- Link ssh keys to server for LISH (later used for LISH via ssh)
[Ref](https://www.linode.com/docs/guides/getting-started/)

- Update apt
```shell
# no sudo since we are at root user
# we will need a limited user acc later
apt update && apt upgrade
```

- Set hostname (optional, just to avoid meanless IP display at terminal)
```shell
hostnamectl set-hostname archangle-host
```

- Set timezone (recommended, easy to follow when read logs or reports)
```shell
# check timezone list with:
# timedatectl list-timezones
timedatectl set-timezone 'Asia/Ho_Chi_Minh'
```

- Next secure your server. [Read more](https://www.linode.com/docs/guides/securing-your-server/)

- Add an admin user for daily usage instead of using `root` user
```shell
adduser devuser
adduser devuser sudo
```

## Others

- [Migrate HTTPS cert to new server](./template/migrate-https-cert-to-new-server.md)
- [Point domain to AWS EC2 Instance](https://w3path.com/point-domain-to-aws-ec2-instance/)
