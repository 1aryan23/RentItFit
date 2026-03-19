import './globals.css';

export const metadata = {
    title: {
        default: 'RentIt — Smart Property Management',
        template: '%s | RentIt',
    },
    description:
        'RentIt manages tenants, rent collection, agreements and property maintenance so property owners earn stable rental income without hassle.',
    keywords: [
        'property management',
        'rental income',
        'tenant verification',
        'rent collection',
        'property owner',
        'rental management',
    ],
    openGraph: {
        title: 'RentIt — Smart Property Management',
        description:
            'Professional property management for stress-free rental income.',
        url: 'https://rentit.com',
        siteName: 'RentIt',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-poppins antialiased">
                {children}
            </body>
        </html>
    );
}
