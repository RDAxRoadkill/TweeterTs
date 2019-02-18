import Message from '../models/message';

export function list(req, res, next) {
    Message.find({
    }, function(err, data: any) {
        if(err) {
            console.log(err)
        }
        console.log(data)
        res.send(data)
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