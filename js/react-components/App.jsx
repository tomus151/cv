import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './Header.jsx'
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
                    let style;
                    const itemToShow = item.parentElement.querySelector('.center-div');
                    style = itemToShow.style.display;
                    if(style == "none"){
                      itemToShow.style.display = 'block';
                    }else{
                      itemToShow.style.display = 'none';
                    }
               })
          })
     }
     showLightBoxShadow(){
          this.setState({
               LightBoxShadowIsActive: "active",
               //LightBoxIsActive: "active",
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
          this.hideLightBoxShadow = this.hideLightBoxShadow.bind(this);
          this.showLightBoxShadow = this.showLightBoxShadow.bind(this);
     }

     render(){
          return(
               <div>
                    <div className="page-wrapper">
                         <Header/>
                         <Expirience showLightBoxShadow={this.showLightBoxShadow} lightBox={this.state.LightBoxIsActive}/>
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

ReactDOM.render(
     <App/>,
     document.getElementById('app')
)
});
