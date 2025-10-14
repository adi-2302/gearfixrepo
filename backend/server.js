const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// MongoDB connection
// Using environment variable or default to localhost with gearfixdata database
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/gearfixdata';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected to gearfixdata'))
    .catch(err => console.log(err));

// Static workshop data
const workshops = [
    {
        "id": 1,
        "name": "Speed Auto Care",
        "location": "Chennai",
        "services": ["Oil Change", "Brake Repair", "Tire Replacement", "Engine Diagnostics", "Suspension Work"],
        "image": "image1.jpg",
        "description": "Premier auto service center specializing in quick maintenance and repairs.",
        "address": "123 Auto Street, Chennai, Tamil Nadu",
        "phone": "+91 98765 43210",
        "hours": "Mon-Sat: 9:00 AM - 6:00 PM"
    },
    {
        "id": 2,
        "name": "GearUp Garage",
        "location": "Bangalore",
        "services": ["Engine Tuning", "Battery Replacement", "General Checkup", "Performance Upgrades", "Electrical System Repair"],
        "image": "image2.jpg",
        "description": "Expert mechanics providing comprehensive vehicle maintenance and performance tuning.",
        "address": "456 Mechanic Road, Bangalore, Karnataka",
        "phone": "+91 87654 32109",
        "hours": "Mon-Sat: 8:30 AM - 7:00 PM"
    },
    {
        "id": 3,
        "name": "Precision Motors",
        "location": "Mumbai",
        "services": ["Wheel Alignment", "AC Service", "Electrical Repairs", "Computer Diagnostics", "Transmission Service"],
        "image": "image3.jpg",
        "description": "Specialized workshop focusing on precision repairs and advanced diagnostics.",
        "address": "789 Service Lane, Mumbai, Maharashtra",
        "phone": "+91 76543 21098",
        "hours": "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 2:00 PM"
    }
];

// Define routes
const authRoutes = require('./routes/auth');

// Use routes
app.use('/api/auth', authRoutes);

app.get('/api/workshops', (req, res) => {
    res.json(workshops);
});

app.get('/api/workshops/:id', (req, res) => {
    const workshop = workshops.find(w => w.id === parseInt(req.params.id));
    if (!workshop) {
        return res.status(404).json({ msg: 'Workshop not found' });
    }
    res.json(workshop);
});

// Server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));