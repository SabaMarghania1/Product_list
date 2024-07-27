import { useState } from 'react'
import styles from './ProductImage.module.css'
import { useEffect } from 'react'


export default function ProductImage({image}) {
    const [src,setSrc]= useState(image.mobile)
    
    useEffect(()=>{
        const updateImage = ()=>{
            if(window.innerWidth<768){
                setSrc(image.mobile)
            }else if(window.innerWidth < 1440){
                setSrc(image.tablet)
            }else{
                setSrc(image.desktop)
            }
        }

        updateImage();
        window.addEventListener("resize",updateImage);

        return ()=> window.removeEventListener("resize", updateImage);
    },[image])

    return <img src ={src} alt="product"/>
    
  
}
