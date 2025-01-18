  import React, { useEffect } from 'react'
  import './CSS/Contact.css'
  import Hero from '../Components/Hero/Hero'
  import "aos/dist/aos.css";
  import AOS from "aos";


  const Contact = () => {
    
    useEffect(()=>{
      AOS.init({
        duration:100,
        once: true,
      })
    }, [])

    return (
      <>
      <Hero/>
  <section className='mailing'>
      <div className='backdesign'>
      </div>
    <div className='container'>
      <div className='row'>
      <div className='col-lg-6 col-md-6 col-sm-12'>
        
          <div className='contectimg'>
            <img src="https://images.unsplash.com/photo-1634500956474-9ebdb17e579d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>

        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
        <div className='contactus'>
          <div className='container'>
            <div className='us'>
              <h2>Contact Us</h2>
            </div>
          <form>
    <div class="row mb-3 mt-4">
      
      <div class="col-sm-10">
        <input type="text"  placeholder='Enter Your Name'/>
      </div>
      <div className='break'></div>
    </div>
    <div class="row mb-3 mt-4">
      <div class="col-sm-10">
        <input type="email"  placeholder='Enter Your Vaild Email '/>
      </div>
      <div className='break'></div>
    </div>  
    <div class="row mb-3 mt-4">
      <div class="col-sm-10">
        <input type="textarea"  placeholder='Enter Your Massage'/>
      </div>
      <div className='break'></div>
    </div>  
    
    <div class="row mb-3 mt-2">
      <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>   
    </div>        
  </form>
          </div>
          </div>
        </div>      
      </div>
    </div>
    </section>
        
    {/*--------------- section2 starts from here-------------- */}

<section className="map_section py-5" style={{ backgroundColor: "#f9f9f9" }}>
  <div className="container">
    <h2
      className="text-center mb-4"
      style={{ fontWeight: "bold", color: "#333" }}
      data-aos="fade-up"
    >
      Reach Out to Us
    </h2>
    <div className="row align-items-center">
      <div
        className="col-lg-5 col-md-6 col-sm-12 mb-4 mb-md-0"
        data-aos="fade-right"
      >
        <div
          className="address p-4"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <h4 style={{ fontWeight: "600", marginBottom: "20px", color: "#555" }}>
            Contact Information
          </h4>
          <p style={{ fontSize: "16px", marginBottom: "10px" }}>
            📍 <strong>Address:</strong> Chittorgarh, Rajasthan
          </p>
          <p style={{ fontSize: "16px", marginBottom: "10px" }}>
            📞 <strong>Phone:</strong> +91 1234567890
          </p>
          <p style={{ fontSize: "16px", marginBottom: "10px" }}>
            ✉️ <strong>Email:</strong> info@yourbusiness.com
          </p>
          <p style={{ fontSize: "16px" }}>
            ⏰ <strong>Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>

      <div className="col-lg-7 col-md-6 col-sm-12" data-aos="fade-left">
        <div
          className="map"
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.630187504748!2d74.58177!3d24.8829899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968a0424d11a8d9%3A0x79f097c869345f8d!2sChittorgarh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1692137145621!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen
            title="Google Map of Chittorgarh"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
    )
  }

  export default Contact