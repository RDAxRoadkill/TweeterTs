import express = require("express");
import {index} from './controllers/message_controller';
let router = express.Router();
import { register } from './controllers/auth_controller';

router.route('/')
    .get(function (req: any, res: any) {
        console.log("First");
    });

router.route('/register')
    .get(function (req: any, res: any) {
        res.sendFile(__dirname + '/templates/register.html');
    })
    .post(function (req: any, res: any) {
        register(req, res);
    });

router.route('/login')
    .get(function (req: any, res: any) {
        res.sendFile(__dirname + '/templates/login.html');
    })
    .post(function (req: any, res: any) {

    });

router.get('/message', index);

export default router;