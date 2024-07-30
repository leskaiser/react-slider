import { useState, useEffect } from "react";
import leftChevron from '../../assets/left-arrow.svg';
import rightChevron from '../../assets/right-arrow.svg';
import sliderData from '../../data/sliderData.js';
import './Slider.css';


export const SliderAuto = () => {
    const [sliderIndex, setSliderIndex] = useState(1)

    function toggleImage(indexPayLoad) {
        setSliderIndex(state =>{
            if (indexPayLoad + state > sliderData.length){
                return  1;
            }
            else if (indexPayLoad + state <= 0){
                return  sliderData.length;
            }
            else {
                return state + indexPayLoad;
            }
        });
    }

    useEffect(() => {
        const intervalID = setInterval(()=> toggleImage(1), 4000);
        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            <p className={'index-info'}>{sliderIndex} / {sliderData.length}</p>
            <div className={'slider'}>
                <p className={'image-info'}>{sliderData.find(obj=>obj.id === sliderIndex).description}</p>
                <img className={'slider-img'} src={`/images/img-${sliderIndex}.jpg`} alt={sliderData.find(obj=>obj.id === sliderIndex).description} title={sliderData.find(obj=>obj.id === sliderIndex).description}/>
                <button onClick={() => toggleImage(-1)} className={'navigation-button prev-button'}>
                    <img src={leftChevron} alt="previous"/>
                </button>
                <button onClick={() => toggleImage(1)} className={'navigation-button next-button'}>
                    <img src={rightChevron} alt="next"/>
                </button>
            </div>
        </>
    );
};
