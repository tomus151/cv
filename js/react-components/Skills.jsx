import React from 'react';
import {SkillsList} from './Skills/SkillsList.jsx';

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
