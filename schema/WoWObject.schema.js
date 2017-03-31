module.exports = {
    id:         "/WoWObject",
    title:      "WoW Object",
    type:       "object",
    properties: {
        ID:        {
            type:        "integer",
            description: "ID of Object"
        },
        Name:      {
            type:        "string",
            description: "Name of Object"
        },
        Condition: {
            type:        "string",
            description: "Condition required for matching this object",
            default:     true
        }
    },
    oneOf:      [
        {
            required:   ["ID"],
            properties: {
                Exact: {
                    type:        "boolean",
                    description: "Whether or not this match is exact",
                    enum:        [true],
                    default:     true
                },
                Regex: {
                    type:        "boolean",
                    description: "Whether or not this match is a regex",
                    enum:        [false],
                    default:     false
                }
            }
        },
        {
            required:   ["Name"],
            properties: {
                Exact: {
                    type:        "boolean",
                    description: "Whether or not this match is exact",
                    default:     false
                },
                Regex: {
                    type:        "boolean",
                    description: "Whether or not this match is a regex",
                    default:     false
                }
            }
        }
    ]
};
