import React from 'react';
import './Card.css'
class Card extends React.Component{
    render(){
       return(
        <div className='card'>
          <div class="card_image">
            <img
              className="card__img"
              src={this.props.image}
              alt={this.props.name}
          />
          </div>
          <div className="card__content">
            <div className="card__name">
              {this.props.name}
            </div>
              {/* <div className="card__lead">
              {this.props.lead}
              </div> */}
          </div>
        </div>
        )
    }
  }

export default Card;