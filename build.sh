#! /bin/bash

if [ -d './build' ]; then
  if [ -d './build/.git' ]; then
    echo 'Detected build directory with git initialized'
    mkdir ./.cache
    mv ./build/.git .cache/.git
  fi
  rm -rf ./build
fi

mkdir ./build

if [ -d './.cache/.git' ]; then
  mv ./.cache/.git ./build
  rm -rf ./.cache
fi

rsync -a ./server/src/* ./build
rsync -a ./server/requirements.txt ./build

# Build Client
cd ./client/
ng build --prod --base-href '/static/'

cd ..
if [ -d './build/static' ]; then
  rm -rf ./build/static
fi

if [ -d './build/templates' ]; then
  rm -rf ./build/templates
fi

mkdir ./build/static
mkdir ./build/templates

rsync -a --exclude="*.html" ./client/dist/* ./build/static

rsync -a ./client/dist/index.html ./build/templates

cp ./config/* ./build
