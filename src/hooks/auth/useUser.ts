import { useRecoilValue } from 'recoil'
import { userAtom } from '@store/atom/user'

export default function useUser() {
  return useRecoilValue(userAtom)
}
