import React from 'react';
export class Skills extends React.Component{
     render(){
          return(
               <section className="section__skills">
                    <article>
                         <div className="section__image-and-title">
                              <div>
                                   <i className="fas fa-chart-pie"></i>
                                   <h3>Skills</h3>
                              </div>
                         </div>
                         < SkillsList />
                    </article>
               </section>
          )
     }
}
export class SkillsList extends React.Component{
     render(){
          return(
               <div className="center-div">
                    <img className="skills-left" src="images/chevron-left.svg"/>
                    <div className="skills-mine">
                         <div className="skills-itemlist-conatiner">
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
                    <img className="skills-right" src="images/chevron-right.svg"/>
               </div>
          )
     }
}
export class SkillItem extends React.Component{
     render(){
          return(
               <div className="section__skills-item-container">
                    <img src={"technologie/compresspng/"+this.props.srcImg} alt={this.props.altImg}/>
                    <span>{this.props.name}</span>
               </div>
          )
     }
}
