import React from 'react'
import './RealVisualization.css'
import image18 from '../Assets/image18.jpg'

const RealVisualization = () => {
  return (
    <>
    <div className="visual">
    <div className="visual_round"></div>
      <div className="visual_left">
        <div className="container">
            <div className="row">
                <div className='row-lg-6 col-md-6 col-sm-12'>
                    <div className="visual_image">
                        <img src={image18} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="visual_right">
            <div className="container">
                <div className="row">
                    <div className='row-lg-6 col-md-6 col-sm-12'>
                        <div className="visual_content">
                            <h3>Real Time Visualization</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nesciunt! Explicabo, eveniet? Corporis molestias deserunt necessitatibus corrupti! Numquam, adipisci iure cum, tempora error, minima quo id alias voluptatum vero dolorum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="visual_box">
            
        </div>
    </div>
    </>
  )
}

export default RealVisualization