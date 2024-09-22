const express = require('express');
const bodyParser = require('body-parser');
const mime = require('mime-types');
const Buffer = require('buffer').Buffer;
const cors = require('cors');


const app = express();
const port = 3000;
app.use(cors({
    origin: 'https://khushikumaribajajtask.netlify.app'
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.json()); 

const isNumber = (char) => !isNaN(char);

app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            "is_success": false,
            "message": "Invalid request, 'data' is required and must be an array."
        });
    }

    const user_id = "john_doe_17091999";
    const email = "john@xyz.com"; 
    const roll_number = "ABCD123"; 

    let numbers = [];
    let alphabets = [];
    let highest_lowercase = '';

    data.forEach(item => {
        if (isNumber(item)) {
            numbers.push(item);
        } else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highest_lowercase) {
                highest_lowercase = item;
            }
        }
    });

    let file_valid = false;
    let file_mime_type = '';
    let file_size_kb = 0;

    if (file_b64) {
        try {
            const fileBuffer = Buffer.from(file_b64, 'base64');
            file_mime_type = mime.lookup(fileBuffer) || 'application/octet-stream';
            file_size_kb = (fileBuffer.length / 1024).toFixed(2); // File size in KB
            file_valid = true;
        } catch (error) {
            file_valid = false;
        }
    }

    const response = {
        "is_success": true,
        "user_id": user_id,
        "email": email,
        "roll_number": roll_number,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": [highest_lowercase],
        "file_valid": file_valid,
        "file_mime_type": file_mime_type,
        "file_size_kb": file_size_kb
    };

    res.status(200).json(response);
});

app.get('/bfhl', (req, res) => {
    const response = {
        "operation_code": 1
    };

    res.status(200).json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
