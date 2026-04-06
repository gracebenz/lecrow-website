export type Project = {
  slug: string
  title: string
  studio: string
  role: string
  director: string
  year: number
  type: string
  oscarNominated?: boolean
  oscarWon?: boolean
}

export const projects: Project[] = [
  {
    slug: "wicked",
    title: "Wicked",
    studio: "Universal Pictures",
    role: "Production Designer",
    director: "Jon M. Chu",
    year: 2024,
    type: "Feature Film",
    oscarNominated: true,
    oscarWon: true,
  },
  {
    slug: "first-man",
    title: "First Man",
    studio: "Universal Pictures",
    role: "Production Designer",
    director: "Damien Chazelle",
    year: 2018,
    type: "Feature Film",
    oscarNominated: true,
  },
  {
    slug: "dunkirk",
    title: "Dunkirk",
    studio: "Warner Bros.",
    role: "Production Designer",
    director: "Christopher Nolan",
    year: 2017,
    type: "Feature Film",
    oscarNominated: true,
  },
  {
    slug: "interstellar",
    title: "Interstellar",
    studio: "Paramount Pictures",
    role: "Production Designer",
    director: "Christopher Nolan",
    year: 2014,
    type: "Feature Film",
    oscarNominated: true,
  },
  {
    slug: "the-dark-knight",
    title: "The Dark Knight",
    studio: "Warner Bros.",
    role: "Production Designer",
    director: "Christopher Nolan",
    year: 2008,
    type: "Feature Film",
    oscarNominated: true,
  },
  {
    slug: "the-prestige",
    title: "The Prestige",
    studio: "Warner Bros.",
    role: "Production Designer",
    director: "Christopher Nolan",
    year: 2006,
    type: "Feature Film",
    oscarNominated: true,
  },
  {
    slug: "batman-begins",
    title: "Batman Begins",
    studio: "Warner Bros.",
    role: "Production Designer",
    director: "Christopher Nolan",
    year: 2005,
    type: "Feature Film",
  },
  {
    slug: "wonka",
    title: "Wonka",
    studio: "Warner Bros.",
    role: "Production Designer",
    director: "Paul King",
    year: 2023,
    type: "Feature Film",
  },
  {
    slug: "tenet",
    title: "Tenet",
    studio: "Warner Bros.",
    role: "Production Designer",
    director: "Christopher Nolan",
    year: 2020,
    type: "Feature Film",
    oscarNominated: true,
  },
]
