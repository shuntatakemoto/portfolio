import React from 'react';
import Card from "./Card";
import './Works.css'
class Works extends React.Component {
    render() {
        const worksItem = {
            name: 'YOUTH SENSE HP',
            image: 'youthsense.png'
        }

        return (
        <div className='works-wrapper'>
            <div className='works'>
            <div className='copy-container'>
                <h1>Works</h1>
            </div>
            <div className='works-container'>
                <Card
                name={worksItem.name}
                image={worksItem.image}
                />

            </div>
            </div>
        </div>
        );
    }
}

export default Works;