import React from 'react'
import { Link } from "react-router-dom";
const card = ({ infoData }) => {
    return (
        <>
            <section className='main-card-container1'>
                {infoData.map((curEle) => {
                    const {id,category,name,description,image}=curEle;
                    return (
                        <>
                            <div className='card-container1' key={id}>
                                <div className='card1'>
                                    <div className='card-body1'>
                                        <span className='card-number1 card-circle1 subtle1'>{id}</span>
                                        <span className='card-author1 subtle1'>{category}</span>
                                        <h2 className='card-title1'>{name}</h2>
                                        <span className='card-description1 subtle1'>{description}</span>
                                    </div>
                                    <img src={image} alt="images" className='card-media1' />
                                    <Link to="/appointment" state={{doctor:name}}><span className='card-tag1 subtle1'>Book Appointment</span></Link>
                                </div>
                            </div>
                        </>
                    )

                })}
            </section>
        </>
    )
}

export default card