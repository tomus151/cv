import React from 'react';
import {ProjectContainer} from './ProjectContainer.jsx'
export class ExpirienceOwnList extends React.Component{
     render(){
          return(
               <div className="expirience-mine">
                    <div className="expirience-itemlist-conatiner">
                         <div className="commercial-projects">
                              <span className="commercial-projects-injection">Commercial projects:</span>
                              <ProjectContainer key="1" showLightBoxShadow={this.props.showLightBoxShadow} lightBox={this.props.lightBox} srcImgPage="pages/shop.swdgym.com/" linkToPage="https://shop.swdgym.com"  />
                              <ProjectContainer key="2" showLightBoxShadow={this.props.showLightBoxShadow} lightBox={this.props.lightBox} srcImgPage="pages/euro-klima.pl/" linkToPage="https://euro-klima.pl"  />
                              <ProjectContainer key="3" showLightBoxShadow={this.props.showLightBoxShadow} lightBox={this.props.lightBox} srcImgPage="pages/kitle.pl/" linkToPage="https://kitle.pl"  />
                              <ProjectContainer key="4" showLightBoxShadow={this.props.showLightBoxShadow} lightBox={this.props.lightBox} srcImgPage="pages/biomed-pharma.pl/" linkToPage="https://biomed-pharma.pl"  />
                         </div>
                    </div>
               </div>
          )
     }
}
