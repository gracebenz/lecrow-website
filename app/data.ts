export type Project = {
  slug: string
  title: string
  studio: string
  role: string
  director: string
  year: number
  type: string
  description: string
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
    description: "A world built from the ground up — Munchkinland constructed across 700 acres with nine million tulips grown in Norfolk, England. The Emerald City drew from the 1893 Chicago World's Fair and Daniel Burnham's architectural modernism. Winner of the Academy Award for Best Production Design.",
    oscarNominated: true,
    oscarWon: true,
  },
  {
    slug: "wonka",
    title: "Wonka",
    studio: "Warner Bros.",
    role: "Production Designer",
    director: "Paul King",
    year: 2023,
    type: "Feature Film",
    description: "A fantastical origin story demanding environments that felt simultaneously period and timeless — practical confectionery architectures built to exist as much in the imagination as on the street.",
  },
  {
    slug: "tenet",
    title: "Tenet",
    studio: "Warner Bros.",
    role: "Production Designer",
    director: "Christopher Nolan",
    year: 2020,
    type: "Feature Film",
    description: "A global espionage film whose environments had to function simultaneously forwards and in reverse. Sets designed to withstand bidirectional destruction, with entropy built into every surface.",
    oscarNominated: true,
  },
  {
    slug: "first-man",
    title: "First Man",
    studio: "Universal Pictures",
    role: "Production Designer",
    director: "Damien Chazelle",
    year: 2018,
    type: "Feature Film",
    description: "An intimate account of the Apollo program built on meticulous period research. The NASA facilities, lunar module interiors, and the lunar surface itself were constructed practically — the moon built in a studio, every bolt period-accurate.",
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
    description: "A film of radical compression — the beaches of Dunkirk reconstructed with period vessels, aircraft, and 6,000 costumed extras. Every physical element was real. Nothing was augmented.",
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
    description: "The furthest reaches of the cosmos rendered as physical environments. The tesseract — a five-dimensional library built as a practical set — remains one of the most complex constructions in contemporary cinema.",
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
    description: "Gotham recast as a real city — Chicago transformed through practical builds, detonated architecture, and environments designed to feel as if chaos had already begun before the camera rolled.",
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
    description: "Victorian London and the American West built in parallel — two worlds of illusion whose design language mirrored the film's structural duplicity. Period authenticity in service of deception.",
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
    description: "The origin of a collaboration. The Batcave was first prototyped in Crowley's own garage. What followed was a Gotham grounded in architectural reality — a city whose darkness was structural, not cosmetic.",
  },
]
