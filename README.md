# Famous Rivers

This example application is a demonstration of building an Express application. This is for the _Developing Web Applications_ course for the **MSc. Operational Cyber Security** program from the University of Greenwich.

## Technologies

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [ElephantSQL](https://www.elephantsql.com/)
- [Zeit](https://zeit.co/)

## Getting Started

Clone or download this repository into a folder on your hard drive. Using the terminal
navigate into the folder containing this repository.

**Install the dependencies**

```bash
$ npm install
```

**Configure the Database**
Rename the _example.env_ file to _.env_ and edit it to add your database credentials to that file.
When you create a postgres instance on ElephantSQL you will be given the database name, username, password and host to use. Enter them in the file and save.

```bash
NODE_ENV=development
PORT=9000
DATABASE=YOUR_DATABASE_NAME_HERE
DB_USER=YOUR_DATABASE_USER_NAME_HERE
DB_PASSWORD=YOUR_DATABASE_PASSWORD_HERE
DB_HOST=YOUR_DATABASE_SERVER_HERE
```

**Run the development server**

```bash
$ npm run dev
```

## Deployment

Ensure that the _now cli_ is installed:

```bash
$ npm install -g now
```

Then login to now:

```bash
$ npw login
```

Then set environment variables on the server

```bash
$ now secret add DATABASE YOUR_DATABASE_NAME_HERE
$ now secret add DB_USER YOUR_DATABASE_USER_NAME_HERE
$ now secret add DB_PASSWORD YOUR_DATABASE_PASSWORD_HERE
$ now secret add DB_HOST YOUR_DATABASE_SERVER_HERE
```

Ensure that you use the same values from your .env file.

Then deploy your app:

```bash
$ now
```

Enjoy!
