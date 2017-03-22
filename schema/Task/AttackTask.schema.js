const merge    = require('merge-deep');
const LootTask = require('./LootTask.schema.js');

module.exports = merge({}, LootTask, {
    id:          "/Task/AttackTask",
    title:       "Attack Task",
    description: "Attack Task",
    type:        "object",
    properties:  {
        Action:      {
            type:        "string",
            description: "Action to perform",
            pattern:     "Attack"
        },
        Mobs:        {
            type:  "array",
            items: {$ref: "/Mob"}
        },
        IgnoredMobs: {
            type:  "array",
            items: {$ref: "/Mob"}
        },
    },
    required:    ["Mobs"]
});
