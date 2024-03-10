import { ReactNode, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useSetRecoilState } from 'recoil'

import { auth } from '@remote/firebase'
import { userAtom } from '@store/atom/user'

export default function AuthGuard({ children }: { children: ReactNode }) {
  const [initialize, setInitialize] = useState(false)
  const setUser = useSetRecoilState(userAtom)

  onAuthStateChanged(auth, user => {
    if (user == null) {
      setUser(null)
    } else {
      setUser({
        uid: user.uid,
        email: user.email ?? '',
        displayName: user.displayName ?? '',
        photoURL: user.photoURL ?? '',
      })
    }

    setInitialize(true)
  })

  if (initialize === false) {
    return null
  }

  return <>{children}</>
}
