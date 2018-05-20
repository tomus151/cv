import React from 'react';
import {LightBoxContainer} from './LightBoxContainer.jsx';
import {LightBoxShadow} from './LightBoxShadow.jsx';
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
    handleClickLightBox(){
        this.setState({
            isLightBoxActive: "active",
        })
    }
    activateShadow(){
      this.setState({
        shadowIsActive: "active",
      })
    }
    disactivateShadow(){
      this.setState({
        shadowIsActive: "",
        isLightBoxActive: "",
      })
      document.querySelector('body').classList.remove('active');
    }
    changeImageInLightBox(){
      this.setState({
        dataValue: this.state.dataValue + 1,
      })
      if(this.state.dataValue == 4){
        this.setState({
          dataValue: 2,
          whitchImage: "home.png",
        })
      }
      if(this.state.dataValue == 3){
        this.setState({
          whitchImage: "productView.png",
        })
      }else if(this.state.dataValue == 2){
        this.setState({
          whitchImage: "cart.png",
        })
      }

    }
     constructor(props){
          super(props);
          this.state={
               displayHover: "",
               active: "",
               displayClick: "",
               isLightBoxActive: "",
               mainImage: "home.png",
               whitchImage: "home.png",
               dataValue:  2,
               shadowIsActive: "",
          }
          this.onHover = this.onHover.bind(this);
          this.multipleFunction = this.multipleFunction.bind(this);
          this.changeImageInLightBox = this.changeImageInLightBox.bind(this);
          this.activateShadow = this.activateShadow.bind(this);
          this.disactivateShadow = this.disactivateShadow.bind(this);
     }
     multipleFunction(){
          this.handleClick();
          this.props.showLightBoxShadow();
          this.handleClickLightBox();
          this.activateShadow();
     }
      render(){
           return(
                <div className="expirience-item-container">
                     <img className="expirience-monitor-image" src="images/monitor.svg"/>
                     <div onMouseOver={this.onHover}  onClick= { this.multipleFunction } className="expirience-home-image-container {this.state.display}">
                          <img className="expirience-home-image" src={this.props.srcImgPage+this.state.mainImage}/>
                          <div className={`click-container ${this.state.displayHover}`}>
                               <img className="click-icon" src="images/click.svg" alt="click icon"/>
                          </div>
                     </div>
                     <a href={this.props.linkToPage}>{this.props.linkToPage}</a>
                     <LightBoxContainer lightBox={this.state.isLightBoxActive} srcImgPage={this.props.srcImgPage+this.state.whitchImage} changeImageInLightBox={this.changeImageInLightBox} dataValue={this.state.dataValue}/>
                     <LightBoxShadow shadowIsActive = {this.state.shadowIsActive} disactivateShadow={this.disactivateShadow}/>
                </div>
           )
      }
}
