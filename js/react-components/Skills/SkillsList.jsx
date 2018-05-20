import React from 'react';
import {SkillItem} from './SkillItem.jsx';

export class SkillsList extends React.Component{
     constructor(props){
       super(props);
       this.state={
         witchElementCarousel: 0,
         translateX: 0,
       }
       this.nextElement = this.nextElement.bind(this);
       this.prevElement = this.prevElement.bind(this);
     }
     nextElement(){
       if( this.state.witchElementCarousel < this.state.arrayElementsLength -4){
           this.setState({
             witchElementCarousel: this.state.witchElementCarousel +1,
             translateX: this.state.translateX - 220,
           })

        }
     }
     prevElement(){
           if( this.state.witchElementCarousel > 0){
           this.setState({
              witchElementCarousel: this.state.witchElementCarousel -1,
              translateX: this.state.translateX + 220,
           })
         }
      }
     render(){
          return(
               <div className="center-div">
                    <img className="skills-left" src="images/chevron-left.svg" onClick={this.prevElement}/>
                    <div className="skills-mine" data-element={this.state.wicthElementCarousel}>
                         <div className="skills-itemlist-conatiner" style={{transform: `translateX(${this.state.translateX}px)`}}>
                              <SkillItem srcImg="js-min.png" altImg=" " name="Java Script"/>
                              <SkillItem srcImg="jquery-min.png" altImg="jQuery logo" name="jQuery"/>
                              <SkillItem srcImg="react-min.png" altImg="React logo" name="React"/>
                              <SkillItem srcImg="php-min.png" altImg="PHP logo" name="PHP"/>
                              <SkillItem srcImg="mysql-min.png" altImg="MySql logo" name="MySql"/>
                              <SkillItem srcImg="CSS3-min.png" altImg="CSS3 logo" name="CSS3"/>
                              <SkillItem srcImg="less-min.png" altImg="Less logo" name="Less"/>
                              <SkillItem srcImg="sass-min.png" altImg="Sass logo" name="Sass"/>
                              <SkillItem srcImg="html-min.png" altImg="HTML 5 logo" name="HTML 5"/>
                              <SkillItem srcImg="git-min.png" altImg="Git logo" name="Git"/>
                              <SkillItem srcImg="rwd-min.png" altImg="RWD logo" name="RWD"/>
                              <SkillItem srcImg="webpack-min.png" altImg="Webpack logo" name="Webpack"/>
                              <SkillItem srcImg="gulp.svg" altImg="Gulp logo" name="Gulp"/>
                              <SkillItem srcImg="grunt.svg" altImg="Grunt logo" name="Grunt"/>
                              <SkillItem srcImg="compass-min.png" altImg="Compass logo" name="Compass"/>
                              <SkillItem srcImg="magento-min.png" altImg="Magento logo" name="Magento"/>
                              <SkillItem srcImg="magento2-min.png" altImg="Magento 2 logo" name="Magento 2"/>
                              <SkillItem srcImg="ps-min.png" altImg="PhotoShop logo" name="PhotoShop"/>
                         </div>
                    </div>
                    <img className="skills-right" src="images/chevron-right.svg" onClick={this.nextElement}/>

               </div>
          )
     }
     componentDidMount(){
       const lengthElements = document.querySelectorAll('.section__skills-item-container').length;
       this.setState({
         arrayElementsLength: lengthElements,
       })
     }
}
