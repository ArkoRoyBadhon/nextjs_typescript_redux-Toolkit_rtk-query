import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSliderImggetQuery } from '../../Components/Services/slideApi';
import { sliderImage } from '../../Components/store/productSlice';

const Slider = () => {
    const [arr, setArr] = useState([]);
    const images = useSelector((state: any) => state.showReducer.imageLink)
    // console.log(images[0]);

    const extraArr: any = [];


    const { data, error, isLoading, isFetching, isSuccess } = useSliderImggetQuery()

    // console.log("rtk",data);
    const varImgs: any = data
    // console.log(varImgs[0]);



    return (
        <div className="carousel w-full">
            {
                // data?.map((img: any) =>
                //     <div key={img.id} id={`#slide${parseInt(img.id)}`} className="carousel-item relative w-full">
                //         <img src={img.link} className="w-full" />
                //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                //             <a href={`#slide${parseInt(img.id) + 2}`} className="btn btn-circle">❮</a>
                //             <a href={`#slide${parseInt(img.id) + 1}`} className="btn btn-circle">❯</a>
                //             <h2>{`#slide${parseInt(img.id) + 1}`}</h2>
                //         </div>
                //     </div>)
            }

            {
                varImgs &&
                <>
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={varImgs[0].link} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={varImgs[1].link} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={varImgs[2].link} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </>
            }
        </div >
    );
};

export default Slider;