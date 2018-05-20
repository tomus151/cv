import React from 'react';

export class LightBoxShadow extends React.Component{
     render(){
          return(
               <div className={`light-box-backshadow ${this.props.shadowIsActive}`} onClick={this.props.disactivateShadow} ></div>
          )
     }
}
