import React from 'react';
import img1 from '../asset/img1.JPG'
import img2 from '../asset/img2.JPG'
import img3 from '../asset/img3.JPG'
import img4 from '../asset/img4.JPG'
import img5 from '../asset/img5.JPG'
import img6 from '../asset/img6.JPG'
import Footer from './Footer';

const Photos = () => {
    return (
        <div>

            <div className="grid grid-cols-2 gap-5 px-5 py-5">
                <img
                    className="object-cover w-full h-80 col-span-2 rounded shadow-lg"
                    src={img3}
                    alt=""
                />
                <img
                    className="object-cover w-full h-80 rounded shadow-lg"
                    src={img6}
                    alt=""
                />
                <img
                    className="object-cover w-full h-80 rounded shadow-lg"
                    src={img1}
                    alt=""
                />
                <img
                    className="object-cover w-full h-80 col-span-2 rounded shadow-lg"
                    src={img4}
                    alt=""
                />
                <img
                    className="object-cover w-full h-80 rounded shadow-lg"
                    src={img5}
                    alt=""
                />
                <img
                    className="object-cover w-full h-80 rounded shadow-lg"
                    src={img2}
                    alt=""
                />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Photos;