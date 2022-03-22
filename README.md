# Sweet Market App

[Demo](http://sweet-market-of-mine.vercel.app/).

## Description

This is an application that pulls products and companies from plain json file.
The application consists of a single page and sends requests to the backend
with various URL queries. Endpoints are briefly as follows and you can test
them with Postman:

* https://sweet-market-of-mine.herokuapp.com/companies
* https://sweet-market-of-mine.herokuapp.com/items

The application contains the following features:
* Filtering
  - For brands & tags & item type
  - Additional info that shows how many times brand & tag used
  - Search bar for finding brand/tag
* Sorting:
  - Price low to high
  - Price high to low
  - New to old
  - old to new
* Shopping cart:
  - Add/remove items to cart
  - Show total of cart items
* Pagination
  - Next/Previous page buttons

## Available Scripts

In the project directory, you can run:

### `yarn start`

Starts react project

### `yarn start-fake-server`

Starts json-server

### `yarn start-concurrently`

Starts react & json-server at the same time.

### `yarn test`

Runs tests.

### `yarn build`

Builds the app into build/ folder.
