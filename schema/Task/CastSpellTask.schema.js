const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/CastSpellTask",
    title:       "CastSpell Task",
    description: "CastSpell Task",
    type:        "object",
    properties:  {
        Action:   {
            type:        "string",
            description: "Action to perform",
            pattern:     "CastSpell"
        },
        Spell:    {
            $ref:        "/WoWObject",
            description: "Spell to cast"
        },
        Target:   {
            type:        "string",
            enum:        ["target", "self", "none"],
            description: "What to target, Either target, self, or none.",
            default:     "target"
        },
        required: ["Spell"]
    }
});
