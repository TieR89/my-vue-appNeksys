export interface Entity {
  id: number
  title: string
  description: string
  published: boolean
  published_from: string | null
}

export interface EntityCreate extends Omit<Entity, 'id'> {
  id: number
}

export interface EntityFilter {
  title?: string
}

export interface EntityState {
  entities: Entity[]
  loading: boolean
  error: string | null
}
