import React from 'react';
export class ItemEducation extends React.Component{
     render(){
          return(
               <div>
                    <h4>{this.props.shoolName}</h4>
                    <div className="education-description">
                         <span>{this.props.title}</span>
                         <span>Description:</span>
                         <span>{this.props.description}</span>
                    </div>
               </div>
          )
     }
}
