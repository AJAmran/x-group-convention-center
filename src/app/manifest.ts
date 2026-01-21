import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/constant/config'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_CONFIG.name,
        short_name: SITE_CONFIG.shortName,
        description: SITE_CONFIG.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2f528f', // Convention Blue
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
