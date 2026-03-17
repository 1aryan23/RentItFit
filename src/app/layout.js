import './globals.css';

export const metadata = {
    title: {
        default: 'RentItFit — Smart Property Management',
        template: '%s | RentItFit',
    },
    description:
        'RentItFit manages tenants, rent collection, agreements and property maintenance so property owners earn stable rental income without hassle.',
    keywords: [
        'property management',
        'rental income',
        'tenant verification',
        'rent collection',
        'property owner',
        'rental management',
    ],
    openGraph: {
        title: 'RentItFit — Smart Property Management',
        description:
            'Professional property management for stress-free rental income.',
        url: 'https://rentitfit.com',
        siteName: 'RentItFit',
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
