import React from "react";
import { Carousel } from "react-responsive-carousel";
import './Slide.css'

export default () => (
  <Carousel autoPlay width='400px' className='ps'>
    <div>
      <img src="https://thestandard.co/wp-content/uploads/2017/07/Cat-Hotel_COVER.jpg" />
      
    </div>
    <div>
      <img src="https://en.mthai.com/app/uploads/2018/01/hqdefault-1.jpg" />
     
    </div>
    <div>
      <img src="https://lifestyle.campus-star.com/app/uploads/2018/08/cat-world.jpg" />
      
    </div>
    <div>
      <img src="https://sjferret.com/wp-content/uploads/Thinking-of-getting-a-cat.png" />
      
    </div>
    <div>
      <img src="https://f.ptcdn.info/026/064/000/prnalm4ezmg7I0VBngf-o.jpg" />
     
    </div>
    <div>
      <img src="https://mpics.mgronline.com/pics/Images/562000011970902.JPEG" />
     
    </div>

    
  </Carousel>
);
