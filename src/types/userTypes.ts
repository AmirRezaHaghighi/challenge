export interface PaginationDTO<T> {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: T[]
}

export interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  avatar: string
}
export interface userDetail {
  data: {
    id: string
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
}

export interface UserInfo {
  email: string
  password: string
}
