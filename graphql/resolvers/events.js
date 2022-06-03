const { dateToString } = require('../../helpers/date');
const Event = require('../../models/event');
const {transformEvent} = require("./merge");



module.exports ={
    events: async () =>
    { 
        try
        {
            const events = await Event.find().populate('creator');
            return events.map(event =>
            {
                return transformEvent(event);
            });
        } catch (err)
        {
            throw err;
        }
    },
    createEvent: async (args) =>
    { try {
        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: +args.eventInput.price,
            date: new Date(args.eventInput.date),
            creator: "6299d1452bf3877eb4fa67d4"
        });
        let createdEvent;
       const result =  await event.save() 
                createdEvent = transformEvent(result);
                  const creator = await  User.findById("6299d1452bf3877eb4fa67d4")
                if (!creator)
                {
                    throw new Error('User not found');
                }
            creator.createdEvents.push(event);
        await creator.save();
        return createdEvent;
    } catch (error) {
        throw new Error(error);
    }
    },

    
}