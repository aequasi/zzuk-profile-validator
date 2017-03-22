const merge     = require('merge-deep');
const WoWObject = require("./WoWObject.schema");

module.exports = merge({}, WoWObject, {
    id:          "/Item",
    title:       "Item",
    description: "An Item from WoW",
    properties:  {
        Count: {
            type:        "integer",
            description: "Number of items"
        },
        All:   {
            type:        "boolean",
            description: "Whether or not to use all items",
            default:     true
        }
    }
});
