'use client'

import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import Button from '@/components/ui/Button'
import { toast } from '@/components/ui/Toast'

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = props => {
  const [isLoading, setIsLoading] = useState(false)

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      await signIn('google')
    } catch (err) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later',
        type: 'error'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  )
}

export default SignInButton
