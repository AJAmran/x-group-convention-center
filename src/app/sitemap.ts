import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/constant/config'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url

    // Define your routes here
    const routes = [
        '',
        '/about',
        '/menu',
        '/gallery',
        '/reservation',
        '/contact',
        '/privacy-policy',
        '/terms-conditions',
        '/delivery-policy',
        '/refund-policy',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))
}
