module.exports = {
    id:          "/Location",
    title:       "Location",
    description: "An X/Y/Z location",
    type:        "array",
    items:       [
        {
            type:        "number",
            description: "X Position"
        },
        {
            type:        "number",
            description: "Y Position"
        },
        {
            type:        "number",
            description: "Z Position"
        }
    ],
    minItems:    3,
    maxItems:    3
};
