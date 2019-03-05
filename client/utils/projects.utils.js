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
      'linear-gradient(to right, rgb(99, 204, 253), rgb(0, 174, 255)'
  },
  buttons: [
    {
      title: 'SEE VIDEO',
      link: 'https://www.youtube.com/watch?v=rd0a3vgH-dk'
    },
    {
      title: 'SEE GITHUB',
      link: 'https://github.com/clubjubjub'
    }
  ],
  component: {
    title: 'VIEW PROJECT',
    link: '/identifi'
  },
  details: {
    objective:
      'This project served as our final capstone project for Fullstack Academy. Our final Capstone project was meant to deepen our learning of the material we’ve studied throughout our time at Fullstack Academy. We would learn to work as a small, three-man team in a longer time frame than our e-commerce website project: a span of about 2.5 weeks. We were also encouraged to explore new technologies to get us to solve difficult problems that may or may not have an obvious solution.',
    inspiration_a:
      'My team wanted to create something with a bit of a startup-y vibe. We wanted to create something that would be useful to consumers. We also wanted to explore a technology outside of the stack that we’ve learned in our bootcamp.',
    inspiration_b:
      'To gain inspiration, my team and I spent time walking around the Financial District area of New York City, thinking of ideas that would make our everyday lives as New Yorker’s easier. Come lunch time, we began looking for a place to eat. We wanted to try something new that none of us have tried, but with so many restaurants and so little information about them on hand, we found it difficult to come to a decision.',
    inspiration_c:
      'What helped us was looking each restaurant up on Yelp. While it was helpful, it was not the most seamless experience. Finding the restaurant in question required us to type the name into the application and select the correct store from a list of results. Doing this for the numerous restaurants we walked by was very time-consuming and unreliable. So the question from there was how do we create something that was (1) less time consuming and (2) more accurate / reliable.',
    inspiration_d:
      'With today’s technology, there is no reason why we as consumers should have anything less than a seamless user experience. Our idea was to have the information of a particular restaurant or storefront available to you by simply taking a picture of it. An application like this would simplify the every-day question that plagues everyone in the country: “what should I eat today.”',
    howitworks_a:
      'Upon the initial loading of identifi, we capture your current geolocation and pass the coordinates off to the Yelp Business Search API to generate the Apple Map and places screen with 40 of the closest businesses to your relevant location.',
    howitworks_b:
      'Upon taking a picture of a storefront, the program will perform text and logo detection with the Google Cloud Vision API and compare these results with your nearby places (generated earlier with the Yelp Business API) to render you the most accurate match possible.',
    howitworks_c:
      'Deployed on Heroku, Identifi’s server-side architecture incorporates Node.js and an Express server to handle our API endpoints. We use Postgres along with Sequelize to manipulate and persist all the necessary information to power our application.',
    howitworks_d:
      'Our client side architecture is built on React-Native and Expo. We use Redux to handle the state management of our application. To store our user generated content, static, and dynamic assets, we leverage the use of an S3 Bucket on Amazon Web Services.',
    takeaways_a:
      'The main thing I learned from creating this projects was to not be intimidated by new technologies. My team and I decided to create a mobile application with no prior training in creating creating mobile applications. We were able to learn how to use React Native very quickly	as it was very similar to React, a technology which we all were very familiar with.',
    takeaways_b:
      'We were able to learn how to utilize the 3rd party API’s very quickly as well. The Yelp Business Search API was easy to pick up, though the Google Vision API was not as straight forward. We did run into issues with the Google Vision API logo detection, specifically getting the image to parse correctly and render us a valid response, though we would eventually work these issues out, even adding text detection to further improve the accuracy of our result.',
    takeaways_c:
      'Lastly, a big take-away I got was that the camaraderie between teammates is a very important aspect to the success of the project. Throughout our journey, the three of us remained very open to each other’s ideas. If there was a disagreement, we talked it out, and never held any bad feelings towards one another about it. We worked very well together and all contributed in our own way to make our project the way we envisioned. There is no place for ego when trying to work collaboratively on a software development team. I sincerely hope to have a similar relationship with any future teammates of mine on future collaborative projects I have the opportunity to work on.'
  }
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
  ],
  component: {
    title: 'VIEW PROJECT',
    link: '/FluffTrainer'
  },
  details: {
    objective:
      'This project served as our final capstone project for Fullstack Academy. Our final Capstone project was meant to deepen our learning of the material we’ve studied throughout our time at Fullstack Academy. We would learn to work as a small, three-man team in a longer time frame than our e-commerce website project: a span of about 2.5 weeks. We were also encouraged to explore new technologies to get us to solve difficult problems that may or may not have an obvious solution.',
    inspiration_a:
      'My team wanted to create something with a bit of a startup-y vibe. We wanted to create something that would be useful to consumers. We also wanted to explore a technology outside of the stack that we’ve learned in our bootcamp.',
    inspiration_b:
      'To gain inspiration, my team and I spent time walking around the Financial District area of New York City, thinking of ideas that would make our everyday lives as New Yorker’s easier. Come lunch time, we began looking for a place to eat. We wanted to try something new that none of us have tried, but with so many restaurants and so little information about them on hand, we found it difficult to come to a decision.',
    inspiration_c:
      'What helped us was looking each restaurant up on Yelp. While it was helpful, it was not the most seamless experience. Finding the restaurant in question required us to type the name into the application and select the correct store from a list of results. Doing this for the numerous restaurants we walked by was very time-consuming and unreliable. So the question from there was how do we create something that was (1) less time consuming and (2) more accurate / reliable.',
    inspiration_d:
      'With today’s technology, there is no reason why we as consumers should have anything less than a seamless user experience. Our idea was to have the information of a particular restaurant or storefront available to you by simply taking a picture of it. An application like this would simplify the every-day question that plagues everyone in the country: “what should I eat today.”',
    howitworks_a:
      'Upon the initial loading of identifi, we capture your current geolocation and pass the coordinates off to the Yelp Business Search API to generate the Apple Map and places screen with 40 of the closest businesses to your relevant location.',
    howitworks_b:
      'Upon taking a picture of a storefront, the program will perform text and logo detection with the Google Cloud Vision API and compare these results with your nearby places (generated earlier with the Yelp Business API) to render you the most accurate match possible.',
    howitworks_c:
      'Deployed on Heroku, Identifi’s server-side architecture incorporates Node.js and an Express server to handle our API endpoints. We use Postgres along with Sequelize to manipulate and persist all the necessary information to power our application.',
    howitworks_d:
      'Our client side architecture is built on React-Native and Expo. We use Redux to handle the state management of our application. To store our user generated content, static, and dynamic assets, we leverage the use of an S3 Bucket on Amazon Web Services.',
    takeaways_a:
      'The main thing I learned from creating this projects was to not be intimidated by new technologies. My team and I decided to create a mobile application with no prior training in creating creating mobile applications. We were able to learn how to use React Native very quickly	as it was very similar to React, a technology which we all were very familiar with.',
    takeaways_b:
      'We were able to learn how to utilize the 3rd party API’s very quickly as well. The Yelp Business Search API was easy to pick up, though the Google Vision API was not as straight forward. We did run into issues with the Google Vision API logo detection, specifically getting the image to parse correctly and render us a valid response, though we would eventually work these issues out, even adding text detection to further improve the accuracy of our result.',
    takeaways_c:
      'Lastly, a big take-away I got was that the camaraderie between teammates is a very important aspect to the success of the project. Throughout our journey, the three of us remained very open to each other’s ideas. If there was a disagreement, we talked it out, and never held any bad feelings towards one another about it. We worked very well together and all contributed in our own way to make our project the way we envisioned. There is no place for ego when trying to work collaboratively on a software development team. I sincerely hope to have a similar relationship with any future teammates of mine on future collaborative projects I have the opportunity to work on.'
  }
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
    }
  ],
  component: {
    title: 'VIEW PROJECT',
    link: '/CodingBooks'
  }
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
