FROM php:7.2-fpm-alpine
LABEL maintainer="Nauris Linde <naurislinde@gmail.com>"

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.8/main' > /etc/apk/repositories \
	&& echo 'http://dl-cdn.alpinelinux.org/alpine/v3.8/community' >> /etc/apk/repositories \
    && apk upgrade -U -a

RUN apk --no-cache add gcc g++ git wget gnupg openssh-client supervisor \
  jpegoptim optipng pngquant gifsicle make libc-dev libpng-dev automake autoconf libtool nasm \
  && docker-php-ext-install pdo_mysql zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apk --no-cache add nodejs yarn

RUN rm -rf /var/cache/apk/*

RUN adduser -D portfolio
USER portfolio