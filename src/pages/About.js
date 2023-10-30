import React from 'react'
import Home from '../components/Home'

const About = () => {
  return (
    <Home>
      <div className="pl-20 pt-20 flex flex-col text-white ">
        <div className="flex items-center gap-5 mx-10">
            <section className='w-1/2 space-y-10'>
                <h1 className='text-5xl text-yellow-500 font-semibold'>
                    afforadable and quality education
                </h1>
                <p className='text-xl text-gray-500'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore reiciendis adipi
                </p>

            </section>
            <div className="w-1/2 ">
                <img className='drop-shadow-2xl' src={"https://www.aihr.com/wp-content/uploads/Learning-and-development.png"} alt="about us img" srcset="" />
            </div>
        </div>
        {/* <div className="carousel m-auto w-1/2 my-16"> */}
       <div className="carousel w-1/2 my-16 m-auto">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={"https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/invest%20-education.jpg" }className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={"https://www.skillstork.org/blog/wp-content/uploads/2022/07/Skillstork-1568x882.jpg"} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={"https://www.thebalancemoney.com/thmb/cfLSIpcpwiluW-kJDTu16bXNhjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/school-books-on-desk--education-concept-871454068-5b548900c9e77c005b04fc8c.jpg"} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>

        </div>
      {/* </div> */}
    </Home>
  )
}

export default About
