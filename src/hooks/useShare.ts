import { useCallback } from 'react'

type ShareProps = {
  title: string
  description: string
  imageUrl: string
  buttonLabel: string
}

export default function useShare() {
  const handleShare = useCallback(
    ({ title, description, imageUrl, buttonLabel }: ShareProps) => {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description,
          imageUrl,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: buttonLabel,
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    },
    [],
  )

  return handleShare
}
