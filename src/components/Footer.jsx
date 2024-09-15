import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const FTmenu = [
    {
        title:'Home',
        path: '/',
    },
    {
        title:'About',
        path: '/about',
    },
    {
      title:'Service',
      path: '#url',
  },
    {
      title:'Blog',
      path: '#url',
  },
    {
        title:'Contact',
        path: '/Contact',
    },

];
  return (
    <div className='footer'>
      <div className="footer_copy">

        <div className="ft_nav">
          <ul>
            {FTmenu.map((option, index)=>(
              <li key={index}><a href={option.path}>{option.title}</a></li>
            ))}
          </ul>
        </div>

        <p>copyright @ 2024 | shuvasish deb</p>
      </div>
    </div>
  )
}

export default Footer
