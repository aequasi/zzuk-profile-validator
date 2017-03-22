const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/LootTask",
    title:       "Loot Task",
    description: "Loot Task",
    type:        "object",
    properties:  {
        Action:  {
            type:        "string",
            description: "Action to perform",
            pattern:     "Loot"
        },
        LootAll: {
            type:        "boolean",
            description: "Whether or not to loot all items",
            default:     true
        },
        Items:   {
            type:        "array",
            description: "Items to loot",
            items:       {$ref: "/Item"}
        }
    },
    oneOf:       [
        {required: ["LootAll"]},
        {required: ["Items"]},
    ]
});
