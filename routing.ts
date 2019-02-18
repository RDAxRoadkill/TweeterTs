import express = require("express");
import { index, create } from './controllers/message_controller';
let router = express.Router();
import { register, login } from './controllers/auth_controller';

router.route('/')
    .get(function (req: any, res: any) {
        console.log("First");
    });

router.route('/register')
    .get(function (req: any, res: any) {
        res.sendFile(__dirname + '/templates/register.html');
    })
    .post(function (req: any, res: any) {
        register(req);
    });

router.route('/login')
    .get(function (req: any, res: any) {
        res.sendFile(__dirname + '/templates/login.html');
    })
    .post(function (req: any, res: any) {
        login(req, function (result) {
            if (!result.error) {
                res.cookie(result, 60000);
            }
            res.json(result);
        });
    });
router.route('/404')
    .get(function (req: any, res: any) {
        res.sendFile(__dirname + '/templates/404.html');
    })
    .post(function (req: any, res: any) {

    });
router.route('/message')
    .get(function (req: any, res: any) {
        index(req, res)
    })
    .post(function (req: any, res: any) {
        create
    });
router.get('*', function (req, res) {
    res.sendFile(__dirname + '/templates/404.html');
});

export default router;