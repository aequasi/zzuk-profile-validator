const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/BuyTask",
    title:       "Buy Task",
    description: "Buy Task",
    type:        "object",
    properties:  {
        Action: {
            type:        "string",
            description: "Action to perform",
            pattern:     "Buy"
        },
        Vendor: {
            $ref: "/NPC"
        },
        Repair: {
            type:        "boolean",
            description: "Whether or not to repair",
            default:     false
        },
        Items:  {
            type:        "array",
            description: "Items to Buy",
            items:       {$ref: "/Item"}
        }
    },
    required:    ["Vendor", "Items"]
});
