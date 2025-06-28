const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
