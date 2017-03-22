const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/TargetTask",
    title:       "Target Task",
    description: "Target Task",
    type:        "object",
    properties:  {
        Action:   {
            type:        "string",
            description: "Action to perform",
            pattern:     "Target"
        },
        Object:   {
            $ref:        "/WoWObject",
            description: "WoW Object to Target"
        },
        required: ["Object"]
    }
});
