import React from 'react';
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
class ExpirienceOwnList extends React.Component{
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
class ExpirienceParticipationList extends React.Component{
     render(){
          return(
               <div className="commercial-projects commercial-projects-participation">
                    <span className="participation-injection">Participation in projects:</span>
                    <div className="participation-in-projects-container">
                         <ParticipationInProjectsItem participationLink="https://klink.pl"/>
                         <ParticipationInProjectsItem participationLink="https://trec.pl" />
                         <ParticipationInProjectsItem participationLink="https://bagstar.pl" />
                         <ParticipationInProjectsItem participationLink="https://allora.sklep.pl" />
                         <ParticipationInProjectsItem participationLink="http://aosadyba.msmenergetyka.pl" />
                         <ParticipationInProjectsItem participationLink="https://swiatrowerow.com.pl/" />
                    </div>
               </div>
          )
     }
}
class ProjectContainer extends React.Component{
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

     hideArrow(){
          this.setState({
               displayClick: 'none',
          })
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
          this.handleClick().bind(this);
          this.props.showLightBoxShadow();
     }


      render(){
           return(
                <div className="expirience-item-container">
                     <img className="expirience-monitor-image" src="images/monitor.svg"/>
                     <div onMouseOver={this.onHover.bind(this)}  onClick= {this.multipleFunction.bind(this) } className="expirience-home-image-container {this.state.display}">
                          <img className="expirience-home-image" src={this.props.srcImgPage}/>
                          <div className={`click-container ${this.state.displayHover}`}>
                               <img className="click-icon" src="images/click.svg" alt="click icon"/>
                          </div>
                     </div>
                     <a href={this.props.linkToPage}>{this.props.linkToPage}</a>
                     <div className={`light-box-container ${this.props.lightBox}`}>
                          <img className="expirience-monitor-image monitor-lightbox" src="images/monitor.svg"/>
                          <div className="monitor-container" onClick={this.hideArrow.bind(this)}>
                               <img data-counter="1" src={this.props.srcImgPage} alt="pages-from-services"/>
                               <img className={`click-icon ${this.state.displayClick}`} src="images/click.svg" alt="click icon"/>
                          </div>
                     </div>
                </div>
           )
      }
}
class ParticipationInProjectsItem extends React.Component{
      render(){
           return(
                <a href={this.props.participationLink}>{this.props.participationLink}</a>
           )
      }
}
