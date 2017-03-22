const Validator = require('jsonschema').Validator;

// Schemas
const
    Profile   = require('./schema/Profile.schema'),
    Location  = require('./schema/Location.schema'),
    WoWObject = require('./schema/WoWObject.schema'),
    Quest     = require('./schema/Quest.schema'),
    NPC       = require('./schema/NPC.schema'),
    Item      = require('./schema/Item.schema'),
    Mob       = require('./schema/Mob.schema'),
    Tasks     = {
        AbstractTask:    require('./schema/Task/AbstractTask.schema'),
        AttackTask:      require('./schema/Task/AttackTask.schema'),
        BuyTask:         require('./schema/Task/BuyTask.schema'),
        CastSpellTask:   require('./schema/Task/CastSpellTask.schema'),
        InteractTask:    require('./schema/Task/InteractTask.schema'),
        LootTask:        require('./schema/Task/LootTask.schema'),
        MailTask:        require('./schema/Task/MailTask.schema'),
        ParentTask:      require('./schema/Task/ParentTask.schema'),
        PickUpQuestTask: require('./schema/Task/PickUpQuestTask.schema'),
        RepairTask:      require('./schema/Task/RepairTask.schema'),
        SellTask:        require('./schema/Task/SellTask.schema'),
        TargetTask:      require('./schema/Task/TargetTask.schema'),
        TravelTask:      require('./schema/Task/TravelTask.schema'),
        TurnInQuestTask: require('./schema/Task/TurnInQuestTask.schema'),
        WaitTask:        require('./schema/Task/WaitTask.schema'),
        WalkTask:        require('./schema/Task/WalkTask.schema'),
    };

class ProfileValidator {
    constructor() {
        this.Validator = new Validator();
        this.Validator.addSchema(Location, Location.id);
        this.Validator.addSchema(WoWObject, WoWObject.id);
        this.Validator.addSchema(Quest, Quest.id);
        this.Validator.addSchema(NPC, NPC.id);
        this.Validator.addSchema(Item, Item.id);
        this.Validator.addSchema(Mob, Mob.id);
        for (let taskName in Tasks) {
            if (Tasks.hasOwnProperty(taskName)) {
                this.Validator.addSchema(Tasks[taskName], Tasks[taskName].id)
            }
        }
    }
    
    validate(data) {
        const validation = this.Validator.validate(data, Profile);
        if (validation.errors.length > 0) {
            for (let index in data.Tasks) {
                if (!data.Tasks.hasOwnProperty(index)) {
                    continue;
                }
                const task = data.Tasks[index];
                
                let found = false;
                for (let taskName in Tasks) {
                    if (Tasks.hasOwnProperty(taskName) && task.Action + "Task" === taskName) {
                        let subValidation = this.Validator.validate(task, Tasks[taskName]);
                        if (subValidation.errors.length > 0) {
                            for (let error of subValidation.errors) {
                                error.property = error.property.replace(/instance\./g, `instance.Tasks[${index}].`);
                                error.stack = error.stack.replace(/instance\./g, `instance.Tasks[${index}].`);
                                console.log(error);
                                
                                validation.errors.push(error);
                            }
                        }
                        
                        found = true;
                        break;
                    }
                }
    
                if (found) {
                    validation.errors.splice(index, 1);
                    continue;
                }
                
                validation.errors.push({
                    property: `instance.Tasks[${index}]`,
                    message:  `Invalid task name: ${task.Action}`,
                    schema:   Tasks.AbstractTask,
                    instance: task
                });
            }
        }
        
        validation.schema.properties.Tasks.items.anyOf = validation.schema.properties.Tasks.items.anyOf.map(x => {
            const ref = x.$ref;
            if (typeof ref === 'string') {
                const schema = x.$ref.replace("/Task/", "");
    
                x.$ref = Tasks[schema];
            }
            
            return x;
        });
        
        return Object.assign({}, {isValid: validation.errors.length === 0}, validation);
    }
}

module.exports = ProfileValidator;