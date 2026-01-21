import { Metadata } from 'next'
import { SITE_CONFIG } from '@/constant/config'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: `Privacy Policy for ${SITE_CONFIG.name}. Learn how we protect and manage your personal information.`,
}

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
