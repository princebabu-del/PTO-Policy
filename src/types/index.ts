/** Shared domain types live here. Feature-local types belong next to the feature. */

export type Id = string

export interface Paginated<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
}
