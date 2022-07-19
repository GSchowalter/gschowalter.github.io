import React, { Component } from 'react';

class Quotes extends Component {
  render() {

    if(this.props.data){
      var Quotes = this.props.data.Quotes.map(function(Quotes){
        return  <li key={Quotes.user}>
            <blockquote>
               <p>{Quotes.text}</p>
               <cite>{Quotes.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="Quotes">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Quotes</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {Quotes}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Quotes;
