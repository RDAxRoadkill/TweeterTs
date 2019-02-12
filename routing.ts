import express = require("express");
let router = express.Router();

router.route('/')
    .get(function (req: any, res: any) {
        console.log("First");
    });


export default router;