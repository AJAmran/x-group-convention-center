import { Metadata } from 'next'
import { SITE_CONFIG } from '@/constant/config'

export const metadata: Metadata = {
    title: 'Refund & Return Policy',
    description: `Refund and return policy for venue bookings and catering services at ${SITE_CONFIG.name}.`,
}

export default function RefundPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
