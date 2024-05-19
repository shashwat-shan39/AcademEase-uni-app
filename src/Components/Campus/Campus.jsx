import React from 'react'
import "./Campus.css"
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src={gallery_1} alt='1st_pic'></img>
            <img src={gallery_2} alt='2nd_pic'></img>
            <img src={gallery_3} alt='3rd_pic'></img>
            <img src={gallery_4} alt='4th_pic'></img>
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt='arrow_icon'></img></button>
    </div>
  )
}

export default Campus