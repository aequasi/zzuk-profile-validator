const merge     = require('merge-deep');
const WoWObject = require("./WoWObject.schema");

module.exports = merge({}, WoWObject, {
    id:          "/Mob",
    title:       "Mob",
    description: "A Mob from WoW",
});
