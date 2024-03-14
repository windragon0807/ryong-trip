import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import useUser from '@hooks/auth/useUser'

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const user = useUser()

  if (user == null) {
    return <Navigate to="/signin" replace />
  }

  return <>{children}</>
}
