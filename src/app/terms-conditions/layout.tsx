import { Metadata } from 'next'
import { SITE_CONFIG } from '@/constant/config'

export const metadata: Metadata = {
    title: 'Terms & Conditions',
    description: `Terms and Conditions for venue booking and catering services at ${SITE_CONFIG.name}.`,
}

export default function TermsConditionsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
