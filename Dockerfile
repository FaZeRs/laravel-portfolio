FROM php:7.2-fpm-alpine3.7
LABEL maintainer="Nauris Linde <naurislinde@gmail.com>"

RUN apk add --no-cache gcc g++ git wget gnupg openssh-client supervisor jpegoptim optipng pngquant gifsicle make libc-dev libpng-dev automake autoconf libtool nasm \
  && docker-php-ext-install pdo_mysql zip

RUN apk add --no-cache nodejs yarn

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN adduser -D portfolio
USER portfolio