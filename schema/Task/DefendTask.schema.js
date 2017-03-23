const merge    = require('merge-deep');
const LootTask = require('./LootTask.schema.js');

module.exports = merge({}, LootTask, {
    id:          "/Task/DefendTask",
    title:       "Defend Task",
    description: "Defend Task",
    type:        "object",
    properties:  {
        Action:      {
            type:        "string",
            description: "Action to perform",
            pattern:     "Attack"
        },
    },
});
