import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div id='container'>
        <div id='image' className='dis'>
            <h4><img id="img" src={props.image} alt='image'/></h4>
        </div>
        <div id='content' className='dis'>
            <center><h4 id='partner'>{props.content}
                </h4></center>

                <div id='info'>
                  <div><h5>-{props.author}</h5></div>
                  <div><h5>{props.date}</h5></div>
                  
                </div>
        </div>
    </div>
  )
}
