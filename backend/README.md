# Backend

Consists in a Node.js/Typescript REST API that will retrieve data from the database and deliver to the frontend.

## Purpose

Backend Node.js express server that will deliver information from companies security.\
Allows two different endpoints:

-   List (/list) or (/securities?page={p}&index={i})
-   Details (/detail/:symbol)

## Setup

For this project will be necessary to install `npm` and `node`.\
Before running first start from install command `npm install`.

## Run

Just run the global command `npm run start`.

## Commands

-   **precommit** - used to run has a precommit hook to validate lint
-   **dev** - starts the REST application in develop mode
-   **start** - starts the api application
-   **lint** - lint validates the code
-   **lint:fix** - lint and fix the code
-   **prettier** - prettier validates the code
-   **prettier:fix** - prettier validates and fix the code

## Structure

### Components

React components that will display in the SPA application.

-   **router** - routing component for the paths to each view
-   **list** - list companies in a table
-   **detail** - detail companies info and prices chart
-   **error** - page error for global error cases

### Database

Databases communication classes

-   **postgresDatabase** responsible to retrieve company data information from database
    -   initiates database communication and do queries with postgres

### Models

Data model types

-   **company** - stores data model for companies data
    -   price separated for readability

### Routes

Routes for the `express.js` know and handle each path

-   **companyRoute** - single instance route to handle all the paths directioned for companies domain
    -   responsible to instanciate the `companyService` and requests it data

### Services

Services for interaction with external data requests

-   **companyService** - single instance service to load companies domain data and do some logic
    -   responsible to instanciate the `postgresDatabase` and requests it data

## Libraries

-   **pg** - node postgres library to connect to database
-   **dotenv** - loads .env variables into api context
-   **express** - node web framework
-   **morgan** - express middleware for logging
-   **route-cache** - express middleware for cache
-   **typescript** - enables types while using javascript
-   **babel** - transcompiler for the javascript versions
-   **eslint** - lints the code
-   **prettier** - prettiers the code
-   **lint-staged** - precommit hook usage (linters normally)
