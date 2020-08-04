# List of Endpoints

### POST /todos

> Create a new Todo task

_Request Header_

```
not needed
```

_Request Body_

```
{
    "title": <String>,
    "description": <String>,
    "due_date": <Datetype>
}
```

_Response (201 - Created)_

```
{
    "id": <given by system>,
    "title": <inputted title>,
    "description": <inputted description>,
    "due_date": <inputted date>,
    "status": false
    "createdAt": "<date the task is created>",
    "updatedAt": "<date the task is updated>"
}
```

_Response (500 - Internal Server Error)_

```
{
    "errorCode": "<Some Internal Server Error Message>",
    "message": "Internal Server Error"
}
```

### GET /todos

> Show all Todo tasks

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200 - Success)_

```
[
    {
        "id": 1,
        "title": "todo 1",
        "description": "todo 1 description",
        "status": false,
        "due_date": null,
        "createdAt": "2020-08-04T20:09:23.092Z",
        "updatedAt": "2020-08-04T20:09:23.092Z"
    },
    {
        "id": 2,
        "title": "todo 2",
        "description": "todo 2 description",
        "status": false,
        "due_date": null,
        "createdAt": "2020-08-04T20:09:27.923Z",
        "updatedAt": "2020-08-04T20:09:27.923Z"
    }
]
```

_Response (500 - Internal Server Error)_

```
{
    "errorCode": "<Some Internal Server Error Message>",
    "message": "Internal Server Error"
}
```

### GET /todos/:id

> Show one specific Todo task

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200 - Success)_

```
{
    "id": 1,
    "title": "todo 1",
    "description": "todo 1 description",
    "status": false,
    "due_date": null,
    "createdAt": "2020-08-04T20:09:23.092Z",
    "updatedAt": "2020-08-04T20:09:23.092Z"
}
```

_Response (404 - Not Found)_

```
{
    "errorCode": "DataNotFound",
    "message": "Data not found"
}
```

_Response (500 - Internal Server Error)_

```
{
    "errorCode": "<Some Internal Server Error Message>",
    "message": "Internal Server Error"
}
```

### PUT /todos/:id

> Edit a Todo task

_Request Header_

```
not needed
```

_Request Body_

```
{
    "title": <String>,
    "description": <String>,
    "due_date": <Datetype>
}
```

_Response (200 - Success)_

```
{
    "id": 1,
    "title": "updated todo 1",
    "description": "updated todo 1 description",
    "status": false,
    "due_date": null,
    "createdAt": "2020-08-04T20:09:23.092Z",
    "updatedAt": "2020-08-04T20:09:23.092Z"
}
```

_Response (404 - Not Found)_

```
{
    "errorCode": "DataNotFound",
    "message": "Data not found"
}
```

_Response (500 - Internal Server Error)_

```
{
    "errorCode": "<Some Internal Server Error Message>",
    "message": "Internal Server Error"
}
```

### DELETE /todos/:id

> Delete a Todo task

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```
_Response (200 - Success)_

```
{
    "message": "Data deleted",
    "data": {
        "id": 1,
        "title": "updated todo 1",
        "description": "updated todo 1 description",
        "status": false,
        "due_date": null,
        "createdAt": "2020-08-04T20:09:23.092Z",
        "updatedAt": "2020-08-04T20:09:23.092Z"
    }
}
```

_Response (404 - Not Found)_

```
{
    "errorCode": "DataNotFound",
    "message": "Data not found"
}
```

_Response (500 - Internal Server Error)_

```
{
    "errorCode": "<Some Internal Server Error Message>",
    "message": "Internal Server Error"
}
```