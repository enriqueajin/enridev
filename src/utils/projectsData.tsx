type Project = {
  title: string,
  imageUrl: string,
  siteUrl?: string,
  sourceCodeUrl: string,
  type: string
}

export const projectsData: Project[] = [
  // Web projects
  {
    title: 'Fylo',
    imageUrl: '../../fylo.png',
    siteUrl: 'https://enriqueajin.github.io/FyloLayout/index.html',
    sourceCodeUrl: 'https://github.com/enriqueajin/FyloLayout',
    type: 'Web'
  },
  {
    title: 'Platzi Video',
    imageUrl: '../../platzi-video.png',
    siteUrl: 'https://enriqueajin.github.io/PlatziVideoLayout/index.html',
    sourceCodeUrl: 'https://github.com/enriqueajin/PlatziVideoLayout',
    type: 'Web'
  },
  {
    title: 'Batatabit',
    imageUrl: '../../batatabit.png',
    siteUrl: 'https://enriqueajin.github.io/MobileFirstProject/index.html',
    sourceCodeUrl: 'https://github.com/enriqueajin/MobileFirstProject',
    type: 'Web'
  },
  {
    title: 'Movies',
    imageUrl: '../../movies.png',
    siteUrl: 'https://enriqueajin.github.io/MoviesLayout/index.html',
    sourceCodeUrl: 'https://github.com/enriqueajin/MoviesLayout',
    type: 'Web'
  },
  // Mobile projects
  {
    title: 'PomodoroApp',
    imageUrl: '/pomidorki-app.png',
    // siteUrl: 'https://enriqueajin.github.io/FyloLayout/index.html',
    sourceCodeUrl: 'https://github.com/enriqueajin/Pomodorki',
    type: 'Mobile'
  },
  {
    title: 'NewsApp',
    imageUrl: '/news-app.png',
    // siteUrl: 'https://enriqueajin.github.io/PlatziVideoLayout/index.html',
    sourceCodeUrl: 'https://github.com/enriqueajin/NewsApp',
    type: 'Mobile'
  },
  {
    title: 'Farmacia Gaby',
    imageUrl: '/farmacia-gaby-app.png',
    // siteUrl: 'https://enriqueajin.github.io/MobileFirstProject/index.html',
    sourceCodeUrl: 'https://github.com/enriqueajin/FarmaciaGabyApp',
    type: 'Mobile'
  },
  {
    title: 'Wedding Invitation',
    imageUrl: '/wedding-app.png',
    siteUrl: 'https://enriqueajin.github.io/boda-civil/',
    sourceCodeUrl: 'https://github.com/enriqueajin/Wedding-Invitation',
    type: 'Mobile'
  },
]