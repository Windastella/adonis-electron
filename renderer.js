require('dotenv').config();
//const remote = require('electron').remote;

window.location.href = `http://${process.env.HOST}:${process.env.PORT}`;