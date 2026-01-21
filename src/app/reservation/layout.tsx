import { Metadata } from 'next'
import { SITE_CONFIG } from '@/constant/config'

export const metadata: Metadata = {
    title: 'Reservation',
    description: `Book your next grand event at ${SITE_CONFIG.name}. Wedding bookings, corporate seminars, and gala dinner reservations in Dhanmondi.`,
    openGraph: {
        title: `Book Now | ${SITE_CONFIG.name}`,
        description: `Contact our event planning team to secure your date at Dhaka's premier convention center.`,
        url: `${SITE_CONFIG.url}/reservation`,
    }
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_CONFIG.url
    }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Reservation",
        "item": `${SITE_CONFIG.url}/reservation`
    }]
};

export default function ReservationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    )
}
