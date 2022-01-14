import React from 'react'

import './Card.css'

function Card({ title, imageSource, channel, views, date, channelImg }) {
    return (
        <div className="card-container">
            <img src={imageSource} alt="" className="card-image" />
            <div className="card-details">
                <div className="card-details-container__card-title-image">
                    <img src={channelImg} alt="" className="card-channel-pic" />
                    <h5 className="card-title">{title}</h5>
                </div>
                <div className="card-details-container__card-channel">
                    <p className="card-channel">{channel}</p>
                </div>
                <div className="card-details-container-views-date">
                    <p className="card-views">{views} views</p>
                    <p className="card-date">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
