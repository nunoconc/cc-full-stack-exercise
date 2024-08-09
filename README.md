# Full Stack Exercise - Security

## Purpose

Code Challenge exercise.

Full stack application to present companies security values in a list and details view.

## Setup

For this project will be necessary to install `npm` and `node`.\
Before running first start from install command `npm install`.

## Run

Just run the following commands, to launch each part:

- `npm run start:database`
- `npm run start:backend`
- `npm run start:frotend`

## Commands

- **postinstall** - run husky install and folder creation, plus install all the subfolder projects
- **install:all** - install all subfolders (database, backend, frontend)
- **start:database** - launch docker container and inserts values in database
- **start:backend** - launch docker container and runs backend rest api
- **start:frotend** - runs frontend web app

## Structure

### Database

See more inside [documentation](/database/README.md)

### Backend

See more inside [documentation](/backend/README.md)

### Frontend

See more inside [documentation](/frontend/README.md)

## Libraries

- **Husky** - used for pre commit hooks
- **Commitlint** - lint commit message

---

# Improvements

1. Develop tests with help of libaries like jest and cypress to have both unit tests and automated functional tests.
2. Complete pipeline with the tests validation and plus the deployment of each npm package, frontend and backend.\
   Making automated as possible the process since the change on the coden to, PR, review, ... pipeline and finally deploy.
3. The backend could have hypermedia links that would enhance the returned data with links that possibilitate navigations or extra information requests.\
    Examples: 
    * List navigation to next, initial or end page.
    * Details prices as an extra request to lazyload chart. 
