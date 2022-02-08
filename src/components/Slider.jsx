import React, {useState} from 'react';
import '../style/projects.css'
import { SliderInfo } from './SliderInfo';
import { FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current  - 1)
    }

    console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
  return <section className='slider'>
      <FaArrowCircleLeft className='arrow-left' onClick={prevSlide} />
      <FaArrowCircleRight className='arrow-right' onClick={nextSlide}/>
      {
      SliderInfo.map((slide, index) => {
        return (
            <div
            className={index === current ? 'test active' : 'test'}
            key={index}
            >
                {
                    index === current && (

<div className="slide-container">
<h2 className="video-names">{slide.names}</h2>
<video className="video" src={slide.projects} controls/>
</div>
                    )
                }
                
            </div>
      )
      })
      }
      </section>;
};

export default Slider;
