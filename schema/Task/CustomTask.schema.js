const merge    = require('merge-deep');
const LootTask = require('./LootTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:                   "/Task/CustomTask",
    title:                "Custom Task",
    description:          "Custom Task",
    type:                 "object",
    additionalProperties: true,
    properties:           {
        Action: {
            type:        "string",
            description: "Action to perform",
            pattern:     "Custom"
        },
    },
});
