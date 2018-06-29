# Introduction

Implement a RESTful API for managing wines. 

# Prerequesits
## Accounts
- [GITHUB](https://github.com/)
- [HEROKU](https://www.heroku.com/)

## TOOLS
- [git client](https://git-scm.com/)
- [VisualStudio Code](https://code.visualstudio.com/)
- [heroku cli](https://devcenter.heroku.com/articles/heroku-cli)
- [Postman](https://www.getpostman.com/)

## Base Technologies
- [node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [mongoDB](https://www.mongodb.com/)

# Folder structure
```
+---api
+---server
\---test
```

# Heroku deployment
In the local project folder:
```
$ heroku create
$ git push heroku master
$ heroku open
```
Create a database:
```
$ heroku addons:create mongolab
```
Validate database uri via:
```
$ heroku config:get MONGODB_URI
```

To run it locally set the database environent variable and start with [localhost:3000](http://localhost:3000/).

# Possible improvements

- [ ] Pipline
	- [ ] Dependecy check
	- [ ] Code coverage
	- [ ] Code dublicates
	- [ ] Depolyment
	- [ ] Generate swagger
- [ ] Reviese linting rules
- [ ] Security
- [ ] Rize test coverage
- [ ] Securing routes
- [ ] Add logging

# Helpful Links
- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)