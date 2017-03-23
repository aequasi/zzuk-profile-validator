const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/ReferenceTask",
    title:       "Reference Task",
    description: "Reference Task",
    type:        "object",
    properties:  {
        Action: {
            type:        "string",
            description: "Action to perform",
            pattern:     "Reference"
        }
    },
    required:    ["Id"]
});
