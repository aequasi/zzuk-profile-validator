module.exports = {
    id:          "/Location",
    title:       "Location",
    description: "An X/Y/Z location",
    type:        "object",
    properties:  {
        X: {
            type:        "float",
            description: "X Position"
        },
        Y: {
            type:        "float",
            description: "Y Position"
        },
        Z: {
            type:        "float",
            description: "Z Position"
        }
    },
    required:    ["X", "Y", "Z"]
};
