FROM php:8.0-fpm-alpine

LABEL maintainer="Nauris Linde <naurislinde@gmail.com>"

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
RUN pecl install redis xdebug

# Install and enable php extensions
RUN docker-php-ext-enable imagick redis xdebug
RUN docker-php-ext-configure gd --with-jpeg --with-freetype
RUN docker-php-ext-install curl iconv mbstring pdo pdo_mysql pdo_pgsql pdo_sqlite pcntl mbstring tokenizer xml gd zip bcmath exif opcache

# Install composer
RUN curl -s https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer

# Cleanup dev dependencies
RUN apk del -f .build-deps

# Add a non-root user to help install ffmpeg:
ARG PUID=1000
ENV PUID ${PUID}
ARG PGID=1000
ENV PGID ${PGID}

RUN addgroup -g ${PGID} portfolio && \
    adduser -D -G portfolio -u ${PUID} portfolio

USER portfolio

# Configure locale.
ARG LOCALE=POSIX
ENV LC_ALL ${LOCALE}

WORKDIR /var/www

CMD ["php-fpm"]

EXPOSE 9000

