FROM php:7.2-fpm-alpine

# Install dev dependencies
RUN apk add --no-cache --virtual .build-deps \
    $PHPIZE_DEPS \
    curl-dev \
    imagemagick-dev \
    libtool \
    libxml2-dev \
    postgresql-dev \
    sqlite-dev

# Install production dependencies
RUN apk add --no-cache \
    bash \
    curl \
    g++ \
    gcc \
    git \
    imagemagick \
    libc-dev \
    libpng-dev \
    make \
    mysql-client \
    nodejs \
    nodejs-npm \
    yarn \
    openssh-client \
    postgresql-libs \
    rsync

# Don't clear env variables
# This is very important since it will allow us to read environment variables from the container.
RUN sed -e 's/;clear_env = no/clear_env = no/' -i /usr/local/etc/php-fpm.d/www.conf

ENV PHP_OPCACHE_VALIDATE_TIMESTAMPS="0" \
    PHP_OPCACHE_MAX_ACCELERATED_FILES="10000" \
    PHP_OPCACHE_MEMORY_CONSUMPTION="192" \
    PHP_OPCACHE_MAX_WASTED_PERCENTAGE="10"

# Install PECL extensions
RUN pecl install imagick xdebug

# Install and enable php extensions
RUN docker-php-ext-enable imagick xdebug
RUN docker-php-ext-install curl iconv mbstring pdo pdo_mysql pdo_pgsql pdo_sqlite pcntl mbstring tokenizer xml gd zip opcache;

COPY docker/php/opcache.ini /usr/local/etc/php/conf.d/opcache.ini

# Install composer
RUN curl -s https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV PATH="./vendor/bin:$PATH"
RUN composer global require hirak/prestissimo

# Cleanup dev dependencies
RUN apk del -f .build-deps

RUN adduser -D portfolio
USER portfolio
