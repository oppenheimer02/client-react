import React from 'react'

function About(props) {
  return (
    <div id='about'>
      
    <div className="about-image">
      <img src={props.image} alt=''/>
    </div>

    <div className="about-text">
      <h2> {props.h2} </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione doloribus eum totam minima labore aspernatur exercitationem ipsam, sequi quos, accusantium, esse omnis deserunt sunt fugit quae laboriosam commodi rerum. Vero fugiat quaerat maxime est ea facilis quasi consequuntur consequatur. Explicabo excepturi tenetur in nihil consequatur.

        </p>
        <button>{props.button } </button>
    </div>

    </div>
  )
}

export default About;
