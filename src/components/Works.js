import React from 'react';
import Card from "./Card";
import '../styles/Works.css'
class Works extends React.Component {
    render() {
        const worksList = [
            {
            name: 'Portfolio Site',
            image: 'portfolio-site.png',
            link:'https://youthsense-coffee.com/'
            },
            {
            name: 'contributter ranking bot',
            image: 'contributter_ranking_bot.png',
            link:'https://twitter.com/haruta_8_'
            },
            {
            name: 'YOUTH SENSE',
            image: 'youthsense.png',
            link:'https://youthsense-coffee.com/'
            },
            {
            name: 'Honeyboy&co.',
            image: 'honey-boy.png',
            link:'https://honeyboy-co.com/'
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