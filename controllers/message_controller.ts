import Message from '../models/message';

export function index(req, res, next) {
    Message.find({})
        .then(messages => res.send(messages))
        .catch(next);
}

export function create(req, res) {
    const messageProps = {
        message: req.body.title
      };

      Message.create(messageProps)
      .then(message => res.send(message))
      .catch();
}