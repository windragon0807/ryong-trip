export type Hotel = {
  comment: string
  contents: string
  id: string
  images: string[]
  location: {
    directions: string
    pointGeolocation: {
      x: number
      y: number
    }
  }
  mainImageUrl: string
  name: string
  price: number
  starRating: number
  events?: {
    name: string
    promoEndTime?: string
    tagThemeStyle: {
      backgroundColor: string
      fontColor: string
    }
  }
  recommendHotels: string[]
  forms: ReservationForm[]
}

type BaseForm = {
  id: string
  label: string
  required: string
  helpMessage?: string
}

type TextFieldForm = BaseForm & {
  type: 'TEXT_FIELD'
}

type SelectFieldForm = BaseForm & {
  type: 'SELECT'
  options: Array<{ label: string; value: string }>
}

export type ReservationForm = TextFieldForm | SelectFieldForm
