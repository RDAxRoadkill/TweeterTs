import Message from '../models/message';
import User from '../models/user';

export function list(req, res, next) {
    Message.find({
    }, function (err, data: any) {
        if (err) {
            console.log(err)
        }
        console.log(data)
        var body = "<body>"
        for (let i = 0; i < data.length; i++) {
            body += "<p>" + data[i].message + "</p>";
        }
        body += "</body>"
        res.send(body);
    })
}

export function create(req, res, cb) {
    const messageProps = {
        username: req.body.username,
        message: req.body.message
    };
    console.log(messageProps)
    Message.create(messageProps)
        .then(message => res.send(message))
        .catch();
    cb();
}