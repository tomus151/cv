import React from 'react';
import {LightBoxContainer} from './LightBoxContainer.jsx'
export class ProjectContainer extends React.Component{
     onHover(event){
          this.setState({
               displayHover : 'none',
          })
     }
     handleClick(){
          this.setState({
               active : 'active',
          })
          document.querySelector('body').classList.add('active');
     }


     constructor(props){
          super(props);
          this.state={
               displayHover: "",
               active: "",
               displayClick: "",
          }
     }
     multipleFunction(){
          this.handleClick();
          this.props.showLightBoxShadow();
     }


      render(){
           return(
                <div className="expirience-item-container">
                     <img className="expirience-monitor-image" src="images/monitor.svg"/>
                     <div onMouseOver={this.onHover.bind(this)}  onClick= { this.multipleFunction.bind(this) } className="expirience-home-image-container {this.state.display}">
                          <img className="expirience-home-image" src={this.props.srcImgPage}/>
                          <div className={`click-container ${this.state.displayHover}`}>
                               <img className="click-icon" src="images/click.svg" alt="click icon"/>
                          </div>
                     </div>
                     <a href={this.props.linkToPage}>{this.props.linkToPage}</a>
                     <LightBoxContainer lightBox={this.props.lightBox} srcImgPage={ this.props.srcImgPage} />

                </div>
           )
      }
}
