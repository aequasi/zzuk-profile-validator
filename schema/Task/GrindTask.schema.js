const merge    = require('merge-deep');
const LootTask = require('./LootTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/GrindTask",
    title:       "Grind Task",
    description: "Grind Task",
    type:        "object",
    properties:  {
        Action:      {
            type:        "string",
            description: "Action to perform",
            pattern:     "Grind"
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
        Bounds:      {
            type:     "array",
            minItems: 3,
            items:    {$ref: "/Location"}
        },
        Avoid:       {
            type:  "array",
            items: {$ref: "/Location"}
        }
    },
    required:    ["Bounds"]
});
