const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/PickUpQuestTask",
    title:       "PickUpQuest Task",
    description: "PickUpQuest Task",
    type:        "object",
    properties:  {
        Action:   {
            type:        "string",
            description: "Action to perform",
            pattern:     "PickUpQuest"
        },
        NPC:      {
            $ref:        "/NPC",
            description: "Quest Giver"
        },
        Quest:    {
            $ref:        "/Quest",
            description: "Quest to pick up"
        },
        required: ["NPC", "Quest", "Locations"]
    }
});
