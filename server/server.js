const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/images', require('./routes/imageRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// client/package.json
{
  "name": "ai-image-generator-client",
  "version": "1.0.0",
  "dependencies": {
    "axios": "^1.3.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@tailwindcss/forms": "^0.5.3",
    "tailwindcss": "^3.2.4"
  }
}