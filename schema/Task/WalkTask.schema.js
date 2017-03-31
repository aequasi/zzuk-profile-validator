const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/WalkTask",
    title:       "Walk Task",
    description: "Walk Task",
    type:        "object",
    properties:  {
        Action: {
            type:        "string",
            description: "Action to perform",
            pattern:     "Walk"
        },
        Mount:  {
            type:        "boolean",
            description: "Whether or not to use a mount",
            default:     true
        }
    }
});
