# Creating a REST API Frontend and Backend.

## Overview
Building and deploy a REST API one endpoint that accepts requests with both GET and POST methods
## Features

- **POST `/bfhl`**: Accepts JSON data to process and returns structured information, including user ID and data validation results.
- **GET `/bfhl`**: Returns a hardcoded operation code for simple API health checks.
- Handles file uploads with validation for MIME type and size.
- Provides structured responses with success status.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: HTML (deployed on Netlify)
- **Deployment**: Netlify for the frontend

## API Endpoints

### POST `/bfhl`

#### Request

**URL**: `https://khushikumaribajajtask.netlify.app/bfhl`  or `https://localhost:3000/bfhl` 
**Method**: POST  
**Headers**: 
- `Content-Type: application/json`

**Body**:
```json
{
    "data": ["M", "1", "334", "4", "B", "Z", "a"],
    "file_b64": "BASE_64_STRING"
}
```


#### Response
```json
{
    "is_success": true,
    "user_id": "john_doe_17091999",
    "email": "john@xyz.com",
    "roll_number": "ABCD123",
    "numbers": ["1", "334", "4"],
    "alphabets": ["M", "B", "Z", "a"],
    "highest_lowercase_alphabet": ["a"],
    "file_valid": true,
    "file_mime_type": "image/png",
    "file_size_kb": "400"
}
```

#### GET Method :  `https://khushikumaribajajtask.netlify.app/bfhl` or `https://localhost:3000/bfhl`

#### Request
```json
URL: /bfhl
Method: GET
```

#### Response
```json
{
  "operation_code":1
}
```



