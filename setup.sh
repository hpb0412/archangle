#!/bin/bash

mkdir -pv ./nginx/conf.d

cp ./template/prod.conf ./nginx/config/default.conf
cp ./template/docker-compose.example.yml ./docker-compose.yml
