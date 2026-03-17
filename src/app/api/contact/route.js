import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validation
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
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

        const contact = await Contact.create({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            message: message.trim(),
        });

        return NextResponse.json(
            { success: true, data: contact },
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

        console.error('Contact API error:', error);

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
