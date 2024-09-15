import React from 'react';
import BlogContain from './BlogContain';
import serviceimage from '../assets/images/service1.jpg';
import serviceimagetwo from '../assets/images/service2.jpg';
import serviceimagethree from '../assets/images/service3.jpg';


const BlogSection = () => {
  return (
    <div className="aboutSec otcproductSec">
        <div className="container">
            <div className="indexhding">
                <h2>Blog</h2>
                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <div className="row mt-5">
              <BlogContain serviceimageSet={serviceimage} title="Blog heading one" description="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>
              <BlogContain serviceimageSet={serviceimagetwo} title="Blog heading two" description="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>
              <BlogContain serviceimageSet={serviceimagethree} title="Blog heading three" description="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>
            </div>
        </div>
    </div>
  );
};

export default BlogSection;
