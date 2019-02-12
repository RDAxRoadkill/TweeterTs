import express = require("express");
let router = express.Router();

router.route('/register/contractor')
    .get(function (req: any, res: any) {
        console.log("First");
    });


export default router;