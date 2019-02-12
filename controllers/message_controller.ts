import Message from '../models/message';

export function index(req, res, next) {
    Message.find({})
        .then(messages => res.send(messages))
        .catch(next);
}