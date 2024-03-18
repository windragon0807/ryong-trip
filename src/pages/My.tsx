import useGoogleSignin from '@/hooks/useGoogleSignin'

export default function MyPage() {
  const { signout } = useGoogleSignin()
  return <div onClick={signout}>MyPage</div>
}
