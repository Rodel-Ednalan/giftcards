## Quick Start

### Laravel Development Environment setup

### Required setup before clone
1. [Composer 2](https://getcomposer.org/download/). 
2. [Node](https://nodejs.org/en/) stable version.

## Usage

### Option 1

1. Install using composer

2. `cd giftcards`
3. Run `yarn install`
4. Create a Database
5. Update the Database credential to .env file
6. Run `php artisan migrate` -> To create needed tables.
7. Run `php artisan db:seed` -> To seed some fake users.
8. Run `yarn run dev`
9. Update API HOST_URL in `resources/js/config/constant.js` file
10. Run laravel `php artisan serve --port=8080`
