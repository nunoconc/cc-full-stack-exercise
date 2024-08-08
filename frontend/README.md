# Frontend

React SPA web application to display the data obtained from the backend.

## Purpose

Web application that presents companies security information.\
Displays two different screens:

-   List (/securities) or (/securities?page={n})
-   Details (/securities/:symbol)

## Setup

For this project will be necessary to install `npm` and `node`.\
Before running first start from install command `npm install`.

## Run

Just run the global command `npm run start`.

## Commands

-   **precommit** - used to run has a precommit hook to validate lint
-   **start** - starts the web application
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

### Context

Stores all the context components that take advantage of the hook `useContext`.

-   **appContext** - global application context
    -   in this case saves single instance of `securityService`

### Services

Place where all the ncessary services are organized.\
Single instances or possible helper functions that use external dependencies.

-   **securityService** - requests the `backend` all the needed security data
    -   uses axios to help with the http requests

### Types

Where you will find all the types, object, enums, etc.\
Saved in different files per each domain case.

-   **company** - type to be used to receive and present the company data
-   **price** - inside company field to define price list
    -   separated to enchance readability
-   **enum** - price attribues names
    -   used for the chart options to avoid repeated strings around

## Libraries

-   **react** - build the user interface
-   **axios** - responsible for doing the http requests
-   **mui** - styling library used to enchance the css
-   **typescript** - enables types while using javascript
-   **highcharts** - draws multiple types of charts and was used with the prices information
-   **babel** - transcompiler for the javascript versions
-   **eslint** - lints the code
-   **prettier** - prettiers the code
-   **lint-staged** - precommit hook usage (linters normally)
