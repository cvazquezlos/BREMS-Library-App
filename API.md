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
|1|Shows all resources (you can apply optional filters like genre and type).|/api/resources/all?genre=genre&type=type|Resources list and *OK* (200).|*NOT_FOUND* (404)|
|2|Shows a determinated resource|/api/resources/id|Resource and *OK* (200).|*NOT_FOUND* (404)|

#### POST method

|Type|Request description|Request URL|Request body|Success response|Error response|
|----|-------------------|-----------|------------|----------------|--------------|
|1|Creates a new resource.|/api/resources/|See below|New resource and *CREATED* (201)|*BAD_REQUEST* (406)|

##### Type 1 method Request body:
```json
 {
  "id": newAndUniqueResourceId,
  "title": Title,
  "author": Author,
  "editorial": Editorial,
  "picture": id.jpg,
  "noReservedCopies": [],
  "avaiblereserve": true,
  "description": Description,
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

[Postman link]: https://www.getpostman.com/
