require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));

app.get('/api', (req, res) => {
    const now = new Date();

    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    const response = {
        email: 'kayigireerneste@gmail.com',
        current_datetime: formattedDate, // Use the formatted date
        github_url: 'https://github.com/kayigireerneste/hng-stage0-task'
    };
    res.status(200).json(response);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});