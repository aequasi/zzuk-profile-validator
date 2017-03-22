const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/InteractTask",
    title:       "Interact Task",
    description: "Interact Task",
    type:        "object",
    properties:  {
        Action:   {
            type:        "string",
            description: "Action to perform",
            pattern:     "Interact"
        },
        Object:   {
            $ref:        "/WoWObject",
            description: "WoW Object to interact with"
        },
        required: ["Object"]
    }
});
