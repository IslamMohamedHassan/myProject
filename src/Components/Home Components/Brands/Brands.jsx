import React, {  useRef } from 'react';
import classes from './Brands.module.css'

const Brands = () => {
    const imgRef = useRef()
   const Images =   ["https://weblearnbd.net/tphtml/kleaso/assets/img/brand/home-2/img-1.png",
     "https://weblearnbd.net/tphtml/kleaso/assets/img/brand/home-2/img-2.png",
     "https://weblearnbd.net/tphtml/kleaso/assets/img/brand/home-2/img-3.png",
    "https://weblearnbd.net/tphtml/kleaso/assets/img/brand/home-2/img-4.png" ,
    "https://weblearnbd.net/tphtml/kleaso/assets/img/brand/home-2/img-5.png",
    "https://weblearnbd.net/tphtml/kleaso/assets/img/brand/home-2/img-6.png",
]
        const  handleMouseOver = (e) => {
                e.target.style.filter = 'grayscale(0)'
        }
        const handleMouseLeave = (e) => {
                e.target.style.filter = 'grayscale(1)'
        }
    return (
        <>
        <h2 className={classes.h1}>اعتماداتي</h2>
        <section className={classes.brands} >
        <div className={classes.brand}  >
            {Images.map(Image => {
                return (
                    <img src={Image} ref={imgRef} alt="Simple" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
                )
            })}
        </div>
        <section className={classes.brand} aria-hidden={true}>
                {
                Images.map(Image => {
                    return (
                        <img src={Image} alt="Simple" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
                    )
                })}
        </section>
        </section>
        </>
    )

}

export default Brands;
