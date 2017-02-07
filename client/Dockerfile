FROM node:6.9.5

RUN mkdir -p /www/app

WORKDIR /www/app/

ADD ./package.json /www/app/

RUN npm install

ADD . /www/app/

EXPOSE 4200
