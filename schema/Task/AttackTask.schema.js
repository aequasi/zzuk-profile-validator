const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
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
            items: {
                oneOf: [
                    {$ref: "/Mob"},
                    {type: "array", items: {$ref: "/Mob"}}
                ]
            }
        },
        IgnoredMobs: {
            type:  "array",
            items: {
                oneOf: [
                    {$ref: "/Mob"},
                    {type: "array", items: {$ref: "/Mob"}}
                ]
            }
        },
    },
    required:    ["Mobs"]
});
