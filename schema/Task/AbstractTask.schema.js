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
        Locations:   {
            oneOf:       [
                {$ref: "/Location"},
                {type: "array", items: {$ref: "/Location"}}
            ],
            description: "Locations where this task takes place."
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
        Stateful:    {
            type:        "bool",
            description: "Whether or not the sub-tasks for this task are stateful",
            default:     false,
        },
        Sequential:  {
            type:        "bool",
            description: "Whether or not the sub-tasks for this task are sequential",
            default:     false,
        },
        Parallel:    {
            type:        "bool",
            description: "Whether or not the sub-tasks for this task are ran in parallel",
            default:     false,
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
            oneOf:       TaskRefs.map(x => {
                return {$ref: x};
            }),
            description: "Task to run after this task is finished. Useful for conditionals"
        }
    },
    
};
