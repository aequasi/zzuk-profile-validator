const merge        = require('merge-deep');
const AbstractTask = require('./AbstractTask.schema.js');

module.exports = merge({}, AbstractTask, {
    id:          "/Task/MailTask",
    title:       "Mail Task",
    description: "Mail Task",
    type:        "object",
    properties:  {
        Action:     {
            type:        "string",
            description: "Action to perform",
            pattern:     "Mail"
        },
        Recipient:  {
            type:        "string",
            description: "User to send mail to"
        },
        Protected:  {
            type:        "array",
            description: "Items protected from Mailing",
            items:       {$ref: "/Item"}
        },
        MailGrey:   {
            type:        "boolean",
            description: "Whether or not to Mail all grey items",
            default:     false
        },
        MailWhite:  {
            type:        "boolean",
            description: "Whether or not to Mail all white items",
            default:     false
        },
        MailGreen:  {
            type:        "boolean",
            description: "Whether or not to Mail all green items",
            default:     false
        },
        MailBlue:   {
            type:        "boolean",
            description: "Whether or not to Mail all blue items",
            default:     false
        },
        MailPurple: {
            type:        "boolean",
            description: "Whether or not to Mail all purple items",
            default:     false
        },
        MailAll:    {
            type:        "boolean",
            description: "Whether or not to Mail all items",
            default:     false
        },
        Items:      {
            type:        "array",
            description: "Items to Mail",
            items:       {$ref: "/Item"}
        }
    },
    required:    ["User"],
    oneOf:       [
        {required: ["MailAll"]},
        {required: ["Items"]},
    ]
});
