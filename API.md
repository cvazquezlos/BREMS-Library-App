# BREMS - API REST System

## About our API
All you can find in our API Rest is information about users, loans, fines (penalties), resources, types, copies and genres. All you need to do is simply; you have to follow the API rules. If you try to do following a different way, it's probably what you will recieve an error.

## How to use our API
1. Download [Postman][Postman link].
2. You only can send GET, POST, PUT and DELETE requests.
3. Our API has a public side where you can make very simple requests. If you want to make other type of requests (take a look at your profile, your loans...), you have to log in before try it.
4. Once you are logged in (or not) you can send many requests as you want (always following our rules).
5. If you want to finish your session, just log out from the API.

## API requests
### Resources
Resources API has GET(2), POST(1), PUT(1) and DELETE(1) methods. Like an unregistered user, you only are allowed to send GET requests. Like a registered user, you only are allowed to send GET requests too. Like an administrator user, you are allowed to send any request.
All Request URLs can be send by typing http://localhost:8443 followed by the request URL containt in the following tables.

#### GET methods

|Type|Request description|Request URL|Success response|Error response|
|----|-------------------|-----------|----------------|--------------|
|1|Shows all resources (you can apply optional filters like genre and type).|/api/resources/all?genre=genre&type=type|Resource list and *OK* (200).|*NOT_FOUND* (404)|
|2|Shows a determinated resource|/api/resources/id|Resource and *OK* (200).|*NOT_FOUND* (404)|

#### POST method

|Type|Request description|Request URL|Request body|Success response|Error response|
|----|-------------------|-----------|------------|----------------|--------------|
|1|Creates a new resource.|/api/resources/|See below|New resource and *CREATED* (201)|*BAD_REQUEST* (406)|

##### Type 1 method Request body:
```json
 {
  "title": newTitle,
  "author": newAuthor,
  "editorial": newEditorial,
  "description": newDescription,
  "resourceType": {
     "id": typeId
  },
  "genre": {
     "id": genreId
  },
  "copies": [
  {
     "id": newAndUniqueCopyId,
     "locationCode": newAndUniqueResourceId+FirstThreeLettersOfTitle+newAndUniqueCopyId
  }]
 }
```
#### DELETE method

|Type|Request description|Request URL|Success response|Error response|
|----|-------------------|-----------|----------------|--------------|
|1|Deletes a resource if doesn't have pending loans.|/api/resources/id|Deleted resource and *OK* (200)|*CONFLICT* (409) or *NOT_FOUND* (404)|

#### PUT method

|Type|Request description|Request URL|Request body|Success response|Error response|
|----|-------------------|-----------|------------|----------------|--------------|
|1|Modifies an existing resource (you can modify limited attributes like title, description...).|/api/resources/id|See below|Modified resource and *OK* (200)|*NOT_FOUND* (404)|

##### Type 1 method Request body (example using id 1)
```json
 {
  "id": 1,
  "title": modifiedTitle,
  "author": modifiedAuthor,
  "editorial": modifiedEditorial,
  "picture": "1.jpg",
  "noReservedCopies": [
     "1GaCi3"
  ],
  "avaiblereserve": true,
  "description": modifiedDescription,
  "resourceType": {
     "id": modifiedResourceTypeId
  },
  "genre": {
     "id": modifiedGenreId
  },
  "copies": [
     {
       "id": 1,
       "locationCode": "1GaCi1"
     },
     {
       "id": 2,
       "locationCode": "1GaCi2"
     },
     {
       "id": 3,
       "locationCode": "1GaCi3"
     }
  ]
 }
```

### Users
Users API has GET(2), POST(1), PUT(1) and DELETE(1) methods. Like an unregistered user, you only are not allowed to send requests. Like a registered user, you only are allowed to send an unique GET request which shows to you information about your account. Like an administrator user, you are allowed to send any request.
All Request URLs can be send by typing http://localhost:8443 followed by the request URL containt in the following tables.

#### GET methods

|Type|Permissions|Request description|Request URL|Success response|Error response|
|----|----|---------------|-----------|----------------|--------------|
|1|Admin|Shows all users.|/api/users/all|User list and *OK* (200).|*NOT_FOUND* (404)|
|2|Admin|Shows a determinated user.|/api/users/id|User and *OK* (200).|*NOT_FOUND* (404)|
|3|User|Shows information about your account.|/api/users/id|User and *OK* (200).|*NOT_FOUND* (404)|

#### POST method

|Type|Request description|Request URL|Request body|Success response|Error response|
|----|-------------------|-----------|------------|----------------|--------------|
|1|Creates a new user.|/api/users/|See below|New user and *CREATED* (201)|*BAD_REQUEST* (406)|

