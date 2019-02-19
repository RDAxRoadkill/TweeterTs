import User from '../models/user';
import JWT = require('jsonwebtoken');

export function register(req: any) {
    let user = {
        username: req.body.username,
        password: req.body.password
    }
    User.create(user);
    console.log("worrrrks");
}

export function login(req: any, cb: any) {
    User.find({
        username: req.body.username,
        password: req.body.password
    }, function (err, data: any) {
        if (err == null) {
            let token = {
                id: data[0].id
            }
            cb(token);
        } else {
            cb({
                error: err
            });
        }

    });

}