import User from '../models/user';

export function register(req: any, res: any) {
    let user = {
        username: req.body.username,
        password: req.body.password
    }
    User.create(user);
    console.log("worrrrks");
}