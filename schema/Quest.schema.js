const merge     = require('merge-deep');
const WoWObject = require("./WoWObject.schema");

module.exports = merge({}, WoWObject, {
    id:          "/Quest",
    title:       "Quest",
    description: "A Quest from WoW",
});
