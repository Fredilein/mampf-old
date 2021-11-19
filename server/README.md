# Mampf Server

📚 Template inspired by [this tutorial](https://codesource.io/setting-up-vue-authentication-using-expressjs-mongodb-and-jwt/)

📄 [API Documentation](https://documenter.getpostman.com/view/2896538/UVCCfjZ9)

## Installation

### Prerequisites
**Install and run database**. MongoDB because easy to use, free hosting possible.
```
$ brew install mongodb-community
$ brew services start mongodb-community
```

**Install nodemon globally**. Enables instant reload on file change.
```
$ npm install -g nodemon
```

### Mampf Installation

```
$ cd server/
$ npm install
```

### Run Mampf Server

```
$ nodemon
```

## Technologies
- **ExpressJS**. Handles Requests...
  - [Website](http://expressjs.com)
- **MongoDB**. Document based database. A lot easier to use than SQL.
  - Mongoose handles everything db related:
- **Mongoose**. Mongodb object modeling
  - [Website](https://mongoosejs.com)
- **JWT**. Json Web Tokens used for authentication
  - [jwt.io](https://jwt.io)
  - Kinda cool and easy to use

## Folder structure

Most relevant code is in `api/`. Folders are grouped by functionality. Each folder has the below structure:

- *controller*
  - Group related functions, such as adding something to the DB
- *model*
  - Defines the database model (Kinda like columns in SQL)
- *route*
  - Maps routes for the client to functions in the controller
