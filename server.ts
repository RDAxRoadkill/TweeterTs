import express = require('express');
const app = express();
import routing from './routing';

app.use(routing);
app.listen(process.env.PORT || 8000);


console.log("Server up");