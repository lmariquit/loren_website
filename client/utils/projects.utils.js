import {
  javascript,
  react,
  redux,
  html5,
  css,
  semanticUI,
  node,
  express,
  sequelize,
  postgreSQL,
  git,
  github,
  ajax,
  json,
  reactNative,
  webpack,
  googleVisionAPI,
  yelpBusinessAPI,
  appleMaps,
  webSpeechAPI,
  stripeAPI,
  s3Bucket
} from './skills.utils'

// INDIVIDUAL PROJECTS
export const identifi_project = {
  id: 0,
  name: 'identifi',
  image: 'identifi_phone.png',
  description:
    'An image recognition and local search mobile application that retreives the Yelp information of a storefront by simply taking a picture of it',
  mainTech: [reactNative, googleVisionAPI, yelpBusinessAPI, appleMaps],
  otherTech: [
    javascript,
    html5,
    node,
    express,
    sequelize,
    postgreSQL,
    ajax,
    json,
    s3Bucket
  ],
  color: {
    backgroundImage:
      'linear-gradient(to right, rgb(0, 174, 255), rgb(70, 196, 255)'
  },
  buttons: [
    {
      title: 'SEE PROJECT',
      link: 'https://www.youtube.com/watch?v=rd0a3vgH-dk'
    },
    {
      title: 'SEE GITHUB',
      link: 'https://github.com/clubjubjub'
    }
  ]
}

export const flufftrainer_project = {
  id: 1,
  name: 'FluffTrainer',
  image: 'flufftrainer_screenshot.png',
  description:
    'Are filler words ruining your presentations? FluffTrainer is your first step to eliminating those meaningless words and phrases from your vocabulary.',
  mainTech: [react, webSpeechAPI, postgreSQL, semanticUI],
  otherTech: [
    javascript,
    redux,
    html5,
    node,
    express,
    sequelize,
    git,
    github,
    ajax,
    json,
    webpack
  ],
  color: {
    backgroundImage:
      'linear-gradient(to right, rgb(42, 255, 95), rgb(42, 199, 55)'
  },
  buttons: [
    {
      title: 'VISIT WEBSITE',
      link: 'https://flufftrainer.herokuapp.com/'
    },
    {
      title: 'SEE PROJECT',
      link: 'https://www.youtube.com/watch?v=4AzsF48Uu6E'
    },
    {
      title: 'SEE GITHUB',
      link: 'https://github.com/lmariquit/fluffTrainer'
    }
  ]
}

export const codingbooks_project = {
  id: 2,
  name: 'CodingBooks',
  image: 'codingbooks_screenshot.png',
  description: 'An E-Commerce website with various books for programers.',
  mainTech: [react, redux, postgreSQL, stripeAPI],
  otherTech: [
    javascript,
    html5,
    semanticUI,
    node,
    express,
    sequelize,
    ajax,
    json,
    webpack
  ],
  color: {
    backgroundImage:
      'linear-gradient(to right, rgb(125, 42, 128), rgb(123, 42, 199)'
  },
  buttons: [
    {
      title: 'VISIT WEBSITE',
      link: 'https://codingbooks.herokuapp.com/'
    },
    {
      title: 'SEE GITHUB',
      link: 'https://github.com/spoontales/graceshopper'
    },
    {
      //testing component link here
      title: 'component',
      link: '/FluffTrainer'
    }
  ]
}

export const inprogress_project = {
  id: 3,
  name: '',
  image: '',
  description: '',
  tech: [],
  color: {},
  buttons: []
}

// ALL PROJECTS
export const projectsArr = [
  identifi_project,
  flufftrainer_project,
  codingbooks_project,
  inprogress_project
]
