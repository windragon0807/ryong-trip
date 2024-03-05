import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

type Props = {
  images: string[]
}

export default function Carousel({ images }: Props) {
  return (
    <div>
      <Swiper css={containerStyles} spaceBetween={8} loop>
        {images.map((imageUrl, idx) => (
          <SwiperSlide key={imageUrl}>
            <img
              src={imageUrl}
              alt={`${idx + 1}번째 호텔의 이미지`}
              css={imageStyles}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const containerStyles = css`
  padding: 0 24px;
  height: 300px;
`

const imageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`
