import { Metadata } from 'next'
import { SITE_CONFIG } from '@/constant/config'

export const metadata: Metadata = {
    title: 'Contact Us',
    description: `Get in touch with ${SITE_CONFIG.name} for venue inquiries, catering requests, and event planning support. Located at Shimanto Square, Dhaka.`,
    openGraph: {
        title: `Contact Us | ${SITE_CONFIG.name}`,
        description: `Find our location, phone numbers, and email. We are here to help you plan your masterpiece event.`,
        url: `${SITE_CONFIG.url}/contact`,
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
        "name": "Contact",
        "item": `${SITE_CONFIG.url}/contact`
    }]
};

export default function ContactLayout({
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