##### Type 1 method Request body:
```json
 {
  "name": newName,
  "dni": newDni,
  "firstName": newFirstName,
  "lastName1": newLastName,
  "lastName2": newLastName,
  "email": newEmail,
  "telephone": newPhone,
  "avatar": "user_undefined_f.png",
  "literaryHobby": [
    firstHobby,
    secondHobby,
    thirdHobby,
    ...
  ],
  "actions": [],
  "penalties": [],
  "roles": [
    "ROLE_USER",
    "ROLE_ADMIN"
  ]
 }
```
#### DELETE method

|Type|Request description|Request URL|Success response|Error response|
|----|-------------------|-----------|----------------|--------------|
|1|Deletes an user if doesn't have pending loans.|/api/users/id|Deleted user and *OK* (200)|*CONFLICT* (409) or *NOT_FOUND* (404)|

#### PUT method

|Type|Request description|Request URL|Request body|Success response|Error response|
|----|-------------------|-----------|------------|----------------|--------------|
|1|Modifies an existing user (you can modify limited attributes like name, email...).|/api/users/id|See below|Modified user and *OK* (200)|*NOT_FOUND* (404)|

##### Type 1 method Request body (example using id 1)
```json
 {
  "id": 1,
  "name": "carlosv",
  "dni": modifiedDni,
  "firstName": modifiedFirstName,
  "lastName1": modifiedLastName,
  "lastName2": modifiedLastName,
  "email": modifiedEmail,
  "telephone": modifiedPhone,
  "viewTelephone": false,
  "address": null,
  "biography": modifiedBiography,
  "avatar": "user_undefined_f.png",
  "avaibleLoans": 2,
  "isBanned": false,
  "literaryHobby": [
    "Ciencia ficción",
    "Terror",
    "Novela",
    "Literatura",
    "Drama"
  ],
  "actions": [
    {
      "id": 1,
      "dateLoanInit": 1489411423000,
      "dateLoanGiven": null,
      "dateLoanReturn": null
    }
  ],
  "penalties": [],
  "roles": [
    "ROLE_USER"
  ]
 }
```

### Loans
Loans API has GET(2), POST(1), PUT(1) and DELETE(1) methods. Like an unregistered user, you only are not allowed to send requests. Like a registered user, you only are allowed to send GET requests which shows to you information about your loans. Like an administrator user, you are allowed to send any request.
All Request URLs can be send by typing http://localhost:8443 followed by the request URL containt in the following tables.

#### GET methods

|Type|Permissions|Request description|Request URL|Success response|Error response|
|----|----|---------------|-----------|----------------|--------------|
|1|Admin|Shows all loans.|/api/loans/all|Action list and *OK* (200).|*NOT_FOUND* (404)|
|2|Admin|Shows a determinated loan.|/api/loans/id|Action and *OK* (200).|*NOT_FOUND* (404)|
|3|User|Shows all user's loans.|/api/loans/all|Action list and *OK* (200).|*NOT_FOUND* (404)|
|4|User|Shows information about your loan.|/api/loans/id|Action and *OK* (200).|*NOT_FOUND* (404)|

#### POST method

|Type|Request description|Request URL|Request body|Success response|Error response|
|----|-------------------|-----------|------------|----------------|--------------|
|1|Creates a new loan (if user doesn't have a fine).|/api/loans/|See below|New loan and *CREATED* (201)|*BAD_REQUEST* (406)|

##### Type 1 method Request body:
```json
 {
   "copy": {
     "id": idCopy,
     "locationCode": locationCode,
     "resource": {
       "id": idResource
     }
   },
   "user": {
     "id": idUser
   }
 }
```
#### DELETE method

|Type|Request description|Request URL|Success response|Error response|
|----|-------------------|-----------|----------------|--------------|
|1|Deletes a loan if the resource has been returned.|/api/loans/id|Deleted loan and *OK* (200)|*CONFLICT* (409) or *NOT_FOUND* (404)|

#### PUT method

|Type|Request description|Request URL|Request body|Success response|Error response|
|----|-------------------|-----------|------------|----------------|--------------|
|1|Gives or returnes a resource (you can't modify anything).|/api/loans/id?action=action|See below|Modified user and *OK* (200)|*NOT_FOUND* (404)|

##### Type 1 method Request body (example using id 1)
```json
{
  "id": 1,
  "dateLoanInit": 1489411423000,
  "dateLoanGiven": null,
  "dateLoanReturn": null,
  "copy": {
    "id": 1,
    "locationCode": "1GaCi1",
    "resource": {
      "id": 1,
      "title": "Cien años de soledad",
      "author": "Gabriel García Márquez",
      "editorial": "Editorial Sudamericana",
      "picture": "1.jpg",
      "noReservedCopies": [
        "1GaCi3"
      ],
      "avaiblereserve": true,
      "description": "Cien años de soledad es..."
    }
  },
  "user": {
    "id": 1,
    "name": "carlosv"
  }
}
```
[Postman link]: https://www.getpostman.com/