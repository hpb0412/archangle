# Manually Backup

This is in case we need to migrate to difference VPS provider or
upgrade the Ghost version (which requires a breaking change)


## Steps:

- Backup database (this has all that you need)
- Backup assets (the `content` directory)
- Backup HTTPS certificate
- (Optional) Backup all possible data that can be easily do by Ghost's dashboard `Settings > Lab`
  - Content data
  - Redirects
  - Routes

> The last (optional) one as you can see, only backup posts, it doesn't backup other data like
users, tags, ...

### Backup database

Generate dump file of database

```shell
# Access your database container
docker exec -ti archangle_db_1 sh

# Dump mysql db right inside container
mysqldump -u root -p -h 127.0.0.1 ghost > blog.sql
# Note this will prompt you to input password
# If you are running mysql in a custom port
# mysqldump -u root -p -P 33060 -h 127.0.0.1 ghost > blog.sql
# Note the uppercase `-P`, it is for `port`, the lowercase `-p` is password

# Take note the path to blog.sql
pwd

# Exit container
exit
```

Download dump file back to your machine
```shell
# copy from contaier to the host (your server)
# remember the path we got from last `pwd`
docker cp archangle_db_1:/path/to/blog.sql ./blog.sql

# Take note the path again
pwd

# At your local machine copy it from server with username and password
scp username@remote:/path/to/blog.sql /where/to/put/blog.sql
```

### 
