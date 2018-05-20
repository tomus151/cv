import React from 'react';

export class SkillItem extends React.Component{
     render(){
          return(
               <div className="section__skills-item-container">
                    <img src={"technologie/compresspng/"+this.props.srcImg} alt={this.props.altImg}/>
                    <span>{this.props.name}</span>
               </div>
          )
     }
}
