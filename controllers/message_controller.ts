import Message from '../models/message';

module.exports = {
    index(req, res, next){
        Message.find({})
            .then(messages => res.send(messages))
            .catch(next);
    }
};