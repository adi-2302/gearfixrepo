const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ success: true, message: 'Appointment booked successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to book appointment.' });
  }
};