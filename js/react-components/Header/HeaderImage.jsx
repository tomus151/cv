import React from 'react';

export class HeaderImage extends React.Component{
     render(){
          return(
               <div>
                    <img src={this.props.srcImg} alt={this.props.altImg}/>
               </div>
          );
     }
}
