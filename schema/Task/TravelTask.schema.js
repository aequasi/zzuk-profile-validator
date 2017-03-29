const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/TravelTask",
    title:       "Travel Task",
    description: "Travel Task",
    type:        "object",
    properties:  {
        Action:      {
            type:        "string",
            description: "Action to perform",
            pattern:     "Travel"
        },
        NPC:         {
            $ref:        "/NPC",
            description: "Flight Master"
        },
        Destination: {
            $ref:        "/Location",
            description: "Location to travel to",
        },
    },
    required:    ["NPC", "Destination", "Locations"]
});
