import React from 'react';
import {HeaderImage} from './Header/HeaderImage.jsx';
import {HeaderContactData} from './Header/HeaderContactData.jsx';

export class Header extends React.Component{
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
