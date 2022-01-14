import React from 'react'
import Card from '../Card/Card'

//This code must be removed
import image from '../assets/rocket.jpg'
import channelImg from '../assets/lights.jpg'

//Styles
import './CardContainer.css'

const cards = [
    {
        id: 1,
        title: 'Test video',
        image: image,
        channelImg: channelImg,
        channel: 'pahesebTest',
        views: 1000,
        date: '2 hours ago'
    },
    {
        id: 2,
        title: 'Test video',
        image: image,
        channelImg: channelImg,
        channel: 'pahesebTest',
        views: 1000,
        date: '2 hours ago'
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolor.',
        image: image,
        channelImg: channelImg,
        channel: 'pahesebTest',
        views: 1000,
        date: '2 hours ago'
    },
    {
        id: 4,
        title: 'Test video',
        image: image,
        channelImg: channelImg,
        channel: 'pahesebTest',
        views: 1000,
        date: '2 hours ago'
    }, {
        id: 5,
        title: 'Test video',
        image: image,
        channelImg: channelImg,
        channel: 'pahesebTest',
        views: 1000,
        date: '2 hours ago'
    },
    {
        id: 6,
        title: 'Test video',
        image: image,
        channelImg: channelImg,
        channel: 'pahesebTest',
        views: 1000,
        date: '2 hours ago'
    }
]

function CardContainer() {
    return (
        <div className="container-cards-component">
            {
                cards.map(card => (
                    <div key={card.id}>
                        <Card
                            title={card.title}
                            imageSource={card.image}
                            channel={card.channel}
                            views={card.views}
                            date={card.date}
                            channelImg={card.channelImg}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default CardContainer
