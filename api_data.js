define({ "api": [
  {
    "type": "post",
    "url": "/events/{event_id}/dress-codes",
    "title": "Create Dress Code Entity",
    "name": "CreateDressCode",
    "group": "DressCode",
    "description": "<p>Create a new DressCode entity for event with event_id. This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "[\n    {\n        \"dressName\": \"DressCode name\",\n        \"color1\": \"Rose\",\n        \"color2\": \"Gold\"\n    },\n    ...\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5aaa41c8b854660004011b60\",\n         \"dressName\": \"DressCode name\",\n         \"color1\": \"Rose\",\n         \"color2\": \"Gold\"\n     },\n     ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/dress-code\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"detail: \"New meal cannot already have an ID\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "DressCode",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/dress-codes"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/dress-codes",
    "title": "Deletes all DressCodes",
    "name": "DeleteAllDressCode",
    "group": "DressCode",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"message\": \"Successfully deleted all dress-code associated with Event {id}  \"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "DressCode",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/dress-codes"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/dress-code/{dress_code_id}",
    "title": "Delete Dress Code with ID",
    "name": "DeleteDressCode",
    "group": "DressCode",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "dress_code_id",
            "description": "<p>DressCode unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Event with id {id} deleted successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "DressCode",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/dress-code/{dress_code_id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/events/{event_id}/dress-code",
    "title": "Edit/Update Dress Code Entity.",
    "name": "EditDressCode",
    "group": "DressCode",
    "description": "<p>Modified DressCode entity with id {meal_id} for event of id {event_id}. This endpoint should only be called with the Planner's authorization token.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ],
        "Parameters": [
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>DressCode unique ID.</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": true,
            "field": "dressName",
            "description": "<p>DressCode unique ID.</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": true,
            "field": "color1",
            "description": ""
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": true,
            "field": "color2",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"id\": \"5aaa41c8b854660004011b60\",\n    \"dressName\": \"DressCode name\",\n    \"color1\": \"Rose\",\n    \"color2\": \"Gold\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaa41c8b854660004011b60\",\n    \"dressName\": \"DressCode name\",\n    \"color1\": \"Rose\",\n    \"color2\": \"Gold\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/programme\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"detail: \"Must specify the DressCode ID in has a parameter\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "DressCode",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/dress-code"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{event_id}/dress-codes",
    "title": "List all Dress Code.",
    "name": "ListDressCodes",
    "group": "DressCode",
    "description": "<p>.Gets the all the DressCode entities associated with the event with id {event_id}.This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5aaa41c8b854660004011b60\",\n         \"dressName\": \"DressCode name\",\n         \"color1\": \"Rose\",\n         \"color2\": \"Gold\"\n     },\n     ...\n     {\n         \"id\": \"5aaa41c8b854660004011b60\",\n         \"dressName\": \"DressCode name\",\n         \"color1\": \"Rose\",\n         \"color2\": \"Gold\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "DressCode",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/dress-codes"
      }
    ]
  },
  {
    "type": "post",
    "url": "/events",
    "title": "Create New Event",
    "name": "CreateEvent",
    "group": "Events",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"locations\":[\n         {\n             \"name\": \"Main Building\",\n             \"address\": \"20, Ulikooli Tn\",\n             \"extra\": \"extras\"\n         },\n         ...\n      ],\n     \"image\":{\n         \"name\": \"Image Name\",\n         \"url\": \"Image url\"\n     },\n     \"open\" : \"0\",\n     \"published\" : 0,\n     \"maxInvite\": 100\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"locations\": [\n         {\n             \"id\": \"5aca7a297948b76868dde727\",\n             \"name\": \"Main Building\",\n             \"address\": \"20, Ulikooli Tn\",\n             \"extra\": \"extras\"\n         },\n         ...\n      ],\n     \"image\":{\n         \"name\": \"Image Name\",\n         \"url\": \"Image url\"\n     },\n     \"creator\": {\n         \"id\": \"5aca794e7948b754ace854fa\",\n         \"name\": \"Thanos Dione\",\n         \"phone\": \"+12345678909\",\n         \"email\": \"thanos.dione@gmail.com\"\n     },\n     \"gifts\": [...],\n     \"programmes\": [...],\n     \"meals\": [...],\n     \"dressCodes\": [...],\n     \"open\": 0,\n     \"published\": 0,\n     \"maxInvite\": 100\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"detail: \"New event cannot already have an ID\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events"
      }
    ]
  },
  {
    "type": "put",
    "url": "/events/{event_id}/gallery",
    "title": "Create Gallery Entity",
    "name": "CreateGallery",
    "group": "Events",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "[\n         {\n             \"name\": \"Image Name\",\n             \"url\": \"Image url\"\n         },\n         ...\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"9r8808ioujn98u80u8909ik\"\n    \"event\": {\n        \"id\": \"5acd58af2ac649498c5c4d86\",\n        \"name\": \"First Planned Event\",\n        \"details\": \"This is the first Event I inserted into the Database\"\n    },\n    \"images\": [\n        {\n            \"name\": \"Image Name\",\n            \"url\": \"Image url\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/gallery\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"detail: \"New meal cannot already have an ID\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gallery"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{id}",
    "title": "Delete Event",
    "name": "DeleteEvent",
    "group": "Events",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Event with id {id} deleted successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/5acd58af2ac649498c5c4d86\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{id}",
    "title": "Get Event details",
    "name": "GetEvent",
    "group": "Events",
    "description": "<p>The the event entity for the given ID.This endpoint should only be called with the Planner's authorization token</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"locations\": [\n         {\n             \"id\": \"5aca7a297948b76868dde727\",\n             \"name\": \"Main Building\",\n             \"address\": \"20, Ulikooli Tn\",\n         },\n         ...\n     ],\n     \"open\": 0,\n     \"published\": 0,\n     \"maxInvite\": 100,\n     gifts:[\n         {\n             \"id\": \"5aaa41c8b854660004011b60\",\n             \"giftName\": \"First Planned Event\",\n             \"giftUrl\": \"http://hdvckpc.sdinv.com/pilskmvik/pojklmcvhj/pofdshk.png\"\n         }\n         ...\n     ],\n     programmes:[...],\n     meals:[...],\n     dressCodes:[...]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/5acd58af2ac649498c5c4d86\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{event_id}/gallery",
    "title": "Create Gallery Entity",
    "name": "GetGallery",
    "group": "Events",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"9r8808ioujn98u80u8909ik\"\n    \"event\": {\n        \"id\": \"5acd58af2ac649498c5c4d86\",\n        \"name\": \"First Planned Event\",\n        \"details\": \"This is the first Event I inserted into the Database\"\n    },\n    \"images\": [\n        {\n            \"name\": \"Image Name\",\n            \"url\": \"Image url\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/gallery\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"detail: \"New meal cannot already have an ID\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gallery"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/list",
    "title": "List all events",
    "name": "ListEvent",
    "group": "Events",
    "description": "<p>This endpoint belongs to an admin user TBD</p>",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n{\n     \"id\": \"5a9af36690326a363e622402\",\n\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted and editted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n     },\n     \"open\": 0,\n     \"published\": 0,\n     \"maxInvite\": 100\n },\n...\n{\n     \"id\": \"5a9af73990326a3743aa9f05\",\n\n     \"name\": \"Second Planned Event\",\n     \"details\": \"This is the second Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n     },\n     \"open\": 1,\n     \"published\": 0,\n     \"maxInvite\": 100\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/invitations/events/5acd58af2ac649498c5c4d86\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events",
    "title": "List all planner events",
    "name": "ListPlannerEvent",
    "group": "Events",
    "description": "<p>List all the events created by the authenticated user. This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n {\n     \"id\": \"5a9af36690326a363e622402\",\n\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted and editted into the Database\",\n     \"date\": \"2018-12-01\",,\n     \"locations\": [\n         {\n             \"id\": \"5aca7a297948b76868dde727\",\n             \"name\": \"Main Building\",\n             \"address\": \"20, Ulikooli Tn\",\n             \"extra\": \"extras\"\n         },\n         ...\n      ],\n     \"image\":{\n         \"name\": \"Image Name\",\n         \"url\": \"Image url\"\n     },\n     \"creator\": {\n         \"id\": \"5aca794e7948b754ace854fa\",\n         \"name\": \"Thanos Dione\",\n         \"phone\": \"+12345678909\",\n         \"email\": \"thanos.dione@gmail.com\"\n     },\n     \"gifts\": [...],\n     \"programmes\": [...],\n     \"meals\": [...],\n     \"dressCodes\": [...],\n     \"open\": 0,\n     \"published\": 0,\n     \"maxInvite\": 100\n },\n ...\n {\n     \"id\": \"5a9af73990326a3743aa9f05\",\n\n     \"name\": \"Second Planned Event\",\n     \"details\": \"This is the second Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",,\n     \"locations\": [\n         {\n             \"id\": \"5aca7a297948b76868dde727\",\n             \"name\": \"Main Building\",\n             \"address\": \"20, Ulikooli Tn\",\n             \"extra\": \"extras\"\n         },\n         ...\n      ],\n     \"image\":{\n         \"name\": \"Image Name\",\n         \"url\": \"Image url\"\n     },\n     \"creator\": {\n         \"id\": \"5aca794e7948b754ace854fa\",\n         \"name\": \"Thanos Dione\",\n         \"phone\": \"+12345678909\",\n         \"email\": \"thanos.dione@gmail.com\"\n     },\n     \"gifts\": [...],\n     \"programmes\": [...],\n     \"meals\": [...],\n     \"dressCodes\": [...],\n     \"open\": 1,\n     \"published\": 0,\n     \"maxInvite\": 100\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{event_id}/notify-guests",
    "title": "Send Notification",
    "name": "NotifyGuest",
    "group": "Events",
    "description": "<p>Send notification to guests of an event</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5aaf62b84ffaf87e05dada37\",\n         \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\",\n         \"firstName\": \"first\",\n         \"lastName\": \"last\",\n         \"gcmToken\"\n         \"email\": \"planner@example.com\"\n         \"phone\" : \"+1234567890\",\n         \"roles\": [\n             {\n                 name: \"ROLE_USER\"\n             },\n             ...\n             {\n              name: \"ROLE_GUEST\"\n             }\n          ]\n     }\n     ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/notify-guests"
      }
    ]
  },
  {
    "type": "put",
    "url": "/events",
    "title": "Update Event details",
    "name": "UpdateEvent",
    "group": "Events",
    "description": "<p>Edit/Update the event for the planner with current authorization token. Location id is optional, if the id is specified it updates the location else a new location is created.This endpoint should only be called with the Planner's authorization token</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\", // Required\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"locations\": [\n         {\n             \"id\": \"5aca7a297948b76868dde727\",  // Optional\n             \"name\": \"New Main Building\",\n             \"address\": \"35, Ulikooli Tn\",\n         },\n         ...\n     ],\n     \"image\":{\n         \"name\": \"Image Name\"\n         \"url\": \"Image url\"\n     },\n     \"open\" : 0,\n     \"published\" : 1,\n     \"maxInvite\": 100\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",\n     \"location\": {          \n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n     },\n     \"open\": 0,\n     \"published\": 1,\n     \"maxInvite\": 100,\n     gifts:[\n         {\n             \"id\": \"5aaa41c8b854660004011b60\",\n             \"giftName\": \"First Planned Event\",\n             \"giftUrl\": \"http://hdvckpc.sdinv.com/pilskmvik/pojklmcvhj/pofdshk.png\"\n         }\n         ...\n     ],\n     programmes:[...],\n     meals:[...],\n     dressCodes:[...]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Events",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events"
      }
    ]
  },
  {
    "type": "post",
    "url": "/gatekeepers/guests/checked-in",
    "title": "Check-in Guest",
    "name": "CheckinGuest",
    "group": "GateKeeper",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "description": "<p>This endpoint is to be used to signify a guests interest in attending or not attending an event. 0 Signifies not attending and 1 signifies attending.</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Invitation ID</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "rsvp",
            "description": "<p>Values CHECKED_IN</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"id\": \"5aaa51764ffaf84b7438010f\",\n     \"rsvp\": \"CHECKED_IN\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaa51764ffaf84b7438010f\",\n    \"guest\": {\n        \"id\": \"5acd2d2c70830d33e80f7478\",\n        \"name\": \"French Montana\",\n        \"phone\": \"+234098776352\",\n        \"email\": \"french.montana@gmail.com\"\n    },\n    \"event\": {\n        \"id\": \"5acd58af2ac649498c5c4d86\",\n        \"name\": \"First Planned Event\",\n        \"details\": \"This is the first Event I inserted into the Database\"\n    },\n    \"rsvp\": \"CHECKED_IN\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GateKeeperController.java",
    "groupTitle": "GateKeeper",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/gatekeepers/guests/checked-in"
      }
    ]
  },
  {
    "type": "get",
    "url": "/gatekeepers/event/{event_id}/guests",
    "title": "View all Guest",
    "name": "GetGuestList",
    "group": "GateKeeper",
    "description": "<p>Get the guest list for an event</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variables": [
          {
            "group": "Path Variables",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5aaf62b84ffaf87e05dada37\",\n         \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\",\n         \"firstName\": \"first\",\n         \"lastName\": \"last\",\n         \"email\": \"planner@example.com\"\n         \"phone\" : \"+1234567890\",\n         \"roles\": [\n             {\n                 name: \"ROLE_USER\"\n             },\n             ...\n             {\n              name: \"ROLE_GUEST\"\n             }\n          ]\n     }\n     ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GateKeeperController.java",
    "groupTitle": "GateKeeper",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/gatekeepers/event/{event_id}/guests"
      }
    ]
  },
  {
    "type": "get",
    "url": "/gatekeepers/event/{event_id}",
    "title": "Get Event for an Invite",
    "name": "InviteEvent",
    "group": "GateKeeper",
    "description": "<p>Gets the details of the event.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variables": [
          {
            "group": "Path Variables",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",,\n     \"location\": {\n         \"id\": \"5aca7a297948b76868dde727\",\n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n         \"extra\": \"extras\"\n     },\n     \"creator\": {\n         \"id\": \"5aca794e7948b754ace854fa\",\n         \"name\": \"Thanos Dione\",\n         \"phone\": \"+12345678909\",\n         \"email\": \"thanos.dione@gmail.com\"\n     },\n     \"open\": 0,\n     \"published\": 0,\n     \"maxInvite\": 100\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GateKeeperController.java",
    "groupTitle": "GateKeeper",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/gatekeepers/event/{event_id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/events/{event_id}/gifts",
    "title": "Create Gift Entity",
    "name": "CreateGift",
    "group": "Gift",
    "description": "<p>Create a new Gift entity for event with event_id. This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "[\n      {\n         \"giftName\": \"Gift 1\",\n         \"giftUrl\": \"Image url\"\n     },\n     {\n         \"giftName\": \"Gift 2\",\n         \"giftUrl\": \"Image url\"\n     }\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5aca9d9b7948b735c0bb692c\",\n         \"giftUrl\": \"Image url\",\n         \"giftName\": \"Gift 1\"\n     },\n     {\n         \"id\": \"5aca9d9c7948b735c0bb692d\",\n         \"giftUrl\": \"Image url\",\n         \"giftName\": \"Gift 2\"\n     }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/gifts\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"detail: \"New gift cannot already have an ID\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Gift",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gifts"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/gifts",
    "title": "Deletes all Gifts",
    "name": "DeleteAllGift",
    "group": "Gift",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Successfully deleted all gifts associated with Event {id}  \"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Gift",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gifts"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/gifts/{gift_id}",
    "title": "Delete Gift with ID",
    "name": "DeleteGift",
    "group": "Gift",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "gift_id",
            "description": "<p>Gift unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Event with id {id} deleted successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Gift",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gifts/{gift_id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/events/{event_id}/gifts",
    "title": "Edit/Update Gift Entity.",
    "name": "EditGift",
    "group": "Gift",
    "description": "<p>Modified Gift entity with id {meal_id} for event of id {event_id}. This endpoint should only be called with the Planner's authorization token.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"giftName\": \"New Image Name\",\n     \"giftUrl\": \"New Image url\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"giftName\": \"New Image Name\",\n     \"giftUrl\": \"New Image url\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/gifts\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"detail: \"Must specify the Gift ID in has a parameter\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Gift",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gifts"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{event_id}/gifts",
    "title": "List all Gifts.",
    "name": "ListGifts",
    "group": "Gift",
    "description": "<p>.Gets the all the Gift entities associated with the event with id {event_id}.This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n{\n     \"id\": \"5a9af36690326a363e622402\",\n     \"giftName\": \"gift1\",\n     \"giftUrl\": \"gift1 url\",\n },\n...\n{\n     \"id\": \"5a9af73990326a3743aa9f05\",\n     \"name\": \"gift2\",\n     \"details\": \"gift 2 url\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Gift",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/gifts"
      }
    ]
  },
  {
    "type": "post",
    "url": "/guests",
    "title": "Create New Guest",
    "name": "CreateGuest",
    "group": "Guest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"firstName\": \"New\",\n    \"lastName\": \"York\",\n    \"phone\": \"56781061\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n      \"id\": \"5aaa4795b854660004011b61\",\n     \"firstName\": \"New\",\n     \"lastName\": \"York\",\n     \"phone\": \"56781061\",\n     \"email\": \"olamide@gmail.com\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/guests/invitations/gift",
    "title": "Update Gift interest for Event",
    "name": "DGuestGiftInterest",
    "group": "Guest",
    "description": "<p>A guest indicates interest in selecting a gift. The gift must exists shared in event get guest is invited to.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inviteId",
            "description": "<p>Invitation ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "giftId",
            "description": "<p>Gift ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"inviteId\": \"5acd6a112ac649312037137f\",\n     \"giftId\": \"5aaa41c8b854660004011b60\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/meal\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n        \"detail\": \"Gift with id {gift_id} does not exists for this event\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail\": \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests/invitations/gift"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/guests/invitations/meal",
    "title": "Update Meal interest for Event",
    "name": "DGuestMealInterest",
    "group": "Guest",
    "description": "<p>A guest indicates interest in selecting a meal. The meal must be served in event get guest is invited to.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inviteId",
            "description": "<p>Invitation ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mealId",
            "description": "<p>Meal ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"inviteId\": \"5acd6a112ac649312037137f\",\n     \"mealId\": \"5aaa41c8bwefffffd3434344\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n     \"title\": \"Forbidden\",\n     \"status\": 403,\n     \"detail\": \"Access is denied\",\n     \"path\": \"/events/{event_id}/meal\",\n     \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"detail\": \"Meal with id {gift_id} does not exists for this event\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"detail: \"Expired Token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests/invitations/meal"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/guests",
    "title": "Delete Guest",
    "name": "DeleteGuest",
    "group": "Guest",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n\"message\": \"Successfully deleted User\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests"
      }
    ]
  },
  {
    "type": "put",
    "url": "/guests/invitations/gift",
    "title": "Update Gift interest for Event",
    "name": "GuestGiftInterest",
    "group": "Guest",
    "description": "<p>A guest indicates interest in selecting a gift. The gift must exists shared in event get guest is invited to.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inviteId",
            "description": "<p>Invitation ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "giftId",
            "description": "<p>Gift ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"inviteId\": \"5acd6a112ac649312037137f\",\n     \"giftId\": \"5aaa41c8b854660004011b60\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "\n{\n    \"id\": \"5acd6a112ac649312037137f\",\n    \"guest\": {\n        \"id\": \"5acd5fbf2ac6493120371379\",\n        \"name\": \"Barry Allen\",\n        \"phone\": \"+123456789093\",\n        \"email\": \"barry.allen@gmail.com\"\n    },\n    \"event\": {\n        \"id\": \"5acd58af2ac649498c5c4d86\",\n        \"name\": \"First Planned Event\",\n        \"details\": \"This is the first Event I inserted into the Database\"\n    },\n    \"gifts\":[\n        {\n            \"id\": \"5aaa41c8b854660004011b60\",\n            \"giftName\": \"New Image Name\",\n            \"giftUrl\": \"New Image url\"\n        },\n        ...\n    ],\n    \"meals\": [\n        {\n            \"id\": \"5aaa41c8bwefffffd3434344\",\n            \"type\": \"type1\",\n            \"meal_name\": \"name1\",\n            \"interest\": \"interest1\"\n        },\n        ...\n    ],\n    \"rsvp\": \"YES\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/meal\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n        \"detail\": \"Gift with id {gift_id} does not exists for this event\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail\": \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests/invitations/gift"
      }
    ]
  },
  {
    "type": "get",
    "url": "/guests/invitations/{invite_id}/event",
    "title": "Get Event for an Invite",
    "name": "GuestInviteEvent",
    "group": "Guest",
    "description": "<p>Gets the details of the event a guest is invited to.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variables": [
          {
            "group": "Path Variables",
            "type": "String",
            "optional": false,
            "field": "invite_id",
            "description": "<p>Invitation ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"name\": \"First Planned Event\",\n     \"details\": \"This is the first Event I inserted into the Database\",\n     \"date\": \"2018-12-01\",,\n     \"location\": {\n         \"id\": \"5aca7a297948b76868dde727\",\n         \"name\": \"Main Building\",\n         \"address\": \"20, Ulikooli Tn\",\n         \"extra\": \"extras\"\n     },\n     \"creator\": {\n         \"id\": \"5aca794e7948b754ace854fa\",\n         \"name\": \"Thanos Dione\",\n         \"phone\": \"+12345678909\",\n         \"email\": \"thanos.dione@gmail.com\"\n     },\n     \"open\": 0,\n     \"published\": 0,\n     \"maxInvite\": 100\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests/invitations/{invite_id}/event"
      }
    ]
  },
  {
    "type": "put",
    "url": "/guests/invitations/meal",
    "title": "Update Meal interest for Event",
    "name": "GuestMealInterest",
    "group": "Guest",
    "description": "<p>A guest indicates interest in selecting a meal. The meal must be served in event get guest is invited to.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inviteId",
            "description": "<p>Invitation ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mealId",
            "description": "<p>Meal ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"inviteId\": \"5acd6a112ac649312037137f\",\n     \"mealId\": \"5aaa41c8bwefffffd3434344\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "\n{\n    \"id\": \"5acd6a112ac649312037137f\",\n    \"guest\": {\n        \"id\": \"5acd5fbf2ac6493120371379\",\n        \"name\": \"Barry Allen\",\n        \"phone\": \"+123456789093\",\n        \"email\": \"barry.allen@gmail.com\"\n    },\n    \"event\": {\n        \"id\": \"5acd58af2ac649498c5c4d86\",\n        \"name\": \"First Planned Event\",\n        \"details\": \"This is the first Event I inserted into the Database\"\n    },\n    \"gifts\": [\n        {\n            \"id\": \"5aaa41c8b854660004011b60\",\n            \"giftName\": \"New Image Name\",\n            \"giftUrl\": \"New Image url\"\n        },\n        ...\n    ],\n    \"meals\": [\n        {\n            \"id\": \"5aaa41c8bwefffffd3434344\",\n            \"type\": \"type0\",\n            \"meal_name\": \"name0\",\n            \"interest\": \"interest0\"\n        },\n        ...\n    ],\n    \"rsvp\": \"YES\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/meal\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n    {\n     \"detail\": \"Meal with id {gift_id} does not exists for this event\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests/invitations/meal"
      }
    ]
  },
  {
    "type": "get",
    "url": "/guests/invitations",
    "title": "List Guest Invitations",
    "name": "ListGuestInvites",
    "group": "Guest",
    "description": "<p>List all events a guest is invited to</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5acd6a112ac649312037137d\",\n         \"guest\": {\n             \"id\": \"5acd2d2c70830d33e80f7478\",\n             \"name\": \"French Montana\",\n             \"phone\": \"+234098776352\",\n             \"email\": \"french.montana@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"event-0\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \"rsvp\": \"NO\"\n      },\n      {\n         \"id\": \"5acd6a112ac649312037137e\",\n         \"guest\": {\n             \"id\": \"5acd2d2c70830d33e80f7478\",\n             \"name\": \"French Montana\",\n             \"phone\": \"+234098776352\",\n             \"email\": \"french.montana@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"event-2\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \"rsvp\": \"NO\"\n     },\n     {\n         \"id\": \"5acd6a112ac649312037137f\",\n         \"guest\": {\n             \"id\": \"5acd2d2c70830d33e80f7478\",\n             \"name\": \"French Montana\",\n             \"phone\": \"+234098776352\",\n             \"email\": \"french.montana@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"event-1\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \"rsvp\": \"NO\"\n     }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests/invitations"
      }
    ]
  },
  {
    "type": "put",
    "url": "/guests",
    "title": "Update/Edit New Guest",
    "name": "UpdateGuest",
    "group": "Guest",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"firstName\": \"New\",\n    \"lastName\": \"York\",\n    \"phone\": \"56781061\",\n    \"gcmToken\": \"kmlsjdvy7809890.mny7uy89....\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa4795b854660004011b61\",\n     \"firstName\": \"New\",\n     \"lastName\": \"York\",\n     \"phone\": \"56781061\",\n     \"email\": \"olamide@gmail.com\",\n     \"gcmToken\": \"kmlsjdvy7809890.mny7uy89....\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests"
      }
    ]
  },
  {
    "type": "get",
    "url": "/guests",
    "title": "View guest details",
    "name": "ViewGuest",
    "group": "Guest",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ],
        "Custom Response Header": [
          {
            "group": "Custom Response Header",
            "type": "Number",
            "optional": false,
            "field": "X-mxEvent-profile-code",
            "description": "<p>Status code about the profile.<br> 110: Indicates that the user with the authorization token as has been registered on the platform to another user role. But not as an event vendor. Also an HTTP Status of 204 is returned.<br> 120: Indicates the user has incomplete profile information an may require update.<br> 130: Indicated the user has a complete profile information.</p>"
          },
          {
            "group": "Custom Response Header",
            "type": "String",
            "optional": false,
            "field": "X-mxEvent-profile-msg",
            "description": "<p>Message.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa4795b854660004011b61\",\n     \"firstName\": \"New\",\n     \"lastName\": \"York\",\n     \"phone\": \"56781061\",\n     \"email\": \"olamide@gmail.com\",\n     \"gcmToken\": \"kmlsjdvy7809890.mny7uy89....\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests"
      }
    ]
  },
  {
    "type": "get",
    "url": "/guests/{id}",
    "title": "View guest details",
    "name": "ViewGuest",
    "group": "Guest",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ],
        "Custom Response Header": [
          {
            "group": "Custom Response Header",
            "type": "Number",
            "optional": false,
            "field": "X-mxEvent-profile-code",
            "description": "<p>Status code about the profile.<br> 110: Indicates that the user with the authorization token as has been registered on the platform to another user role. But not as an event vendor. Also an HTTP Status of 204 is returned.<br> 120: Indicates the user has incomplete profile information an may require update.<br> 130: Indicated the user has a complete profile information.</p>"
          },
          {
            "group": "Custom Response Header",
            "type": "String",
            "optional": false,
            "field": "X-mxEvent-profile-msg",
            "description": "<p>Message.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>guest unique ID.</p>"
          }
        ]
      }
    },
    "description": "<p>This endpoint belongs to an admin user TBD</p>",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaa4795b854660004011b61\",\n     \"firstName\": \"New\",\n     \"lastName\": \"York\",\n     \"phone\": \"56781061\",\n     \"email\": \"olamide@gmail.com\",\n     \"gcmToken\": \"kmlsjdvy7809890.mny7uy89....\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/GuestController.java",
    "groupTitle": "Guest",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/guests/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/invitations/events/{event_id}",
    "title": "Create New Invitation",
    "name": "CreateInvitation",
    "group": "Invitations",
    "description": "<p>Use this endpoint to create a invitation. This endpoint tries to get the guest user being invited from the provided email or phone number, and if no user matches this information. Then a new guest user is created.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>guest name.</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>guest phone number(either phone or email should be provided for sending out notification).</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>guest email address(either phone or email should be provided for sending out notification).</p>"
          }
        ],
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event ID to invite guest to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "[\n     {\n         \"name\": \"French Montana\",\n         \"phone\": \"+234098776352\",\n         \"email\": \"french.montana@gmail.com\"\n     },\n     {\n         \"name\": \"Frank Castle\",\n         \"phone\": \"+2348176543289\",\n         \"email\": \"frank.castle@gmail.com\"\n     },\n     {\n         \"name\": \"Barry Allen\",\n         \"phone\": \"+123456789093\",\n         \"email\": \"barry.allen@gmail.com\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5acd6a112ac649312037137d\",\n         \"guest\": {\n             \"id\": \"5acd2d2c70830d33e80f7478\",\n             \"name\": \"French Montana\",\n             \"phone\": \"+234098776352\",\n             \"email\": \"french.montana@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"5acd58af2ac649498c5c4d86\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \n         \"rsvp\": \"NO\"\n      },\n      {\n         \"id\": \"5acd6a112ac649312037137e\",\n         \"guest\": {\n             \"id\": \"5acd57492ac649498c5c4d82\",\n             \"name\": \"Frank Castle\",\n             \"phone\": \"+2348176543289\",\n             \"email\": \"frank.castle@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"5acd58af2ac649498c5c4d86\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \n         \"rsvp\": \"NO\"\n     },\n     {\n         \"id\": \"5acd6a112ac649312037137f\",\n         \"guest\": {\n             \"id\": \"5acd5fbf2ac6493120371379\",\n             \"name\": \"Barry Allen\",\n             \"phone\": \"+123456789093\",\n             \"email\": \"barry.allen@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"5acd58af2ac649498c5c4d86\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \n         \"rsvp\": \"NO\"\n     }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/invitations/events/5acd58af2ac649498c5c4d86\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitations/events/{event_id}"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/invitations/events/{event_id}",
    "title": "Delete Invitation",
    "name": "DeleteInvitation",
    "group": "Invitations",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token for PLANNER user from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>invitation id to update/edit.</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>guest name.</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>guest phone number(either phone or email should be provided for sending out notification).</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>guest email address(either phone or email should be provided for sending out notification).</p>"
          }
        ],
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event ID to invite guest to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"id\": \"5acd6a112ac649312037137d\" //important\n     \"name\": \"French Montana\",\n     \"phone\": \"+234098776352\",\n     \"email\": \"french.montana@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "\n{\n    \"message\": \"Invitation with id 5acd6a112ac649312037137d deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.      *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/invitations/events/5acd58af2ac649498c5c4d86\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitations/events/{event_id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/invitations/guest",
    "title": "List Guest Invitations",
    "name": "GetGuestInvitation",
    "group": "Invitations",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token for GUEST user from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "\n[\n     {\n         \"id\": \"5acd6a112ac649312037137d\",\n         \"guest\": {\n             \"id\": \"5acd2d2c70830d33e80f7478\",\n             \"name\": \"French Montana\",\n             \"phone\": \"+234098776352\",\n             \"email\": \"french.montana@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"event-0\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \n         \"rsvp\": \"NO\"\n      },\n      {\n         \"id\": \"5acd6a112ac649312037137e\",\n         \"guest\": {\n             \"id\": \"5acd57492ac649498c5c4d82\",\n             \"name\": \"Frank Castle\",\n             \"phone\": \"+2348176543289\",\n             \"email\": \"frank.castle@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"event-2\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \n         \"rsvp\": \"NO\"\n     },\n     {\n         \"id\": \"5acd6a112ac649312037137f\",\n         \"guest\": {\n             \"id\": \"5acd5fbf2ac6493120371379\",\n             \"name\": \"Barry Allen\",\n             \"phone\": \"+123456789093\",\n             \"email\": \"barry.allen@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"event-1\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \n         \"rsvp\": \"NO\"\n     }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.      *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/invitations/events/5acd58af2ac649498c5c4d86\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitations/guest"
      }
    ]
  },
  {
    "type": "get",
    "url": "/invitations/events/{event_id}",
    "title": "List Planner Invitations",
    "name": "GetPlannerInvitation",
    "group": "Invitations",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token for PLANNER user from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5acd6a112ac649312037137d\",\n         \"guest\": {\n             \"id\": \"5acd2d2c70830d33e80f7478\",\n             \"name\": \"French Montana\",\n             \"phone\": \"+234098776352\",\n             \"email\": \"french.montana@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"5acd58af2ac649498c5c4d86\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \n         \"rsvp\": \"NO\"\n      },\n      {\n         \"id\": \"5acd6a112ac649312037137e\",\n         \"guest\": {\n             \"id\": \"5acd57492ac649498c5c4d82\",\n             \"name\": \"Frank Castle\",\n             \"phone\": \"+2348176543289\",\n             \"email\": \"frank.castle@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"5acd58af2ac649498c5c4d86\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \n         \"rsvp\": \"NO\"\n     },\n     {\n         \"id\": \"5acd6a112ac649312037137f\",\n         \"guest\": {\n             \"id\": \"5acd5fbf2ac6493120371379\",\n             \"name\": \"Barry Allen\",\n             \"phone\": \"+123456789093\",\n             \"email\": \"barry.allen@gmail.com\"\n         },\n         \"event\": {\n             \"id\": \"5acd58af2ac649498c5c4d86\",\n             \"name\": \"First Planned Event\",\n             \"details\": \"This is the first Event I inserted into the Database\"\n         },\n         \n         \"rsvp\": \"NO\"\n     }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.      *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/invitations/events/5acd58af2ac649498c5c4d86\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitations/events/{event_id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/invitations/rsvp",
    "title": "RSVP to an event",
    "name": "InvitationRSVP",
    "group": "Invitations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "description": "<p>This endpoint is to be used to signify a guests interest in attending or not attending an event. 0 Signifies not attending and 1 signifies attending.</p>",
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Invitation ID</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "rsvp",
            "description": "<p>Values YES, NO, MAYBE</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n\"id\": \"5aaa51764ffaf84b7438010f\",\n\"rsvp\": \"MAYBE\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "<p>\n{\n\"id\": \"5aaa51764ffaf84b7438010f\",\n\"guest\": {\n\"id\": \"5acd2d2c70830d33e80f7478\",\n\"name\": \"French Montana\",\n\"phone\": \"+234098776352\",\n\"email\": \"french.montana@gmail.com\"\n},\n\"event\": {\n\"id\": \"5acd58af2ac649498c5c4d86\",\n\"name\": \"First Planned Event\",\n\"details\": \"This is the first Event I inserted into the Database\"\n},\n<p>\n\"rsvp\": \"MAYBE\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitations/rsvp"
      }
    ]
  },
  {
    "type": "put",
    "url": "/invitations/events/{event_id}",
    "title": "Edit/Update Invitation",
    "name": "UpdateInvitation",
    "group": "Invitations",
    "description": "<p>Use this endpoint to update invitation information. This endpoint tries to get the guest user being invited from the provided email or phone number, and if no user matches this information. Then a new guest user is created. The endpoint requires the authenticated user should have a planner role</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token for PLANNER user from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameters": [
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>invitation id to update/edit.</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>guest name.</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>guest phone number(either phone or email should be provided for sending out notification).</p>"
          },
          {
            "group": "Parameters",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>guest email address(either phone or email should be provided for sending out notification).</p>"
          }
        ],
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event ID to invite guest to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"id\": \"5acd6a112ac649312037137d\"\n     \"name\": \"French Montana\",\n     \"phone\": \"+234098776352\",\n     \"email\": \"french.montana@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "\n{\n     \"id\": \"5acd6a112ac649312037137d\",\n     \"guest\": {\n         \"id\": \"5acd2d2c70830d33e80f7478\",\n         \"name\": \"French Montana\",\n         \"phone\": \"+234098776352\",\n         \"email\": \"french.montana@gmail.com\"\n     },\n      \"event\": {\n         \"id\": \"5acd58af2ac649498c5c4d86\",\n         \"name\": \"First Planned Event\",\n         \"details\": \"This is the first Event I inserted into the Database\"\n     },\n     \n     \"rsvp\": \"NO\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.      *</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/invitations/events/5acd58af2ac649498c5c4d86\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/InvitationController.java",
    "groupTitle": "Invitations",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/invitations/events/{event_id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/events/{event_id}/meals",
    "title": "Create Meal Entity",
    "name": "CreateMeal",
    "group": "Meal",
    "description": "<p>Create a new Meal entity for event with event_id. This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "[\n    {\n        \"type\": \"type\",\n        \"mealName\": \"name\",\n        \"interest\": \"interest\"\n    },\n    ...\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n {\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"type\": \"type\",\n     \"mealName\": \"name\",\n     \"interest\": \"interest\"\n },\n ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/meal\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"detail: \"New meal cannot already have an ID\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/meals"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/meals",
    "title": "Deletes all Meal",
    "name": "DeleteAllMeal",
    "group": "Meal",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"message\": \"Successfully deleted all gifts associated with Event {id}  \"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/meals"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/meal/{meal_id}",
    "title": "Delete Meal with ID",
    "name": "DeleteMeal",
    "group": "Meal",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "meal_id",
            "description": "<p>Meal unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Event Meal with id {meal_id} deleted successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/meal/{meal_id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/events/{event_id}/meal",
    "title": "Edit/Update Meal Entity.",
    "name": "EditMeal",
    "group": "Meal",
    "description": "<p>Modified Meal entity with id {meal_id} for event of id {event_id}. This endpoint should only be called with the Planner's authorization token.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "meal_id",
            "description": "<p>Meal unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"id\": \"5aaa41c8b854660004011b60\",\n    \"type\": \"new type\",\n    \"mealName\": \"new name\",\n    \"interest\": \"new interest\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaa41c8b854660004011b60\",\n    \"type\": \"new type\",\n    \"mealName\": \"new name\",\n    \"interest\": \"new interest\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/meal\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"detail: \"Must specify the Meal ID in has a parameter\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/meal"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{event_id}/meals",
    "title": "List all Meals.",
    "name": "ListMeal",
    "group": "Meal",
    "description": "<p>Gets the all the Meal entities associated with the event with id {event_id}.This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5aaa41c8b854660004011b60\",\n         \"type\": \"type0\",\n         \"mealName\": \"name0\",\n         \"interest\": \"interest0\"\n     },\n     ...\n     {\n         \"id\": \"5aaa41c8bwefffffd3434344\",\n         \"type\": \"type1\",\n         \"mealName\": \"name1\",\n         \"interest\": \"interest1\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Meal",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/meals"
      }
    ]
  },
  {
    "type": "post",
    "url": "/planner",
    "title": "Create New Planner",
    "name": "CreatePlanner",
    "group": "Planner",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"firstName\": \"first\",\n    \"lastName\": \"last\",\n    \"email\": \"planner@example.com\"\n    \"phone\" : \"+1234567890\",\n    \"description\" : \"Description\",\n    \"address\" : \"Company Address\",\n    \"companyName\" : \"Company Name\",\n    \"dob\" : \"31-12-1990\",\n    \"sex\" : \"F\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaf62b84ffaf87e05dada37\",\n     \"firstName\": \"first\",\n     \"lastName\": \"last\",\n     \"email\": \"planner@example.com\"\n     \"phone\" : \"+1234567890\",\n     \"description\" : \"Description\",\n     \"address\" : \"Company Address\",\n     \"companyName\" : \"Company Name\",\n     \"dob\" : \"31-12-1990\",\n     \"sex\" : \"F\",\n     \"roles\": [\n         {\n             name: \"ROLE_USER\"\n         },\n         ....\n         {\n             name: \"ROLE_PLANNER\"\n         }\n     ],\n     \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/PlannerController.java",
    "groupTitle": "Planner",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/planner"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/planner",
    "title": "Delete Planner",
    "name": "DeletePlanner",
    "group": "Planner",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n \"message\": \"Successfully deleted User\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadCredentialsException",
            "description": "<p>returns http status code 500</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/PlannerController.java",
    "groupTitle": "Planner",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/planner"
      }
    ]
  },
  {
    "type": "put",
    "url": "/planner",
    "title": "Update/Edit Planner",
    "name": "UpdatePlanner",
    "group": "Planner",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n     \"firstName\": \"first\",\n     \"lastName\": \"last\",\n     \"email\": \"planner@example.com\"\n     \"phone\" : \"+1234567890\",\n     \"description\" : \"Description\",\n     \"address\" : \"Company Address\",\n     \"companyName\" : \"Company Name\",\n     \"dob\" : \"31-12-1990\",\n     \"sex\" : \"F\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaf62b84ffaf87e05dada37\",\n     \"firstName\": \"first\",\n     \"lastName\": \"last\",\n     \"email\": \"planner@example.com\"\n     \"phone\" : \"+1234567890\",\n     \"description\" : \"Description\",\n     \"address\" : \"Company Address\",\n     \"companyName\" : \"Company Name\",\n     \"dob\" : \"31-12-1990\",\n     \"sex\" : \"F\",\n     \"roles\": [\n         {\n             name: \"ROLE_USER\"\n         },\n         ...\n         {\n             name: \"ROLE_PLANNER\"\n         }\n     ],\n     \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/PlannerController.java",
    "groupTitle": "Planner",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/planner"
      }
    ]
  },
  {
    "type": "get",
    "url": "/planner",
    "title": "Get Planner details",
    "name": "ViewPlanner",
    "group": "Planner",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ],
        "Custom Response Header": [
          {
            "group": "Custom Response Header",
            "type": "Number",
            "optional": false,
            "field": "X-mxEvent-profile-code",
            "description": "<p>Status code about the profile.<br> 110: Indicates that the user with the authorization token as has been registered on the platform to another user role. But not as an event planner. Also an HTTP Status of 204 is returned.<br> 120: Indicates the user has incomplete profile information an may require update.<br> 130: Indicated the user has a complete profile information.</p>"
          },
          {
            "group": "Custom Response Header",
            "type": "String",
            "optional": false,
            "field": "X-mxEvent-profile-msg",
            "description": "<p>Message.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n\"id\": \"5aaf62b84ffaf87e05dada37\",\n\"firstName\": \"first\",\n\"lastName\": \"last\",\n\"email\": \"planner@example.com\"\n\"phone\" : \"+1234567890\",\n\"description\" : \"Description\",\n\"address\" : \"Company Address\",\n\"companyName\" : \"Company Name\",\n\"dob\" : \"31-12-1990\",\n\"sex\" : \"F\",\n\"roles\": [\n{\nname: \"ROLE_USER\"\n},\n....\n{\nname: \"ROLE_PLANNER\"\n}\n],\n\"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/PlannerController.java",
    "groupTitle": "Planner",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/planner"
      }
    ]
  },
  {
    "type": "post",
    "url": "/events/{event_id}/programmes",
    "title": "Create Programme Entity",
    "name": "CreateProgramme",
    "group": "Programme",
    "description": "<p>Create a new Programme entity for event with event_id. This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "[\n {\n     \"title\": \"Programme name\",\n     \"time\": \"10:15\"\n },\n ...\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n {\n     \"id\": \"5aaa41c8b854660004011b60\",\n     \"title\": \"Programme name\",\n     \"time\": \"10:15\"\n },\n ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/programme\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"detail: \"New meal cannot already have an ID\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Programme",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/programmes"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/programmes",
    "title": "Deletes all Programmes",
    "name": "DeleteAllProgramme",
    "group": "Programme",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"message\": \"Successfully deleted all programmes associated with Event {id}  \"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Programme",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/programmes"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/events/{event_id}/programme/{programme_id}",
    "title": "Delete Programme with ID",
    "name": "DeleteProgramme",
    "group": "Programme",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "programme_id",
            "description": "<p>Programme unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"message\": \"Event with id {id} deleted successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Programme",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/programme/{programme_id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/events/{event_id}/programme",
    "title": "Edit/Update Programme Entity.",
    "name": "EditProgramme",
    "group": "Programme",
    "description": "<p>Modified Programme entity with id {meal_id} for event of id {event_id}. This endpoint should only be called with the Planner's authorization token.</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          },
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "programme_id",
            "description": "<p>Programme unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"title\": \"Cut Cake\",\n    \"time\": \"10:15\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaa41c8b854660004011b60\",\n    \"title\": \"Cut Cake\",\n    \"time\": \"10:15\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>The current user with the authorization token doesn't have access to this endpoint.     *</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>The current item you are trying to access doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"type\": \"https://mxevent.herokuapp.com/problem/problem-with-message\",\n    \"title\": \"Forbidden\",\n    \"status\": 403,\n    \"detail\": \"Access is denied\",\n    \"path\": \"/events/{event_id}/programme\",\n    \"message\": \"error.http.403\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"detail: \"Must specify the Programme ID in has a parameter\"\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n     \"detail: \"Expired Token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Programme",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/programme"
      }
    ]
  },
  {
    "type": "get",
    "url": "/events/{event_id}/programmes",
    "title": "List all Programmes.",
    "name": "ListProgrammes",
    "group": "Programme",
    "description": "<p>.Gets the all the Programme entities associated with the event with id {event_id}.This endpoint should only be called with the Planner's authorization token, it will show all the event a planner has created</p>",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Path Variable": [
          {
            "group": "Path Variable",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Event unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n     {\n         \"id\": \"5aaa41c8b854660004011b60\",\n         \"title\": \"Programme name 1\",\n         \"time\": \"10:15\"\n     },\n     ...\n     {\n         \"id\": \"5a9af73990326a3743aa9f05\",\n         \"title\": \"Programme name 2\",\n         \"time\": \"12:15\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/EventController.java",
    "groupTitle": "Programme",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/events/{event_id}/programmes"
      }
    ]
  },
  {
    "type": "post",
    "url": "/vendors",
    "title": "Create New Vendor",
    "name": "CreateVendor",
    "group": "Vendor",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"firstName\": \"first\",\n    \"lastName\": \"last\",\n    \"email\": \"vendor@example.com\"\n    \"phone\" : \"+1234567890\",\n    \"description\" : \"Description\",\n    \"address\" : \"Company Address\",\n    \"companyName\" : \"Company Name\",\n    \"dob\" : \"31-12-1990\",\n    \"sex\" : \"F\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaf62b84ffaf87e05dada37\",\n    \"firstName\": \"first\",\n    \"lastName\": \"last\",\n    \"email\": \"vendor@example.com\"\n    \"phone\" : \"+1234567890\",\n    \"description\" : \"Description\",\n    \"address\" : \"Company Address\",\n    \"companyName\" : \"Company Name\",\n    \"dob\" : \"31-12-1990\",\n    \"sex\" : \"F\",\n    \"roles\": [\n        {\n            name: \"ROLE_USER\"\n        },\n        ....\n        {\n             name: \"ROLE_PLANNER\"\n        }\n    ],\n    \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/VendorController.java",
    "groupTitle": "Vendor",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/vendors"
      }
    ]
  },
  {
    "type": "post",
    "url": "/vendors",
    "title": "Create Vendor Review",
    "name": "CreateVendorReview",
    "group": "Vendor",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"review\": \"review\",\n    \"title\": \"title\",\n    \"ratings\": \"7/10\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaf62b84ffaf87e05dada37\", // Review ID\n    \"reviewer\": {\n        \"id\": \"5aca794e7948b754ikm76y0\", //Planner who made this review ID\n        \"name\": \"Thanos Dione\",\n        \"phone\": \"+12345678909\",\n        \"email\": \"thanos.dione@gmail.com\"\n    },\n    \"review\": \"review\",\n    \"title\": \"title\",\n    \"ratings\": \"7/10\",\n    \"created\": \"\"\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/VendorController.java",
    "groupTitle": "Vendor",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/vendors"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/vendors",
    "title": "Delete Vendor",
    "name": "DeleteVendor",
    "group": "Vendor",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"message\": \"Successfully deleted User\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/VendorController.java",
    "groupTitle": "Vendor",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/vendors"
      }
    ]
  },
  {
    "type": "put",
    "url": "/vendors",
    "title": "Update/Edit Vendor",
    "name": "UpdateVendor",
    "group": "Vendor",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Body:",
          "content": "{\n    \"firstName\": \"first\",\n    \"lastName\": \"last\",\n    \"email\": \"vendor@example.com\"\n    \"phone\" : \"+1234567890\",\n    \"description\" : \"Description\",\n    \"address\" : \"Company Address\",\n    \"companyName\" : \"Company Name\",\n    \"dob\" : \"31-12-1990\",\n    \"sex\" : \"F\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n    \"id\": \"5aaf62b84ffaf87e05dada37\",\n    \"firstName\": \"first\",\n    \"lastName\": \"last\",\n    \"email\": \"vendor@example.com\"\n    \"phone\" : \"+1234567890\",\n    \"description\" : \"Description\",\n    \"address\" : \"Company Address\",\n    \"companyName\" : \"Company Name\",\n    \"dob\" : \"31-12-1990\",\n    \"sex\" : \"F\",\n    \"roles\": [\n        {\n            name: \"ROLE_USER\"\n        },\n        ....\n        {\n            name: \"ROLE_VENDOR\"\n        }\n    ],\n    \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/VendorController.java",
    "groupTitle": "Vendor",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/vendors"
      }
    ]
  },
  {
    "type": "get",
    "url": "/vendors/me",
    "title": "Get Vendor details",
    "name": "ViewVendor",
    "group": "Vendor",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ],
        "Custom Response Header": [
          {
            "group": "Custom Response Header",
            "type": "Number",
            "optional": false,
            "field": "X-mxEvent-profile-code",
            "description": "<p>Status code about the profile.<br> 110: Indicates that the user with the authorization token as has been registered on the platform to another user role. But not as an event vendor. Also an HTTP Status of 204 is returned.<br> 120: Indicates the user has incomplete profile information an may require update.<br> 130: Indicated the user has a complete profile information.</p>"
          },
          {
            "group": "Custom Response Header",
            "type": "String",
            "optional": false,
            "field": "X-mxEvent-profile-msg",
            "description": "<p>Message.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaf62b84ffaf87e05dada37\",\n     \"firstName\": \"first\",\n     \"lastName\": \"last\",\n     \"email\": \"vendor@example.com\"\n     \"phone\" : \"+1234567890\",\n     \"description\" : \"Description\",\n     \"address\" : \"Company Address\",\n     \"companyName\" : \"Company Name\",\n     \"dob\" : \"31-12-1990\",\n     \"sex\" : \"F\",\n     \"roles\": [\n         {\n             name: \"ROLE_USER\"\n         },\n         ...\n         {\n             name: \"ROLE_VENDOR\"\n         }\n     ],\n     \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/VendorController.java",
    "groupTitle": "Vendor",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/vendors/me"
      }
    ]
  },
  {
    "type": "get",
    "url": "/vendors/{vendor_id}",
    "title": "Get Vendor details by Id",
    "name": "ViewVendorByID",
    "group": "Vendor",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ],
        "Custom Response Header": [
          {
            "group": "Custom Response Header",
            "type": "Number",
            "optional": false,
            "field": "X-mxEvent-profile-code",
            "description": "<p>Status code about the profile.<br> 110: Indicates that the user with the authorization token as has been registered on the platform to another user role. But not as an event vendor. Also an HTTP Status of 204 is returned.<br> 120: Indicates the user has incomplete profile information an may require update.<br> 130: Indicated the user has a complete profile information.</p>"
          },
          {
            "group": "Custom Response Header",
            "type": "String",
            "optional": false,
            "field": "X-mxEvent-profile-msg",
            "description": "<p>Message.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"id\": \"5aaf62b84ffaf87e05dada37\",\n     \"firstName\": \"first\",\n     \"lastName\": \"last\",\n     \"email\": \"vendor@example.com\"\n     \"phone\" : \"+1234567890\",\n     \"description\" : \"Description\",\n     \"address\" : \"Company Address\",\n     \"companyName\" : \"Company Name\",\n     \"dob\" : \"31-12-1990\",\n     \"sex\" : \"F\",\n     \"roles\": [\n         {\n             name: \"ROLE_USER\"\n         },\n         ...\n         {\n             name: \"ROLE_VENDOR\"\n         }\n     ],\n     \"uid\": \"sYvbbH1Ia7bhzXDAaFZZ3kHQdryA\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/VendorController.java",
    "groupTitle": "Vendor",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/vendors/{vendor_id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/vendors/{vendor_id}/review",
    "title": "Get Vendor Review",
    "name": "ViewVendorReview",
    "group": "Vendor",
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token from firebase authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "[\n {\n     \"id\": \"5aaf62b84ffaf87e05dada37\", // Review ID\n     \"reviewer\": {\n         \"id\": \"5aca794e7948b754ikm76y0\",\n         \"name\": \"Thanos Dione\",\n         \"phone\": \"+12345678909\",\n         \"email\": \"thanos.dione@gmail.com\"\n     },\n     \"review\": \"review\",\n     \"title\": \"title\",\n     \"ratings\": \"7/10\",\n     \"created\": \"\"\n\n },\n ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/mx/eventapi/web/rest/VendorController.java",
    "groupTitle": "Vendor",
    "sampleRequest": [
      {
        "url": "https://mxevent.herokuapp.com/vendors/{vendor_id}/review"
      }
    ]
  }
] });
