const TaskTypes = require('./TaskTypes');
const TaskRefs  = require('./TaskRefs');

module.exports = {
    id:          "/AbstractTask",
    title:       "Abstract Task",
    description: "A base for all the different tasks.",
    type:        "object",
    properties:  {
        Id:          {
            type:        "string",
            description: "Identifier of this task. Used for references (like Goto and Label)"
        },
        Conditional: {
            type:        "string",
            description: "Conditional for this task to run",
            default:     "true"
        },
        Loop:        {
            type:        "boolean",
            description: "Whether or not this task is a loop",
            default:     false
        },
        Location:    {
            type:        "array",
            items:       {type: "number"},
            minItems:    3,
            maxItems:    3,
            description: "Location where this task takes place. Format is [X, Y, Z]"
        },
        Priority:    {
            type:        "integer",
            description: "Priority of this task",
            minimum:     1,
            default:     1
        },
        Action:      {
            type:        "string",
            description: "Action to perform",
            enum:        TaskTypes,
            default:     "Parent"
        },
        Tasks:       {
            type:        "array",
            description: "Sub-Tasks for this task",
            items:       {
                anyOf: TaskRefs.map(x => {
                    return {$ref: x};
                })
            }
        },
        After:       {
            oneOf:       [
                {
                    oneOf: TaskRefs.map(x => {
                        return {$ref: x};
                    })
                },
                {
                    type: "string"
                }
            ],
            description: "Task to run after this task is finished. Useful for conditionals"
        }
    }
};
