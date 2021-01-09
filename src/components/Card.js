import React from 'react';
import './Card.css'
class Card extends React.Component{
    render(){
       return(
        <div className='lesson-card'>
          <div className='lesson-item'>
            <p>{this.props.name}</p>
            <img
            src={this.props.image}
            alt={this.props.name}
            />
          </div>
        </div>
        )
    }
  }

export default Card;