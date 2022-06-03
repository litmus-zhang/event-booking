const Event = require('../../models/event');
const Booking = require('../../models/booking');

const { transformBooking, transformEvent} = require("./merge");






module.exports ={
 
    bookings: async () =>
    {
        try {
            const bookings = await Booking.find();
            return bookings.map(booking =>
            {
                return transformBooking(booking);
            })

        } catch (error) {
            throw error
        }
    },
    bookEvent: async (args) =>
    {
        try
        {
            const fetchedEvent = await Event.findOne({_id : args.eventId});
            const booking = new Booking({
                user: "6299d1452bf3877eb4fa67d4",
                event: fetchedEvent
            })
            const result = await booking.save();
            return transformBooking(result);
        }catch (err)
        {
            throw err;
        }
    },
    cancelBooking: async (args) =>
    {
        try
        {
            const booking = await Booking.findById(args.bookingId).populate('event');
            const event = transformEvent(booking._doc.event);
            console.log(event);
           await Booking.deleteOne({_id: args.bookingId});
            return event;
        } catch (error) {
            throw error;
        }
    }
}