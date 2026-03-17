import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PropertyLead from '@/models/PropertyLead';

export async function POST(request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { ownerName, email, phone, propertyLocation, propertyType, expectedRent, notes } = body;

        // Validation
        if (!ownerName || !email || !phone || !propertyLocation || !propertyType) {
            return NextResponse.json(
                { error: 'Please fill in all required fields' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            );
        }

        const validTypes = ['Apartment', 'Villa', 'Independent House', 'Commercial', 'Plot', 'Other'];
        if (!validTypes.includes(propertyType)) {
            return NextResponse.json(
                { error: 'Invalid property type' },
                { status: 400 }
            );
        }

        const lead = await PropertyLead.create({
            ownerName: ownerName.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            propertyLocation: propertyLocation.trim(),
            propertyType,
            expectedRent: expectedRent?.trim() || '',
            notes: notes?.trim() || '',
        });

        return NextResponse.json(
            { success: true, data: lead },
            { status: 201 }
        );
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map((err) => err.message);
            return NextResponse.json(
                { error: messages.join(', ') },
                { status: 400 }
            );
        }

        console.error('Property API error:', error);

        // Provide more helpful error messages for common issues
        let errorMessage = 'Internal server error';
        if (error.name === 'MongoServerError' || error.name === 'MongooseServerSelectionError' || error.message?.includes('ECONNREFUSED')) {
            errorMessage = 'Database connection failed. Please ensure MongoDB is running.';
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
