# GeneePlate
This is a Boiler Plate for NodeJs, ExpressJs and MongoDB applications.

Provides new users a base model for a NodeJs Application to just download this repo and start coding without wasting time in building a structure and server connection for your NodeJs Application 

# Usage
To install all the required packages
```bash
npm i
```
To start the connection
```bash
npm start
```

# Directory Structure
```bash

|--- config
|   └--- mongo.json
|--- controllers
|   └--- authControllers.js
|--- helpers
|   └--- authHelpers.js
|--- models
|   └--- Users.js
|--- routes
|   └--- authRoutes.js
|--- .gitignore
|--- package.json
|--- README.md
└--- server.js

```

Config: This directory contains all configuration, keys, and urls for your application

Controllers: This directory contains all your controller methods. Controllers are specific purpose methods to perform a specific task and are usually used by your routes

Helpers: This directory contains all your helper methods. Helpers are general purpose methods to perform a single task and are usually used by multiple methods 

Models: This directory contains all your mongoDB models

Routes: This directory contains all the route files

.gitignore: This file contains information for all the files/directories NOT to be uploaded on repository

package.json: Node package.json file contains information related to your application and the packages installed for your application

server.js: This file contains your application configurations and server connection