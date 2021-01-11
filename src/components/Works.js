import React from 'react';
import Card from "./Card";
import './Works.css'
class Works extends React.Component {
    render() {
        const worksList = [
            {
            name: 'YOUTH SENSE HP',
            image: 'youthsense.png',
            link:'https://youthsense-coffee.com/'
            },
            {
                name: 'Honeyboy&co. EC',
                image: 'honey-boy.png',
                link:'https://honeyboy-co.com/'
            },
        {
            name: 'contributter ranking bot',
            image: 'contributter_ranking_bot.png',
            link:'https://twitter.com/haruta_8_'
        }
    ]

        return (
        <div className='works-wrapper'>
            <div className='works'>
            <div className='copy-container'>
                <h1>Works</h1>
            </div>
            <div className='works-container'>
            {worksList.map((worksItem)=>{
                return(
                <Card
                    name={worksItem.name}
                    image={worksItem.image}
                    link={worksItem.link}
                />
                )
            })}
            </div>
            </div>
        </div>
        );
    }
}

export default Works;