require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); 
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));

app.get('/api', (req, res) => {
    const response = {
        email: 'kayigireerneste@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/kayigireerneste/hng-stage0-task'
    };
    res.status(200).json(response);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});