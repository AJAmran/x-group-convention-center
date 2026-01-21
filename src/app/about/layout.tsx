import { Metadata } from 'next'
import { SITE_CONFIG } from '@/constant/config'

export const metadata: Metadata = {
    title: 'About Us',
    description: `Discover the history and mission of ${SITE_CONFIG.name}. Over 30 years of hospitality excellence in Dhaka.`,
    openGraph: {
        title: `About Us | ${SITE_CONFIG.name}`,
        description: `Learn about our legacy, mission, and the expert team behind ${SITE_CONFIG.name}.`,
        url: `${SITE_CONFIG.url}/about`,
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
        "name": "About",
        "item": `${SITE_CONFIG.url}/about`
    }]
};

export default function AboutLayout({
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
