import React from 'react';
import {ParticipationInProjectsItem} from './ParticipationInProjectsItem.jsx'
export class ExpirienceParticipationList extends React.Component{
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
