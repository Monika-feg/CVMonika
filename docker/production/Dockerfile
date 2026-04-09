# Versions
# https://hub.docker.com/r/serversideup/php/tags?name=8.4-fpm-nginx-alpine
ARG SERVERSIDEUP_PHP_VERSION=8.4-fpm-nginx-alpine

# Add user/group
ARG USER_ID=1000
ARG GROUP_ID=1000

# =================================================================
# Stage 1: Composer dependencies
# =================================================================
FROM serversideup/php:${SERVERSIDEUP_PHP_VERSION} AS base

USER root

ARG USER_ID
ARG GROUP_ID

RUN docker-php-serversideup-set-id www-data $USER_ID:$GROUP_ID && \
    docker-php-serversideup-set-file-permissions --owner $USER_ID:$GROUP_ID --service nginx

WORKDIR /var/www/html
COPY --chown=www-data:www-data composer.json composer.lock ./
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN composer install --no-dev --no-interaction --no-scripts --prefer-dist

USER www-data 

# =================================================================
# Stage 2: Frontend assets compilation
# =================================================================

FROM node:20-alpine AS static-assets

ARG APP_VERSION
ARG APP_NAME

WORKDIR /app
COPY package*.json vite.config.ts ./
RUN npm ci
COPY . .
# Kopiera produktionsmiljöfilen till .env innan build
RUN cp .env.production.example .env
ENV VITE_APP_NAME=${APP_NAME:-repotracker}
ENV VITE_APP_VERSION=${APP_VERSION}
RUN npm run build

# =================================================================
# Final Stage: Production image
# =================================================================
FROM serversideup/php:${SERVERSIDEUP_PHP_VERSION}

ARG USER_ID
ARG GROUP_ID
ARG TARGETPLATFORM
ARG CI=true
ARG APP_VERSION
ARG APP_NAME

WORKDIR /var/www/html

USER root

RUN docker-php-serversideup-set-id www-data $USER_ID:$GROUP_ID && \
    docker-php-serversideup-set-file-permissions --owner $USER_ID:$GROUP_ID --service nginx

# Install system dependencies
RUN apk add --no-cache \
    openssh-client \
    git \
    git-lfs \
    jq \
    lsof \
    vim

# Configure shell aliases
RUN echo "alias ll='ls -al'" >> /etc/profile && \
    echo "alias a='php artisan'" >> /etc/profile && \
    echo "alias logs='tail -f storage/logs/laravel.log'" >> /etc/profile

# Configure PHP
COPY docker/production/etc/php/conf.d/zzz-custom-php.ini /usr/local/etc/php/conf.d/zzz-custom-php.ini
ENV PHP_OPCACHE_ENABLE=1
ENV APP_VERSION=${APP_VERSION}

# Configure entrypoint
COPY --chmod=755 docker/production/entrypoint.d/ /etc/entrypoint.d

# Copy application files from previous stages
COPY --from=base --chown=www-data:www-data /var/www/html/vendor ./vendor
COPY --from=static-assets --chown=www-data:www-data /app/public/build ./public/build

# Copy application source code
COPY --chown=www-data:www-data composer.json composer.lock ./
COPY --chown=www-data:www-data .env.production.example .env
COPY --chown=www-data:www-data app ./app
COPY --chown=www-data:www-data artisan artisan
COPY --chown=www-data:www-data bootstrap ./bootstrap
COPY --chown=www-data:www-data config ./config
COPY --chown=www-data:www-data database ./database
COPY --chown=www-data:www-data public ./public
COPY --chown=www-data:www-data resources ./resources
COPY --chown=www-data:www-data routes ./routes
COPY --chown=www-data:www-data storage ./storage

RUN composer dump-autoload

# Configure Nginx and S6 overlay
COPY docker/production/etc/nginx/conf.d/custom.conf /etc/nginx/conf.d/custom.conf
COPY docker/production/etc/nginx/site-opts.d/http.conf /etc/nginx/site-opts.d/http.conf

RUN mkdir -p /etc/nginx/conf.d && \
    chown -R www-data:www-data /etc/nginx && \
    chmod -R 755 /etc/nginx

# Switch to non-root user
USER www-data
