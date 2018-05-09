import  React from 'react';
export class ParticipationInProjectsItem extends React.Component{
      render(){
           return(
                <a href={this.props.participationLink}>{this.props.participationLink}</a>
           )
      }
}
