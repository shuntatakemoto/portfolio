import React from 'react';
import Card from "./Card";

class Skills extends React.Component {
    render() {
        const skillsList = [
            {
                name: 'Javascript',
                image: ''
            },
            {
                name:'Typescript',
                image:'',
            },
            {
                name:'React',
                image:'',
            },
            {
                name:'Python',
                image:'',
            },
            {
                name:'Three.js',
                image:'',
            },
            {
                name:'C',
                image:'',
            },
            {
                name:'HTML/CSS',
                image:'',
            },

            {
                name:'Firebase',
                image:'',
            },
            {
                name:'Github',
                image:'',
            },

        ];
        return (
        <div className='skills-wrapper'>
            <div className='skills'>
            <div className='title-container'>
                <h1>Skills</h1>
            </div>
            <div className='skills-container'>
            {skillsList.map((skillsItem)=>{
                return(
                <Card
                    name={skillsItem.name}
                    image={skillsItem.image}
                />
                )
            })}

            </div>
            </div>
        </div>
        );
    }
}

export default Skills;