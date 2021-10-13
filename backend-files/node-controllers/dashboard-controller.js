const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* const Call = require('./calls');
const src = "../angular-files/src"; */
// const dst = "../angular-files/dist/dashbrd";
// const path = process.cwd() + `${dst}/index.html`;
router.use(express.static(process.cwd() + "/../angular-files/dist/dashbrd/"));
router.get('/', (_req, res) => {
    res.sendFile("index.html")
});
module.exports = router;
// module.exports = path;