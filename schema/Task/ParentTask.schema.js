const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/ParentTask",
    title:       "Parent Task",
    description: "Parent Task. Does nothing but hold other tasks.",
    type:        "object",
    properties:  {
        Action: {
            type:        "string",
            description: "Action to perform",
            pattern:     "Parent"
        }
    }
});
