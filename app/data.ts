export type Project = {
  slug: string
  title: string
  client: string
  role: string
  director: string
  year: number
  type: string
  description: string
}

export const projects: Project[] = [
  {
    slug: "the-long-meridian",
    title: "The Long Meridian",
    client: "A24",
    role: "Production Designer",
    director: "Sofia Reyes",
    year: 2024,
    type: "Feature Film",
    description: "A sweeping period drama set across three continents, tracing the hidden corridors of post-war power.",
  },
  {
    slug: "night-geometry",
    title: "Night Geometry",
    client: "Netflix",
    role: "Production Designer",
    director: "Park Joon-ho",
    year: 2023,
    type: "Limited Series",
    description: "A six-part psychological thriller whose visual language mirrors the fractured interior of its protagonist.",
  },
  {
    slug: "pale-harbor",
    title: "Pale Harbor",
    client: "Focus Features",
    role: "Production Designer",
    director: "Claire Anouilh",
    year: 2023,
    type: "Feature Film",
    description: "An intimate portrait of grief and reconstruction, set against the desolate beauty of the Icelandic coast.",
  },
  {
    slug: "all-the-quiet-machines",
    title: "All the Quiet Machines",
    client: "Apple TV+",
    role: "Production Designer",
    director: "David Lowery",
    year: 2022,
    type: "Feature Film",
    description: "A science-fiction elegy examining memory and machine consciousness through rigorously controlled environments.",
  },
  {
    slug: "the-inheritance",
    title: "The Inheritance",
    client: "HBO",
    role: "Production Designer",
    director: "Amma Asante",
    year: 2022,
    type: "Limited Series",
    description: "A multi-generational family saga spanning 1940s Lagos to contemporary London.",
  },
  {
    slug: "fieldwork",
    title: "Fieldwork",
    client: "Mubi",
    role: "Production Designer",
    director: "Jonas Carpignano",
    year: 2021,
    type: "Feature Film",
    description: "Documentary-inflected narrative built entirely on location — no sets, no augmentation.",
  },
]
