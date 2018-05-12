FROM php:7.2-fpm-alpine3.7
LABEL maintainer="Nauris Linde <naurislinde@gmail.com>"

RUN apk add --no-cache g++ git wget gnupg openssh-client supervisor jpegoptim optipng pngquant gifsicle libpng-dev \
  && docker-php-ext-install pdo_mysql zip

RUN apk add --no-cache nodejs yarn

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer