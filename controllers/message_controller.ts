import Message from '../models/message';
import User from '../models/user';

export function list(req, res, next) {
    Message.find({
    }, function (err, data: any) {
        if (err) {
            console.log(err)
        }

        res.json(data);
    })
}

export function create(req, res, cb) {
    User.findById(req.cookies.hitormiss.id, function (err, data: any) {
        const messageProps = {
            username: data.username,
            message: req.body.message
        };
        console.log(messageProps)
        Message.create(messageProps)
            .then(message => res.send(message))
            .catch();
        cb();
    })
}