# https://pythonspeed.com/articles/alpine-docker-python/ - почему не alpine
FROM python:3.11.0-slim as builder

WORKDIR /srv/www/app_notes

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements_prod.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /srv/www/app_notes/wheels -r requirements_prod.txt


FROM python:3.11.0-slim

WORKDIR /srv/www/app_notes

COPY --from=builder  /srv/www/app_notes/wheels /srv/www/wheels
COPY . .

RUN pip install --no-cache /srv/www/wheels/*

LABEL author='@anywindblows, @ferox-x' version='1.0'
