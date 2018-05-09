import React from 'react';
import {ProjectContainer} from './ProjectContainer.jsx'
export class ExpirienceOwnList extends React.Component{
     render(){
          return(
               <div className="expirience-mine">
                    <div className="expirience-itemlist-conatiner">
                         <div className="commercial-projects">
                              <span className="commercial-projects-injection">Commercial projects:</span>
                              <ProjectContainer showLightBoxShadow={this.props.showLightBoxShadow} lightBox={this.props.lightBox} srcImgPage="pages/shop.swdgym.com/home.png" linkToPage="https://shop.swdgym.com"  />
                              <ProjectContainer showLightBoxShadow={this.props.showLightBoxShadow} lightBox={this.props.lightBox} srcImgPage="pages/euro-klima.pl/home.png" linkToPage="https://euro-klima.pl"  />
                              <ProjectContainer showLightBoxShadow={this.props.showLightBoxShadow} lightBox={this.props.lightBox} srcImgPage="pages/kitle.pl/home.png" linkToPage="https://kitle.pl"  />
                              <ProjectContainer showLightBoxShadow={this.props.showLightBoxShadow} lightBox={this.props.lightBox} srcImgPage="pages/biomed-pharma.pl/home.png" linkToPage="https://biomed-pharma.pl"  />
                         </div>
                    </div>
               </div>
          )
     }
}
