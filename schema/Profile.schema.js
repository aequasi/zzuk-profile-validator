const TaskRefs = require('./Task/TaskRefs');

module.exports = {
    id:          "/Profile",
    title:       "Profile",
    description: "A profile for the Vanilla WoW Bot: ZzukBot",
    type:        "object",
    properties:  {
        Name:     {
            type:        "string",
            description: "Name of the profile"
        },
        Author:   {
            type:        "string",
            description: "Author of the profile"
        },
        Support:  {
            type:        "string",
            description: "Support info for the profile"
        },
        URL:      {
            type:        "string",
            description: "URL for the profile"
        },
        Parallel: {
            type:        "bool",
            description: "Whether or not the tasks for this profile are ran in parallel",
            default:     false,
        },
        Tasks:    {
            type:        "array",
            description: "Tasks for this profile",
            items:       {
                anyOf: TaskRefs.map(x => {
                    return {$ref: x};
                })
            }
        }
    },
    required:    ["Name", "Author"]
};
