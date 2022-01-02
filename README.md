This is a simple API for Dungeon World monsters, built to learn GraphQL with Javascript.

# Project Stack

* Docker
* Docker-Compose
* Javascript/Typescript
* Express
* GraphQL
* Postgres

## Run a copy of this server yourself.

First, clone this repo to your local system, ensure that both Docker and Docker Compose are installed.

### Development
To start the development Docker container run `make dev-up`. This will start the server on localhost:3000 and open a port for a debugger on localhost:9229

Use command `make dev-down` to stop the Docker container. 

### Production
To start the production Docker container run `make prod-up`. This will start the production server on localhost:3000.

Use command `make prod-down` to stop the Docker container.

### Testing
Run Jest unit tests with `make run-tests`.
