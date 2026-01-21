import { Metadata } from 'next'
import { SITE_CONFIG } from '@/constant/config'

export const metadata: Metadata = {
    title: 'Delivery Policy',
    description: `Catering and food delivery policy for ${SITE_CONFIG.name} and Foodbitebd app orders.`,
}

export default function DeliveryPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
