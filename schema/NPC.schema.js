const merge     = require('merge-deep');
const WoWObject = require("./WoWObject.schema");

module.exports = merge({}, WoWObject, {
    id:          "/NPC",
    title:       "NPC",
    description: "An NPC from WoW",
});
