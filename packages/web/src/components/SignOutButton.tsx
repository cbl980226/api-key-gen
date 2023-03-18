'use client'

import { FC, useState } from 'react'
import { signOut } from 'next-auth/react'
import Button from '@/components/ui/Button'
import { toast } from '@/components/ui/Toast'

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = props => {
  const [isLoading, setIsLoading] = useState(false)

  const signUserOut = async () => {
    setIsLoading(true)

    try {
      await signOut()
    } catch (err) {
      toast({
        title: 'Error signing out',
        message: 'Please try again later',
        type: 'error'
      })
    }
  }

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  )
}

export default SignOutButton
