// interfaces/Seccion.ts
export interface ListItem {
  texto: string
  sublista?: string[]
}

export interface Seccion {
  titulo: string
  contenido?: string[]
  lista?: string[]
  listanum?: (string | ListItem)[] // puede ser texto simple o con sublista
  listabc?: string[]
  contenido1?: string[]
}

