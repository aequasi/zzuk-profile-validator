const TaskTypes = require('./TaskTypes.json');

module.exports = TaskTypes.map(task => `/Task/${task}Task`);