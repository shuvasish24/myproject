import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import service1 from '../assets/images/service1.jpg'
import service2 from '../assets/images/service2.jpg'
import service3 from '../assets/images/service3.jpg'

const OtcServiceSection = () => {
  const products = [
    {
      id: 1,
      image: service1,
      title: 'Service One',
      subtitle: 'It is a long established fact that a reader will be distracted.',
      description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      link: '#url',
    },
    {
      id: 2,
      image: service2,
      title: 'Service Two',
      subtitle: 'It is a long established fact that a reader will be distracted.',
      description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      link: '#url',
    },
    {
      id: 3,
      image: service3,
      title: 'Service Three',
      subtitle: 'It is a long established fact that a reader will be distracted.',
      description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      link: '#url',
    },
  ];

  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="otcproductSec">
      <div className="container">
        <div
          className="indexhding wow fadeInDown animated"
          style={{ visibility: 'visible', animationName: 'fadeInDown' }}
        >
          <h2>Services</h2>
          <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
          </p>
        </div>
        <div
          className="otcproductsldr wow fadeInUp animated"
          style={{ visibility: 'visible', animationName: 'fadeInUp' }}
        >
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {products.map((product) => (
              <div className="item" key={product.id}>
                <div className="otcproduct">
                  <div className="otcproductimg">
                    <a href={product.link}>
                      <img src={product.image} alt={product.title} />
                    </a>
                  </div>
                  <div className="otcproductcon">
                    <h3>
                      <a href={product.link}>{product.title}</a>
                    </h3>
                    <em>{product.subtitle}</em>
                    <p>{product.description}</p>
                    <a href={product.link} className="productarw">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default OtcServiceSection;
