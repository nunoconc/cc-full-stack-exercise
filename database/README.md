# Database

Developed using PostgreSQL database.
The values are loaded initially using the json data file.

## Purpose

Initialize database container.\
Storage for the data from [data.json](./data/data.json) file.

## Setup

For this project will be necessary to install `npm` and `node`.\
Before running first start from install command `npm install`.

## Run

Just run the global command `npm run start`.

## Commands

- **npm create** - creates database table and inserts values
- **docker** - launchs docker with the postgres instance
- **docker:detach** - launchs docker with the postgres instance detached
- **start** - launch docker and create database

## Schema

|    **Coluna**    | Tipo                            |
| :--------------: | ------------------------------- |
|      **id**      | integer _Incremento Automático_ |
|    **ticker**    | character varying(50) _NULL_    |
| **securityName** | character varying(50) _NULL_    |
|    **sector**    | character varying(50) _NULL_    |
|   **country**    | character varying(50) _NULL_    |
|    **trend**     | numeric _NULL_                  |
|    **prices**    | jsonb _NULL_                    |

## Libraries

- **pg** - node postgres library to connect to database
