import React from 'react';
import './CSS/About.css';
import photo1 from '../Components/Assets/photo1.avif'
import photo2 from '../Components/Assets/photo2.avif'
import photo3 from '../Components/Assets/photo3.jpeg'
// import photo4 from '../Components/Assets/photo4.jpeg'
import photo5 from '../Components/Assets/photo5.jpeg'
// import photo6 from '../Components/Assets/photo6.jpg'
import AboutHero from './AboutHero';



const About = ( ) => {
  return (
    <>
  <AboutHero/>
      <section>
        <div className='createback2'>
          <div className='container'>
            <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='weroom'>
              <h1>We create rooms for living and working and favorite places for you to “be”</h1>
              <p>At our core, we believe that the spaces where we live and work should be more than just functional—they should be places that inspire, comfort, and elevate the everyday experience. We create rooms for living and working, carefully designed to suit your needs and reflect your personal style. Whether it's a cozy living room that invites relaxation or a dynamic office space that fuels creativity, each room becomes a backdrop for your life.</p>
            </div>
          </div>
         
          <div className='col-lg-6 col-md-6 col-sm-12'>
            
            <div className='roomimg'>
              <img src={photo1} alt="" />
              
            </div>
          </div>
          
            </div>
          </div>
        </div>
      </section>


  <section className="section2">
  <div className="container">
    <div className="row">

     
      <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="imageup">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" 
            className="img-fluid" 
            data-aos="fade-up" 
            data-aos-duration="1500" />
          <div className="ourprocess">
            <h1>Our Design Process</h1>
            <p>Our furnishing design process focuses on blending functionality with aesthetic appeal to create spaces that are both beautiful and practical. We begin by understanding the client’s needs, preferences, and the space’s unique characteristics. From there, we curate a selection of materials, colors, and styles that align with the vision. Each piece is thoughtfully chosen or custom-designed to enhance the overall ambiance while ensuring comfort and durability. The result is a harmonious environment where form and function seamlessly coexist.</p>
          </div>
        </div>
      </div>

      
      <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div className="designright">
          <div className="Innovative">
            <h1>Innovative Furniture Solutions</h1>
            <p>Our approach to furniture design is centered around creating pieces that enhance both comfort and functionality. We focus on smart, space-saving solutions without compromising on style, ensuring every item is thoughtfully designed to meet the needs of modern living. Whether it's a multi-purpose sofa or a storage-savvy coffee table, each piece is crafted to bring ease, elegance, and practicality into your space.</p>
            
          </div>
          <div className="imagedown">
            <img 
              src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="" 
              className="img-fluid" 
              data-aos="fade-up" 
              data-aos-duration="1500" />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className='createback'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12'>
        <div className='whiteback'>
          <div className='wewentimg'>
            <img src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className='wewentyou'>
            <h1>We want you to love being at home!</h1>
            <p>"Our furniture is designed with both style and comfort in mind. From plush sofas to elegant chairs, each piece is made to enhance the warmth of your home. We carefully select textures and fabrics that invite relaxation and elevate the atmosphere—soft, durable, and perfect for creating a space you'll never want to leave."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





<section className='section4'>
<div className='container'>
<div className='row'>
  <div className='col-lg-4 col-md-8 col-sm-12 '>
    <div className='founderwords'>
     <img className="quote" src={photo5} alt=""  />
     <h1>
     Together, we cover a comprehensive design spectrum and have a wide range of competences.</h1>
    </div>
  </div>
  <div className='col-lg-4 col-md-8 col-sm-12'>
    <div className='founderimg'>
   <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=" alt="" />

   <h1>Ravi Chandel</h1>
    <h3>Founder</h3>    
    </div>
    
  </div>

  <div className='col-lg-4 col-md-8 col-sm-12 '>
    <div className='founderimg'>
   <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/20b72dd9d347529c80882425/happy-man-with-long-thick-ginger-beard-has-friendly-smile_273609-16616.jpg?version=" alt="" />

   <h1>Ravi Chandel</h1>
    <h3>CO-Founder</h3>    
    </div>
    
  </div>
  
</div>
</div>



</section> 


    </>
  );
};

export default About;