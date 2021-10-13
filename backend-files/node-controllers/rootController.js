const express = require('express');
const root = express.Router();
const bodyParser = require('body-parser');
/* root.use(bodyParser.json());
root.use(bodyParser.urlencoded({ extended: true }));
const Call = require('./calls');
const src = "../angular-files/src"; */

// const dst = "../angular-files/dist/app-root";
// const path = dst;
const root_path = process.cwd() + "/../angular-files/dist/app-root/";
root.use(express.static(root_path));
root.get('/', (_req, res) => {
    res.sendFile(`index.html`, { root: root_path })
});
root.get('/app/', (_req, res) => {
    console.log(__dirname);
    res.sendFile(`index.html`, { root: root_path})
});
module.exports = root;
// module.exports = path;