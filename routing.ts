import express = require("express");
import { list, create } from './controllers/message_controller';
let router = express.Router();
import { register, login } from './controllers/auth_controller';


router.route('/')
    .get(function (req: any, res: any) {
        res.redirect('/message');
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
                console.log('Cookies: ', req.cookies)
                res.cookie('hitormiss', result, { maxAge: 60000 });
            }
            console.log('Cookies: ', req.cookies)
            res.redirect('/message');
        });
    });
router.route('/404')
    .get(function (req: any, res: any) {
        res.sendFile(__dirname + '/templates/404.html');
    })
    .post(function (req: any, res: any) {

    });
router.route('/send')
    .get(function (req: any, res: any, next: any) {
        if (req.cookies.hitormiss) {
            console.log(req.cookies);
            res.sendFile(__dirname + '/templates/message.html');
        } else {
            res.redirect('/login');
        }
    })
    .post(function (req: any, res: any) {
        console.log("post called")
        create(req, res, function () {
            console.log("inside create")
            res.redirect('/message');
        })
    });
router.route('/message')
    .get(function (req: any, res: any, next: any) {
        list(req, res, next)
    })
    .post(function (req: any, res: any) {
        create
    });
router.get('*', function (req, res) {
    res.sendFile(__dirname + '/templates/404.html');
});

export default router;