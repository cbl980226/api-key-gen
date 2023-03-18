'use client'

import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import Button from '@/components/ui/Button'
import { toast } from '@/components/ui/Toast'

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = props => {
  const [isLoading, setIsLoading] = useState(false)

  const signInWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn('google')
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      toast({
        title: 'Error signing in',
        message: 'Please try again later',
        type: 'error'
      })
    }
  }

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  )
}

export default SignInButton
