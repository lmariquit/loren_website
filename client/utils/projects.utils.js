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
      id: 0,
      title: 'SEE VIDEO',
      link: 'https://www.youtube.com/watch?v=rd0a3vgH-dk'
    },
    {
      id: 1,
      title: 'SEE GITHUB',
      link: 'https://github.com/clubjubjub'
    }
  ],
  component: {
    title: 'VIEW PROJECT',
    link: '/identifi'
  },
  techScreen: 'identifi_techstack.png',
  screenshots: [],
  details: {
    objective:
      'This project served as our final capstone project for Fullstack Academy. Our final Capstone project was meant to deepen our learning of the material we’ve studied throughout our time at Fullstack Academy. We would learn to work as a small, three-man team in a longer time frame than our e-commerce website project: a span of about 2.5 weeks. We were also encouraged to explore new technologies to get us to solve difficult problems that may or may not have an obvious solution.',
    inspiration: {
      a:
        'My team wanted to create something with a bit of a startup-y vibe. We wanted to create something that would be useful to consumers. We also wanted to explore a technology outside of the stack that we’ve learned in our bootcamp.',
      b:
        'To gain inspiration, my team and I spent time walking around the Financial District area of New York City, thinking of ideas that would make our everyday lives as New Yorker’s easier. Come lunch time, we began looking for a place to eat. We wanted to try something new that none of us have tried, but with so many restaurants and so little information about them on hand, we found it difficult to come to a decision.',
      c:
        'What helped us was looking each restaurant up on Yelp. While it was helpful, it was not the most seamless experience. Finding the restaurant in question required us to type the name into the application and select the correct store from a list of results. Doing this for the numerous restaurants we walked by was very time-consuming and unreliable. So the question from there was how do we create something that was (1) less time consuming and (2) more accurate / reliable.',
      d:
        'With today’s technology, there is no reason why we as consumers should have anything less than a seamless user experience. Our idea was to have the information of a particular restaurant or storefront available to you by simply taking a picture of it. An application like this would simplify the every-day question that plagues everyone in the country: “what should I eat today.”'
    },
    howitworks: {
      a:
        'Upon the initial loading of identifi, we capture your current geolocation and pass the coordinates off to the Yelp Business Search API to generate the Apple Map and places screen with 40 of the closest businesses to your relevant location.',
      b:
        'Upon taking a picture of a storefront, the program will perform text and logo detection with the Google Cloud Vision API and compare these results with your nearby places (generated earlier with the Yelp Business API) to render you the most accurate match possible.',
      c:
        'Deployed on Heroku, Identifi’s server-side architecture incorporates Node.js and an Express server to handle our API endpoints. We use Postgres along with Sequelize to manipulate and persist all the necessary information to power our application.',
      d:
        'Our client side architecture is built on React-Native and Expo. We use Redux to handle the state management of our application. To store our user generated content, static, and dynamic assets, we leverage the use of an S3 Bucket on Amazon Web Services.'
    },
    takeaways: {
      a:
        'The main thing I learned from creating this projects was to not be intimidated by new technologies. My team and I decided to create a mobile application with no prior training in creating creating mobile applications. We were able to learn how to use React Native very quickly	as it was very similar to React, a technology which we all were very familiar with.',
      b:
        'We were able to learn how to utilize the 3rd party API’s very quickly as well. The Yelp Business Search API was easy to pick up, though the Google Vision API was not as straight forward. We did run into issues with the Google Vision API logo detection, specifically getting the image to parse correctly and render us a valid response, though we would eventually work these issues out, even adding text detection to further improve the accuracy of our result.',
      c:
        'Lastly, a big take-away I got was that the camaraderie between teammates is a very important aspect to the success of the project. Throughout our journey, the three of us remained very open to each other’s ideas. If there was a disagreement, we talked it out, and never held any bad feelings towards one another about it. We worked very well together and all contributed in our own way to make our project the way we envisioned. There is no place for ego when trying to work collaboratively on a software development team. I sincerely hope to have a similar relationship with any future teammates of mine on future collaborative projects I have the opportunity to work on.'
    }
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
      id: 0,
      title: 'VISIT WEBSITE',
      link: 'https://flufftrainer.herokuapp.com/'
    },
    {
      id: 1,
      title: 'SEE VIDEO',
      link: 'https://www.youtube.com/watch?v=4AzsF48Uu6E'
    },
    {
      id: 2,
      title: 'SEE GITHUB',
      link: 'https://github.com/lmariquit/fluffTrainer'
    }
  ],
  component: {
    title: 'VIEW PROJECT',
    link: '/FluffTrainer'
  },
  screenshots: [],
  details: {
    objective:
      'This project was created during Fullstack Academy’s version of a hack-a-thon (dubbed Stack-a-thon). Every individual were to build an application in a short and strict time limit: a span of 4 days, and present their application to the entire cohort. We were tasked to explore a new technology outside of the stack that we were trained in and to build something that would be useful or feel is interesting.',
    inspiration: {
      a:
        'Immediately, I knew I wanted to build something that would be useful for people and help better themselves in some way. Viewing past Stack-a-thon videos for inspiration, I noticed that many of the presenters stumbling through their words as they presented their applications. They would use words such as “like,” or “so,” very often, and though their applications were great, some of the amazing factor was lost because of a not-so-well-executed presentation.',
      b:
        'I also realized that I myself am not excluded from this issue. When I need time to think in the middle of a sentence, I revert to words I know, like “uhh,” “I mean,” etc. This was an area I personally wanted to improve upon, as the best presentations are presented with confidence, and confidence is more evident when fluff words are not used.'
    },
    howitworks: {
      a:
        'Once you hit the start button, a timer will begin which is run by managing React’s state locally. Using the Web Speech API built into Javascript, the application will begin listening and recording audio through the computer’s microphone. At seven second intervals, the application will take the results and store the entire phrase into a Postgres database if any trigger words were recorded (the trigger words being “like”, “you know”, and “I mean”). The phrase will also be displayed below on the same page. If there was a phrase where a trigger word was not meant to be used as a filler word, you can remove it from the database simply by hitting the close button to the left of the phrase.',
      b:
        'User’s will also be able to view past logs of previous recordings. As the recordings are stored in Postgres databases. Redux is used to add, get, and remove logs for specific users.'
    },
    takeaways: {
      a:
        'The main thing I learned from completing this project was the importance of prior planning. Because of the short time limit we were given, I initially felt that I had to jump straight into the coding portion of the project. I found very quickly that completing programs this way was not ideal, as I found myself writing code then completely refactoring it later on. The resulting code was also not as cleanly written as I would have preferred, something that prior planning would have helped avoid.',
      b:
        'I also found that the web speech API, though very powerful, was not perfect. If it fails to hear any audio for a certain amount of time, it would just stop listening all together, a known problem throughout the community. My work around was to stop and restart the web speech API every seven seconds using set intervals. Though this does solve the issue of the web speech API shutting down automatically, it creates some gaps where audio is not recorded. This is an issue I will have to consider if using the web speech API in future projects.'
    }
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
      id: 0,
      title: 'VISIT WEBSITE',
      link: 'https://codingbooks.herokuapp.com/'
    },
    {
      id: 2,
      title: 'SEE GITHUB',
      link: 'https://github.com/spoontales/graceshopper'
    }
  ],
  component: {
    title: 'VIEW PROJECT',
    link: '/CodingBooks'
  },
  screenshots: [],
  details: {
    objective:
      'Build a deployed production site where users can brows a list of products, add them to a cart, check them out, and make a payment with a credit card using Stripe. User’s should be able to do this logged-in or as guests. This is to be completed in a four man group within 1.5 weeks. Learn how to collaborate on a project and how to use Git and GitHub. Take part in stand up’s every morning.',
    howitworks: {
      a:
        'Entering our website, users will be presented with a home screen, displaying a featured product, one that was selected at random from the selection of books stored in our Postgres database.',
      b:
        'User’s can view our entire product selection by selecting ‘Product List’ from the navigation bar up top. Using React on the front end and redux to manage state, the application will make a get request to our Postgres database to fetch all available products and display them to the users.',
      c:
        'User’s may add any product to their cart, either as a logged-in user or a guest. As a guest, the cart will be stored locally on their machine, though stored items will be moved into a user cart in the Postgres database upon login. Payments for products in the cart may be completed with the Stripe API.'
    },
    takeaways: {
      a:
        'There are many part of building an e-commerce website that make this a great project for all up-in-coming programmers. Aside from focusing on building a more complex CRUD application, we get to focus on authentication, carts, payments, and maybe more importantly, collaboration using the Version Control System Git.',
      b:
        'This was my first experience using Git and GitHub to work collaboratively on the same project with multiple engineers. Git was very intimidating at first. Getting familiar with commands is simple enough, but the fear of making a mistake and effecting the other programmers on the team was not easy to overcome. Fortunately, as I became more familiar with Git, and with the help of my fellow teammates of course, I would learn that making errors with Git and GitHub was not easy to do, and any mistakes made were for the most part easy to reverse. It all comes with just sitting down and using the VSC and getting familiar with the technology and recognizing the benefits it provides. After using Git to complete this project, I don’t know how it would have been possible to complete this project collaboratively without it.'
    }
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
