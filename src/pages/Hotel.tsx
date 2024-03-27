import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import Top from '@shared/Top'
import useHotel from '@components/hotel/hooks/useHotel'
import Carousel from '@components/hotel/Carousel'
import ActionButtons from '@components/hotel/ActionButtons'
import Rooms from '@components/hotel/Rooms'
import Contents from '@components/hotel/Contents'
import Map from '@components/hotel/Map'
import RecommendHotels from '@components/hotel/RecommendHotels'
import Review from '@components/hotel/Review'
import ScrollProgressBar from '@shared/ScrollProgressBar'
import SEO from '@shared/SEO'

export default function HotelPage() {
  const { id } = useParams() as { id: string }

  const { isLoading, data } = useHotel({ id })

  if (data == null || isLoading) {
    return <div>Loading...</div>
  }

  const { name, comment, images, contents, location, recommendHotels } = data

  return (
    <Container>
      <SEO title={name} description={comment} image={images[0]} />
      <ScrollProgressBar style={scrollProgressBarStyles} />
      <Top title={name} subTitle={comment} />
      <Carousel images={images} />
      <ActionButtons hotel={data} />
      <Rooms hotelId={id} />
      <Contents contents={contents} />
      <Map location={location} />
      <RecommendHotels recommendHotels={recommendHotels} />
      <Review hotelId={id} />
    </Container>
  )
}

const Container = styled.section`
  padding-bottom: 20px;
`

const scrollProgressBarStyles = css`
  position: sticky;
  top: 64px;
  z-index: 2;
`
