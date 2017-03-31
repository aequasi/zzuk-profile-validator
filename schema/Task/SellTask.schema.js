const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/SellTask",
    title:       "Sell Task",
    description: "Sell Task",
    type:        "object",
    properties:  {
        Action:     {
            type:        "string",
            description: "Action to perform",
            pattern:     "Sell"
        },
        Vendor:     {
            oneOf: [
                {$ref: "/NPC"},
                {type: "array", items: {$ref: "/NPC"}}
            ],
        },
        Repair:     {
            type:        "boolean",
            description: "Whether or not to repair",
            default:     false
        },
        Protected:  {
            type:        "array",
            description: "Items protected from selling",
            items:       {
                oneOf: [
                    {$ref: "/Item"},
                    {type: "array", items: {$ref: "/Item"}}
                ]
            }
        },
        SellGrey:   {
            type:        "boolean",
            description: "Whether or not to sell all grey items",
            default:     true
        },
        SellWhite:  {
            type:        "boolean",
            description: "Whether or not to sell all white items",
            default:     true
        },
        SellGreen:  {
            type:        "boolean",
            description: "Whether or not to sell all green items",
            default:     false
        },
        SellBlue:   {
            type:        "boolean",
            description: "Whether or not to sell all blue items",
            default:     false
        },
        SellPurple: {
            type:        "boolean",
            description: "Whether or not to sell all purple items",
            default:     false
        },
        SellAll:    {
            type:        "boolean",
            description: "Whether or not to sell all items",
            default:     true
        },
        Items:      {
            type:        "array",
            description: "Items to sell",
            items:       {
                oneOf: [
                    {$ref: "/Item"},
                    {type: "array", items: {$ref: "/Item"}}
                ]
            }
        }
    },
    required:    ["Vendor", "Locations"]
});
