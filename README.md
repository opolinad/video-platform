#  Videos Creator Platform

Welcome to Videos Creator Platform, in this document you are going to find the instructions to setup and run this project. First of all you have one of three options to acquire the code:

1. Clone the repo (please note that no changes are allowed to this repo).
2. Fork the repo
3. Download the code as a zip

## Backend server

Once you have the code in your computer, you must install docker in order to work with the PostgreSQL database.

Before you can setup the Postgres Docker, you must make a copy of the .env.example file and change it's name to .env file.

Now you are goos to go, to run the container you should run the following command:

`docker-compose --enf-file .env up -d`

After the instalation and setup is complete, the following command must be run in order to install all the dependencies:

`npm run install`

Finally, you can run:

`npm run start:dev`

## Frontend server

This one is way much easier, just two commands are needed:

`npm install`

`npm start`