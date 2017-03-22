const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/WaitTask",
    title:       "Wait Task",
    description: "Wait Task",
    type:        "object",
    properties:  {
        Action:   {
            type:        "string",
            description: "Action to perform",
            pattern:     "Wait"
        },
        Duration: {
            type:        "number",
            description: "Milliseconds to wait for"
        }
    },
    required:    ["Duration"]
});
