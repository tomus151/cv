import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel'
import {Expirience} from './Expirience.jsx';
import {Skills} from './Skills.jsx';
import {Education} from './Education.jsx';
import {PersonalProfile} from './PersonalProfile.jsx';
import {AdditionalSkills}  from './AdditionalSkills.jsx'


function addElementToClick(){

}
document.addEventListener('DOMContentLoaded', function(){

class App extends React.Component{

     addElementToClick(){
          let section = document.querySelectorAll('section');
          let footer = document.querySelector('footer');


          section.forEach(function(item){
               let div = document.createElement('div');
               div.classList.add('hideShow');
               item.appendChild(div);
          })
               let div = document.createElement('div');
               div.classList.add('hideShow');
               footer.appendChild(div);


     }
     hideHide(){
          document.querySelectorAll('.center-div').forEach(function(item){
               item.style.display = 'none';
          })
     }
     showHide(){
          document.querySelectorAll('.hideShow').forEach(function(item){
               item.addEventListener('click',function(){
                    console.log(item);
                    var itemToShow = item.parentElement.querySelector('.center-div');
                    itemToShow.style.display = 'block';
               })
          })
     }
     showLightBoxShadow(){
          this.setState({
               LightBoxShadowIsActive: "active",
               LightBoxIsActive: "active",
          })
     }
     hideLightBoxShadow(){
          this.setState({
               LightBoxShadowIsActive: "",
               LightBoxIsActive: "",
          })
          document.querySelector('body').classList.remove('active');
     }
     constructor(props){
          super(props);
          this.state={
               LightBoxShadowIsActive: "",
               LightBoxIsActive: "",
          }
     }

     render(){
          return(
               <div>
                    <LightboxShadow lightBoxShadowIsActive ={this.state.LightBoxShadowIsActive} hideLightBoxShadow={this.hideLightBoxShadow.bind(this)}/>
                    <div className="page-wrapper">
                         <Header/>
                         <Expirience showLightBoxShadow={this.showLightBoxShadow.bind(this)} lightBox={this.state.LightBoxIsActive}/>
                         <Skills/>
                         <Education/>
                         <PersonalProfile/>
                         <AdditionalSkills/>
                    </div>
               </div>
          );
     }
     componentDidMount(){
          this.addElementToClick();
          this.hideHide();
          this.showHide();
     }
}
class LightboxShadow extends React.Component{
     render(){
          return(
               <div className={`light-box-backshadow ${this.props.lightBoxShadowIsActive}`} onClick={this.props.hideLightBoxShadow}></div>
          )
     }
}
class Header extends React.Component{
     render(){
          return(
               <header className="header__container">
                    <div className="header__item-container">
                         <HeaderImage srcImg="images/ja-min.jpg" altImg="zdjęcie autora"/>
                         <HeaderContactData mail="tmarkowski1991@gmail.com" tel="+48506231770"/>
                    </div>
                    <p>Please contact me after 4 p.m.</p>
               </header>
          );
     }
}
class HeaderImage extends React.Component{
     render(){
          return(
               <div>
                    <img src={this.props.srcImg} alt={this.props.altImg}/>
               </div>
          );
     }
}
class HeaderContactData extends React.Component{
     render(){
          return(
               <div className="contact-data">
                    <h1>Tomasz Markowski</h1>
                    <a href={"mailto:"+ this.props.mail}>e-mail: {this.props.mail}</a>
                    <a href={"tel:" + this.props.tel}>tel.{this.props.tel}</a>
               </div>
          )
     }
}

ReactDOM.render(
     <App/>,
     document.getElementById('app')
)
});
