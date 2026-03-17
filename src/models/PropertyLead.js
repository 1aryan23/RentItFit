import mongoose from 'mongoose';

const PropertyLeadSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: [true, 'Owner name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        trim: true,
    },
    propertyLocation: {
        type: String,
        required: [true, 'Property location is required'],
        trim: true,
    },
    propertyType: {
        type: String,
        required: [true, 'Property type is required'],
        enum: ['Apartment', 'Villa', 'Independent House', 'Commercial', 'Plot', 'Other'],
    },
    expectedRent: {
        type: String,
        trim: true,
    },
    notes: {
        type: String,
        trim: true,
        maxlength: [2000, 'Notes cannot exceed 2000 characters'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.PropertyLead || mongoose.model('PropertyLead', PropertyLeadSchema);
