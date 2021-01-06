import React from 'react';
import Card from "./Card";

class Main extends React.Component {
    render() {
        const worksItem = {
            name: 'YOUTH SENSE HP',
            image: '../images/youthsense.png'
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