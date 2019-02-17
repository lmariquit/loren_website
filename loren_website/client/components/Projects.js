import React from 'react'
import SingleProject from './SingleProject'

//add new projects in the below array
const projectsArr = [
  {
    name: 'identifi',
    image: 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
    description:
      'An image recognition and local search mobile application that retreives the Yelp information of a storefront by simply taking a picture of it'
  },
  {
    name: 'FluffTrainer',
    image: 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
    description:
      'Are filler words ruining your presentations? FluffTrainer is your first step to eliminating those meaningless words and phrases from your vocabulary.'
  },
  {
    name: 'CodingBooks',
    image: 'https://www.freeiconspng.com/uploads/no-image-icon-6.png',
    description: 'An E-Commerce website with various books for programers.'
  }
]

const Projects = () => {
  let keyIndex = 0
  return (
    <div id="proj-container">
      {projectsArr.map(project => (
        <SingleProject
          key={keyIndex++}
          title={project.name}
          image={project.image}
          description={project.description}
        />
      ))}
    </div>
  )
}

export default Projects
