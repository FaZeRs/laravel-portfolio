#install-client:
#	docker-compose -f docker-compose.builder.yml run --rm install
#build-client:
#	docker-compose -f docker-compose.builder.yml run --rm build
#dev:
#	docker-compose -f docker-compose.dev.yml up -d
#prod:
#	docker-compose -f docker-compose.prod.yml up -d
#down-dev:
#	docker-compose -f docker-compose.dev.yml down
#down-prod:
#	docker-compose -f docker-compose.prod.yml down
#sh-backend-dev:
#	docker-compose -f docker-compose.dev.yml exec php-fpm sh

#-----------------------------------------------------------
# Docker
#-----------------------------------------------------------

# Wake up docker containers
up:
	docker-compose up -d

up-dev:
	docker-compose -f docker-compose.dev.yml up -d

# Shut down docker containers
down:
	docker-compose down

# Show a status of each container
status:
	docker-compose ps

# Status alias
s: status

# Show logs of each container
logs:
	docker-compose logs

# Restart all containers
restart: down up

# Restart the client container
restart-client:
	docker-compose restart node

# Restart the client container alias
rc: restart-client

# Show the client logs
logs-client:
	docker-compose logs node

# Show the client logs alias
lc: logs-client

# Build and up docker containers
build:
	docker-compose up -d --build

# Build containers with no cache option
build-no-cache:
	docker-compose build --no-cache

# Build and up docker containers
rebuild: down build

# Run terminal of the php container
php:
	docker-compose exec php-fpm sh

# Run terminal of the client container
client:
	docker-compose exec node sh

# Install client npm packages
install-client:
	docker-compose -f docker-compose.builder.yml run --rm install

# Build client application
build-client:
	docker-compose -f docker-compose.builder.yml run --rm build

#-----------------------------------------------------------
# Logs
#-----------------------------------------------------------

# Clear file-based logs
logs-clear:
	sudo rm docker/logs/nginx/*.log


#-----------------------------------------------------------
# Database
#-----------------------------------------------------------

# Run database migrations
db-migrate:
	docker-compose exec php-fpm php artisan migrate

# Migrate alias
migrate: db-migrate

# Run migrations rollback
db-rollback:
	docker-compose exec php-fpm php artisan migrate:rollback

# Rollback alias
rollback: db-rollback

# Run seeders
db-seed:
	docker-compose exec php-fpm php artisan db:seed

# Fresh all migrations
db-fresh:
	docker-compose exec php-fpm php artisan migrate:fresh


#-----------------------------------------------------------
# Redis
#-----------------------------------------------------------

redis:
	docker-compose exec redis redis-cli

redis-flush:
	docker-compose exec redis redis-cli FLUSHALL

redis-install:
	docker-compose exec php-fpm composer require predis/predis


#-----------------------------------------------------------
# Queue
#-----------------------------------------------------------

# Restart queue process
queue-restart:
	docker-compose exec php-fpm php artisan queue:restart


#-----------------------------------------------------------
# Testing
#-----------------------------------------------------------

# Run phpunit tests
test:
	docker-compose exec php-fpm vendor/bin/phpunit --order-by=defects --stop-on-defect

# Run all tests ignoring failures.
test-all:
	docker-compose exec php-fpm vendor/bin/phpunit --order-by=defects

# Run phpunit tests with coverage
coverage:
	docker-compose exec php-fpm vendor/bin/phpunit --coverage-html tests/report


#-----------------------------------------------------------
# Dependencies
#-----------------------------------------------------------

# Install composer dependencies
composer-install:
	docker-compose exec php-fpm composer install

# Update composer dependencies
composer-update:
	docker-compose exec php-fpm composer update

# Update npm dependencies
npm-update:
	docker-compose exec node npm install

# Update all dependencies
dependencies-update: composer-update npm-update


#-----------------------------------------------------------
# Tinker
#-----------------------------------------------------------

# Run tinker
tinker:
	docker-compose exec php-fpm php artisan tinker


#-----------------------------------------------------------
# Installation
#-----------------------------------------------------------

# Copy the Laravel API environment file
env-api:
	cp .env.api api/.env

# Copy the NuxtJS environment file
env-client:
	cp .env.client client/.env

# Add permissions for Laravel cache and storage folders
permissions:
	sudo chmod -R 777 api/bootstrap/cache
	sudo chmod -R 777 api/storage

# Permissions alias
perm: permissions

# Generate a Laravel app key
key:
	docker-compose exec php-fpm php artisan key:generate --ansi

# Generate a Laravel storage symlink
storage:
	docker-compose exec php-fpm php artisan storage:link

# PHP composer autoload command
autoload:
	docker-compose exec php-fpm composer dump-autoload

# Install the environment
install: build env-api env-client composer-install key storage permissions migrate rc


#-----------------------------------------------------------
# Git commands
#-----------------------------------------------------------

# Undo the last commit
git-undo:
	git reset --soft HEAD~1

# Make a Work In Progress commit
git-wip:
	git add .
	git commit -m "WIP"

# Export the codebase as app.zip archive
git-export:
	git archive --format zip --output app.zip master


#-----------------------------------------------------------
# Clearing
#-----------------------------------------------------------

# Shut down and remove all volumes
remove-volumes:
	docker-compose down --volumes

# Remove all existing networks (useful if network already exists with the same attributes)
prune-networks:
	docker network prune
