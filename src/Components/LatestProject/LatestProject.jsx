import React from 'react'
import './LatestProject.css'
import image17 from '../Assets/image17.jpeg'
import image12 from '../Assets/image12.jpeg'
import image8 from '../Assets/image8.webp'
import image10 from '../Assets/image10.jpeg'
// import image11 from '../Assets/image11.jpeg'

const LatestProject = () => {
  return (
    <>
        <section>
            <h1>Latest Project</h1>
            <div className="latest_project">
                <div className="latest_project_content">
                  <div className="container p-40">
                    <div className="row">
                        <div className='col-lg-5 col-md-7 col-sm-12'>
                          <div className='smallimg1'>
                            <img src={image10} alt="" />
                          </div>
                          <div className='bigimg1'>
                              <img src={image8} alt="" />
                            </div>
                        </div>

                        <div className='col-lg-5 col-md-7 col-sm-12'>
                         
                          <div className='bigimg1'>
                              <img src={image8} alt="" />
                            </div>

                            <div className='smallimg1'>
                            <img src={image10} alt="" />
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default LatestProject