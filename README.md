#  Videos Creator Platform

Welcome to Videos Creator Platform, in this document you are going to find the instructions to setup and run this project. First of all you have one of three options to acquire the code:

1. Clone the repo (please note that no changes are allowed to this repo).
2. Fork the repo
3. Download the code as a zip

## Backend server

Once you have the code in your computer, you must install docker in order to work with the PostgreSQL database.

Before you can setup the Postgres Docker, you must make a copy of the .env.example file and change it's name to .env file.

Now you are good to go, to run the container you should run the following command (just make sure that docker-compose.yml and .env are in the same folder):

`docker-compose --enf-file .env up -d`

After the instalation and setup is complete, the following command must be run in order to install all the dependencies:

`npm run install`

In order to prepare to migrate models and seed database, you should run:

`npm run build:dev`

Finally, you can run:

`npm run start:dev`

NOTE: Authentication services ARE working, but in order to test the front end, the are disabled. To enable them, just uncomment the line 10 in the file index.ts located in Back/src/api/routes

## Frontend server

This one is way much easier, just two commands are needed:

`npm install`

`npm start`