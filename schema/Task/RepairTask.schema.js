const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/RepairTask",
    title:       "Repair Task",
    description: "Repair Task",
    type:        "object",
    properties:  {
        Action: {
            type:        "string",
            description: "Action to perform",
            pattern:     "Repair"
        },
        Vendor: {
            oneOf: [
                {$ref: "/NPC"},
                {type: "array", items: {$ref: "/NPC"}}
            ]
        }
    },
    required:    ["Vendor", "Locations"]
});
