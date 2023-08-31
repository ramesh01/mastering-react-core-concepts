import React from 'react'
import { chaptersList } from '../util/constants';

const Sidebar = () => {
  return (
    <div>
        <ul className='sidebar'>
            {chaptersList.map((el,index) => (
                <li className='sidebar-item' key={index}>{index+1}. {el.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar;