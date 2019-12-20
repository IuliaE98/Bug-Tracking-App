# Bughunter

This is a project to help you track your bugs in your project. It was made by Racoviță Iulia-Elena, Rotaru Malina-Petruta, Sfetcu Andreea, Sfîrloagă Bianca and Simioniuc Beatrice-Cătălina.

# Technologies used
Bughunter is using React.js for frontend and Express.js for backend. It's also using MySQL for the database and Sequelize as ORM.

# API documentation
## User
Get all users
#### Request
`GET /user`
#### Response
```json
[{
	"firstName": "User",
	"lastName": "User",
	"email": "user@example.com",
	"password": "password",
	"role": "user"
},
{
	"firstName": "User2",
	"lastName": "User2",
	"email": "user2@example.com",
	"password": "password2",
	"role": "tester"
}]
```
---
Get an user by email 
#### Request
`GET /user/:email`
#### Response
```json
[{
	"firstName": "User",
	"lastName": "User",
	"email": "user@example.com",
	"password": "password",
	"role": "user"
}]
```
---
Create user
#### Request
`POST /user`
#### Response
##### 201
```json
[{
	"message": "User added successfully."
}]
```
##### 400
```json
[{
	"message": "Invalid user payload."
}]
```
---
Update user
#### Request
`PUT /user/:email`
#### Response
```json
[{
    "message": "User updated succesfully"
}]
```
---
Delete user
#### Request
`DELETE /user/:email`
#### Response
```json
[{
	"message": "User succesfully deleted"
}]
```

## Project
Get all projects
#### Request
`GET /project`
#### Response
```json
[{
	"identifier": "1",
	"name": "project",
	"repoLink": "https://git.com/repo"
},
{
	"identifier": "2",
	"name": "project2",
	"repoLink": "https://git.com/repo2"
}]
```
---
Get an project by id 
#### Request
`GET /project/:id`
#### Response
```json
[{
	"identifier": "1",
	"name": "project",
	"repoLink": "https://git.com/repo"
}]
```
---
Create project
#### Request
`POST /project`
#### Response
##### 201
```json
[{
	"message": "Project added successfully."
}]
```
##### 400
```json
[{
    "message": "Invalid project payload."
}]
```
---
Update project
#### Request
`PUT /project/:id`
#### Response
```json
[{
	"message": "Project updated successfully."
}]
```
---
Delete project
#### Request
`DELETE /project/:id`
#### Response
```json
[{
	"message": "Project succesfully deleted"
}]
```

## Bug
Get all bugs
#### Request
`GET /bug`
#### Response
```json
[{
	"identifier": "1",
	"name": "Big bug",
	"priority": "minor"
},
{
	"identifier": "2",
	"name": "Bigger bug",
	"priority": "critical"
}]
```
---
Get an bug by id 
#### Request
`GET /bug/:id`
#### Response
```json
[{
	"identifier": "2",
	"name": "Bigger bug",
	"priority": "critical"
}]
```
---
Create bug
#### Request
`POST /bug`
#### Response
##### 201
```json
[{
	"message": "Bug added successfully."
}]
```
##### 400
```json
[{
    "message": "Invalid bug payload."
}]
```
---
Update bug
#### Request
`PUT /bug`
#### Response
```json
[{
	"message": "Bug updated successfully."
}]
```
---
Delete bug
#### Request
`DELETE /bug/:id`
#### Response
```json
[{
	"message": "Bug succesfully deleted"
}]
```