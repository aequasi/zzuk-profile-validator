const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/LootTask",
    title:       "Loot Task",
    description: "Loot Task",
    type:        "object",
    properties:  {
        Action:       {
            type:        "string",
            description: "Action to perform",
            pattern:     "Loot"
        },
        LootAll:      {
            type:        "boolean",
            description: "Whether or not to loot all items",
            default:     true
        },
        Items:        {
            type:        "array",
            description: "Items to loot",
            items:       {
                oneOf: [
                    {$ref: "/Item"},
                    {type: "array", items: {$ref: "/Item"}}
                ]
            }
        },
        IgnoredItems: {
            type:        "array",
            description: "Items to ignore",
            items:       {
                oneOf: [
                    {$ref: "/Item"},
                    {type: "array", items: {$ref: "/Item"}}
                ]
            }
        }
    }
});
