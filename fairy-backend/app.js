const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../fairy-frontend')));

// Fallback route to serve index.html for single-page apps
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../fairy-frontend', 'html', 'index.html'));
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/donors', require('./routes/donors'));
//app.use('/api/beneficiaries', require('./routes/beneficiaries'));
//app.use('/api/distribution', require('./routes/distribution'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));