import { Metadata } from 'next'
import { SITE_CONFIG } from '@/constant/config'

export const metadata: Metadata = {
    title: 'Gallery',
    description: `A visual journey through our grand event spaces and culinary art. See why ${SITE_CONFIG.name} is the most prominent venue in Dhanmondi.`,
    openGraph: {
        title: `Gallery | ${SITE_CONFIG.name}`,
        description: `Browse photos of our convention halls, weddings, and premium catering.`,
        url: `${SITE_CONFIG.url}/gallery`,
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
        "name": "Gallery",
        "item": `${SITE_CONFIG.url}/gallery`
    }]
};

export default function GalleryLayout({
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
