const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// ✅ MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/gearfixdata';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Static workshop data (Mobile Service Centers)
const workshops = [
  {
    id: 1,
    name: 'SmartFix Mobile Care',
    location: 'Chennai',
    services: ['Screen Replacement', 'Battery Replacement', 'Software Update', 'Camera Repair', 'Water Damage Repair'],
    image: 'assets/workshops/image1.jpeg',
    description: 'Trusted mobile service center offering fast and reliable phone repairs for all major brands.',
    address: '45 Tech Avenue, Chennai, Tamil Nadu',
    phone: '+91 98765 43210',
    hours: 'Mon-Sat: 10:00 AM - 7:00 PM',
    email: 'info@smartfix.com'
  },
  {
    id: 2,
    name: 'MobileCare Solutions',
    location: 'Hyderabad',
    services: ['Screen Replacement', 'Charging Port Repair', 'Speaker & Mic Repair', 'Software Installation', 'Back Panel Replacement'],
    image: 'assets/workshops/image2.jpeg',
    description: 'Expert mobile technicians providing quick and affordable repair services for smartphones and tablets.',
    address: '22 Tech Park Road, Hyderabad, Telangana',
    phone: '+91 91234 56789',
    hours: 'Mon-Sat: 10:00 AM - 8:00 PM',
    email: 'info@mobilecare.com'
  },
  {
    id: 3,
    name: 'PhoneRevive Center',
    location: 'Bangalore',
    services: ['Display Repair', 'Battery Replacement', 'Motherboard Repair', 'Data Recovery', 'Camera Replacement'],
    image: 'assets/workshops/image3.jpeg',
    description: 'Professional service center offering reliable and fast solutions for all mobile phone issues.',
    address: '78 Mobile Plaza, Bangalore, Karnataka',
    phone: '+91 99887 66554',
    hours: 'Mon-Sun: 9:30 AM - 8:00 PM',
    email: 'info@phonerevive.com'
  }
];

// ✅ Routes
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/bookings');
app.use('/api/auth', authRoutes);
app.use('/api', bookingRoutes);

// ✅ Workshop Routes
app.get('/api/workshops', (req, res) => {
  res.json(workshops);
});

app.get('/api/workshops/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const workshop = workshops.find(w => w.id === id);

  if (!workshop) {
    return res.status(404).json({ msg: 'Workshop not found' });
  }

  res.json(workshop);
});

// ✅ Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));