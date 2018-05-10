import React from 'react';
export class LightBoxContainer extends React.Component{
  hideArrow(){
       this.setState({
            displayClick: 'none',
       })
  }
  changeImage(){

  }
  multipleClick(){
    this.hideArrow();
    this.props.changeImageInLightBox();
  }
  constructor(props){
       super(props);
       this.state={
            displayClick: "",
            dataValue: 1,
       }
       this.multipleClick = this.multipleClick.bind(this);
  }
  render(){
    return (
      <div className={`light-box-container ${this.props.lightBox}`}>
           <img className="expirience-monitor-image monitor-lightbox" src="images/monitor.svg"/>
           <div className="monitor-container" onClick={this.multipleClick}>
                <img data-counter={this.props.dataValue} src={this.props.srcImgPage} alt="pages-from-services"/>
                <img className={`click-icon ${this.state.displayClick}`} src="images/click.svg" alt="click icon"/>
           </div>
      </div>
    )
  }
}
