"use client"

import { GoogleLogin } from '@react-oauth/google'
import cookieUtil from '@/utils/Cookie'
import GoogleProvider from '@/providers/GoogleOAuth'
import { useRouter, useSearchParams } from 'next/navigation'

type Props = {}

export default function LoginButton({ }: Props) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleSuccess = (res: any) => {
        if (res?.credential) {
            cookieUtil.set('google_credential', res.credential)

            const from = searchParams.get('from')

            if (from) {
                router.push(from)
            } else {
                router.push('recruitment')
            }
        }
    }

    return (
        <div className="flex items-center justify-center w-full font-bold">
            <GoogleProvider>
                <GoogleLogin
                    onSuccess={handleSuccess}
                />
            </GoogleProvider>
        </div>
    )
}