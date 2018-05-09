import React from 'react';
import {ItemEducation} from './Education/ItemEducation.jsx'
export class Education extends React.Component{
     render(){
          return(
               <section className="section__education">
                    <article>
                         <div className="section__image-and-title">
                              <div>
                                   <i className="fas fa-graduation-cap"></i>
                                   <h3>Education</h3>
                              </div>
                         </div>
                         <div className="center-div">
                              <div className="education-and-description-container">
                                   <ItemEducation shoolName="Coders Lab" title="Course Front-end developer React" description="240 hours course on which I gained skills to work as a Frontened Developer"/>
                                   <ItemEducation shoolName="Polsko Japońska Wyższa Szkoła Technik Komputerowych" title="Postgraduate studies in the direction of Databases and their applications" description="Communication with the database. Administration of relational data bases."/>
                                   <ItemEducation shoolName="Uczelnia Warszawska im. Marii Curie-Skłodowskiej" title="Engineering studies in the direction of Geodesy and Cartography" description="Tacheometer, leveling, civil law, construction projects"/>
                              </div>
                         </div>
                    </article>
               </section>
          )
     }
}
