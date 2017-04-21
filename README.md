# LouEatsVille

### Overview
LouEatsVille is a project undertook by a group of students in the University of Louisville's Computer Engineering and Science, Software Engineering class (CECS 550). The students wanted to create a piece of software that could be used by the citizens of Louisville in some meaningful fashion. LouEatsVille is the product of that vision. LouEatsVille takes advantage of the [Louisville Open Data Portal](http://portal.louisvilleky.gov/service/data), which is data collected by the City of Louisville that is then released on the open web. More specifically, LouEatsVille takes advantage of the [Health Inspection and Violation Dataset](https://data.louisvilleky.gov/dataset/yelp-data). LouEatsVille provides users with a familier Google maps interface, that can then be searched for specfic businesses. The map provides a visualazation of the businesses latest Health Inspection score, and colors it accordingly. The application also provides the ability to view a detailed history of a businesses complete health inspection history.

The current application can be viewed [here](https://loueatsville.herokuapp.com).

# Technology Stack

LouEatsVille is divided into two distinct parts, a Single Page Web Application that acts as a client, and a server that hosts a ReST API. 

## Server
The server is built on Python, and more specifically Python 3. Django is used as for scaffolding and used for the Object-Resource Mapping (ORM) that it provides. The Django Rest Framework is used as a scaffold for developing the Rest API that is exposed by the application. 

##### Setup For Development
To set up the LouEatsVille API for devlopment first make sure that you have Python3 and Pip3 installed. It is reccommmended (Not required) that you set up a Python virtual enviorment for running the application. The documentation for Python virtualenv can be found [here](https://virtualenv.pypa.io/en/stable/).

1. Install [Postgres Database](https://www.postgresql.org/)
2. Create Development Database in Postgres
```sql
CREATE DATABASE loueatsville WITH [YOUR_USER_HERE];
```

2. Install Dependencies (Django, Django ReST)

```bash
$ cd server
$ pip install -r requirements.txt
```

2. Create a config.json in src directory
```bash
$ cd src
$ touch config.json
```
LouEatsVille usese a custom build configuration environment for simply deployment to our production servers. The config.json file tells the application what environment is being ran, and which database to be connected to. This allows for auto configuration of the development machines and servers. A typical config.json for development looks like:
```json
{
	"state": "dev",
    "secret_key": "This is a secret key",
    "database_name": "loueatsville",
    "database_user": "admin",
    "database_password" "password",
    "database_host": "localhost"
}
```
3. Run Database Migrations, and populate the Database
```bash
$ python manage.py makemigrations
$ python manage.py update_db
```
LouEatsVille provides a database population script, which is provided as a custom django managemtn command, that pulls doen the most recent health inspection data from the Louisville Open Data Portal.
3. Run the tests and the server
```bash
$ python manage.py test
$ python manage.py runserver 0.0.0.0:8000
```
4. Access the api at localhost:8000/api/

## Client
LouEatsVille provides a Single Page Web Application for viewing the data that is retrieved from the API. This Single Page Web Application is built using Angular2. 

### Setting up for Development
For Development a seperate development server is used to host the Single Page Web Application. Webpack and the webpack-dev-server are used for bundling, and hosting the development server. Karma is used for unit testing the SPA. Since the SPA depends on the data of the server, a proxy is set up to proxy all requests to the /api/ endpoint to the Python application. This is configured in proxy.conf.json.

1. Install [Node.js](https://nodejs.org/en/)
2. Install Frontend Dependencies via NPM 
```bash
$ cd client
$ npm install
```
3. Run the tests and application
```bash
$ npm test
$ npm start
```
4. Access the application on localhost:4200


## Deployment
A custom build process is use to steamline deployment to heroku. This process should only be ran if delpoying to the production server. In the root directort lives a build.sh file. Simply run this script, and a new directoy called /build will be created. This is the directory that needs to be deployed to the server. A config.json file will need to be provided on the sever similar to development. The state of the config file will change from 'dev' to 'prod'. 

#### Maintainers:
* Sheldon Burks
* Jacob Matchuny
* David (Pearce) Decker
* Brad Olges
* Nick Disibio
