import React from 'react';
import {ExpirienceOwnList} from './Expirience/ExpirienceOwnList.jsx';
import {ExpirienceParticipationList} from './Expirience/ExpirienceParticipationList.jsx'
export class Expirience extends React.Component{
     render(){
          return(
               <section className="section__experience">
                    <article>
                         <div className="section__image-and-title">
                              <div>
                                   <i className="fas fa-flask"></i>
                                   <h3>Work Experince</h3>
                              </div>
                         </div>
                         <div className="center-div" >
                              <div>
                                   <h4>2017-Now Redingo</h4>
                                   <span>Junior Frent-end developer</span>
                                   <div className="projects">
                                             <ExpirienceOwnList showLightBoxShadow={this.props.showLightBoxShadow} lightBox={this.props.lightBox}/>
                                             <ExpirienceParticipationList/>
                                             <div>
                                                  <h4>2016-2017 Cyfrowy Polsat</h4>
                                                  <span>Telemarketer</span><br/>
                                                  <span>Selling Cyfrowy Polsats products</span>
                                             </div>
                                             <div>
                                                  <h4>2015-2016 Pol-sevice</h4>
                                                  <span>Surveyor</span><br/>
                                                  <span>Measurement</span><br/>
                                                  <span>Leveling</span><br/>
                                                  <span>Tacheometry</span>
                                             </div>
                                   </div>
                              </div>
                         </div>
                    </article>
               </section>
          )
     }
     
     ComponentDidMount(){

     }

}
