import React from 'react';
export class LightBoxContainer extends React.Component{
  hideArrow(){
       this.setState({
            displayClick: 'none',
       })
  }
  constructor(props){
       super(props);
       this.state={
            displayClick: "",
       }
  }
  render(){
    return (
      <div className={`light-box-container ${this.props.lightBox}`}>
           <img className="expirience-monitor-image monitor-lightbox" src="images/monitor.svg"/>
           <div className="monitor-container" onClick={this.hideArrow.bind(this)}>
                <img data-counter="1" src={this.props.srcImgPage} alt="pages-from-services"/>
                <img className={`click-icon ${this.state.displayClick}`} src="images/click.svg" alt="click icon"/>
           </div>
      </div>
    )
  }
}
