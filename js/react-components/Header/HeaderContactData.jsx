import React from 'react';

export class HeaderContactData extends React.Component{
     render(){
          return(
               <div className="contact-data">
                    <h1>Tomasz Markowski</h1>
                    <a href={"mailto:"+ this.props.mail}>e-mail: {this.props.mail}</a>
                    <a href={"tel:" + this.props.tel}>tel.{this.props.tel}</a>
               </div>
          )
     }
}
