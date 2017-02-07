# LouEatsVille Development Environment
# NOTE: This does not yet support building for production
# enviorments. That will be added in the future.
FROM python:3.6

ENV PYTHONUNBUFFERED 1

RUN mkdir -p /www/app

WORKDIR /www/app/

ADD requirements.txt /www/app/

RUN pip install -r requirements.txt

ADD . /www/app/
