import React from 'react'
// import serviceimage from '../assets/images/service1.jpg';
// import serviceimagetwo from '../assets/images/service2.jpg';
// import serviceimagethree from '../assets/images/service3.jpg';


const BlogContain = (props) => {
  return (
    <div className='col-lg-4'>
        <div className="blog_con text-center">
            <img src={props.serviceimageSet} alt="service" />
            <h2 className='mt-4'>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default BlogContain
