/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_KEY: string
    REACT_APP_AUTH_DOMAIN: string
    REACT_APP_PROJECT_ID: string
    REACT_APP_STORAGE_BUCKET: string
    REACT_APP_MESSAGING_SENDER_ID: string
    REACT_APP_APP_ID: string
    REACT_APP_MESUREMENT_ID: string
    REACT_APP_GOOGLE_MAP_API: string
    REACT_APP_KAKAO_API_KEY: string
  }
}
