const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/RestTask",
    title:       "Rest Task",
    description: "Rest Task",
    type:        "object",
    properties:  {
        Action:      {
            type:        "string",
            description: "Action to perform",
            pattern:     "Rest"
        },
        UntilHealth: {
            type:        "number",
            description: "Rest until this much health",
            default:     100
        },
        UntilMana:   {
            type:        "number",
            description: "Rest until this much mana",
            default:     100
        }
    },
    required:    ["UntilHealth", "UntilMana"]
});
