#!/bin/bash

mkdir -pv \
    ./nginx/cert \
    ./nginx/config \
    ./nginx/www

cp ./template/prod.conf ./nginx/config/default.conf
cp ./template/docker-compose.example.yml ./docker-compose.yml
