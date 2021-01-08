FROM php:8.0-fpm-alpine

# Install dev dependencies
RUN apk add --no-cache --virtual .build-deps \
    $PHPIZE_DEPS \
    curl-dev \
    imagemagick-dev \
    libtool \
    libxml2-dev \
    postgresql-dev \
    sqlite-dev \
    oniguruma-dev

# Install production dependencies
RUN apk add --no-cache --update \
    bash \
    curl \
    g++ \
    gcc \
    git \
    freetype \
    freetype-dev \
    libpng \
    libpng-dev \
    libjpeg-turbo \
    libjpeg-turbo-dev \
    libjpeg \
    libc-dev \
    make \
    mysql-client \
    openssh-client \
    postgresql-libs \
    rsync \
    libzip-dev \
    imagemagick \
    procps

# Don't clear env variables
# This is very important since it will allow us to read environment variables from the container.
RUN sed -e 's/;clear_env = no/clear_env = no/' -i /usr/local/etc/php-fpm.d/www.conf

# Install Imagick
RUN git clone https://github.com/Imagick/imagick /tmp/imagick && \
    cd /tmp/imagick && \
    phpize && ./configure && \
    make && \
    make install

# Install PECL extensions
RUN pecl install xdebug redis

# Install and enable php extensions
RUN docker-php-ext-enable imagick xdebug redis
RUN docker-php-ext-configure gd --with-jpeg --with-freetype
RUN docker-php-ext-install curl iconv mbstring pdo pdo_mysql pdo_pgsql pdo_sqlite pcntl mbstring tokenizer xml gd zip bcmath exif

# Install composer
RUN curl -s https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer

# Cleanup dev dependencies
RUN apk del -f .build-deps

RUN adduser -D portfolio
USER portfolio
