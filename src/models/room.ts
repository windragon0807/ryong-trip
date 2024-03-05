export interface Room {
  avaliableCount: number
  basicInfo: {
    bed: string
    maxOccupancy: number
    smoke?: string
    squareMeters: string
  }
  imageUrl: string
  price: number
  refundable: boolean
  roomName: string
}
