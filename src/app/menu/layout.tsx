import { Metadata } from 'next'
import { SITE_CONFIG } from '@/constant/config'

export const metadata: Metadata = {
    title: 'Menu & Catering',
    description: `Explore our premium catering packages and traditional delicacies. Designed for weddings, corporate events, and grand galas in Dhaka.`,
    openGraph: {
        title: `Menu & Catering | ${SITE_CONFIG.name}`,
        description: `View our wedding and corporate catering packages. Premium Bangladeshi and Continental cuisine.`,
        url: `${SITE_CONFIG.url}/menu`,
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
        "name": "Menu",
        "item": `${SITE_CONFIG.url}/menu`
    }]
};

export default function MenuLayout({
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
