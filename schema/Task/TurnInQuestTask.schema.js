const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/TurnInQuestTask",
    title:       "TurnInQuest Task",
    description: "TurnInQuest Task",
    type:        "object",
    properties:  {
        Action:   {
            type:        "string",
            description: "Action to perform",
            pattern:     "TurnInQuest"
        },
        NPC:      {
            $ref:        "/NPC",
            description: "Quest Giver"
        },
        Quest:    {
            $ref:        "/Quest",
            description: "Quest to turn up"
        },
        required: ["NPC", "Quest", "Locations"]
    }
});
