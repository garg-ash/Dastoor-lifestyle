import React from 'react'
import './CSS/Ourproject.css';
import { category } from '../Utils/imageData';
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";


function OurProjects() {

  const categoryImages = category

  const navigate = useNavigate()

  const handleImageClick = (category) => {
    navigate(`/products/${category}`); // Navigate to the product page
  };


  
  return (
   <>
  <section className='sectionour1'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-md-8 col-sm-12'>
          <div className='wedesign '>
            <h1>We design <span>"beautifully"</span> crafted, luxury interiors & furniture <span>...</span></h1>
          </div>
        </div>
        <div className='col-lg-4 col-md-8 col-sm-12'>
          <div className='ourweimg1  '>
            
            <img src="https://assets.nicepagecdn.com/d2cc3eaa/16689/images/minimalist-modern-vases-books-ar.jpg" alt="" />
          </div>

          <div className='ourweimg2'>
            <img src="https://assets.nicepagecdn.com/d2cc3eaa/16689/images/5646.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className='secionour2'>

    <div className='container'>
      <div className='row'>
      <div className='col-lg-6 col-md-6 col-sm-12'>
        <div className='ourview'>
  
     <img className="quote1" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQR9_ALMijHoqNM7MjUY2qfuW774Dr-SlJThayx1Ue4e1HM3Xkt" alt=""  />
     <h1>
     Our interior design concepts include suggestions for furniture, lighting, color, fabric and Door <span>...</span></h1>
    


        </div>
       
      </div>
      <div className='col-lg-6 col-md-6 col-sm-12'>
        <div className='sideimg'>
       <img src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
       
      </div>
      </div>
    </div>
  </section>


   

  <section className='section3 category' id='category-section'>
    <div className="container">
      <div className="row">
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className="project-category">
            <h2>Category</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dignissimos assumenda earum cum fugiat debitis deserunt aperiam deleniti distinctio dolorum. Quas itaque at similique ullam? Voluptate odio molestias veritatis accusamus.</p>
            <div className="category-grid">
              {categoryImages.map((image)=>(
                <div key={image.id} className='category-item' onClick={() => handleImageClick(image.category)} >
                  <img src={image.src} className='category-img' />
                  <h5>{image.alt}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
   
   
   </>
  )
}

export default OurProjects
