import React, { Component } from 'react';

class Pricing extends Component {
  render() {
    let card=this.props.pricing[0].cards.map((v,i)=>{
      let card=v.given.map((val,ind)=>{
    return(
      <li key={ind}>{val.list}</li>

    )
      })
      return(
        <div key={i} class="col-lg-4 col-md-6 col-sm-6">
        <div class="pricing-block">
            <h2>{v.title}</h2>

            <h3 class="price my-3 ">
               {v.price} <small>$</small>
            </h3>

            <ul class="list-unstyled">
             {card}
               
            </ul>

            <a href="#" class="btn btn-outline-dark">Purchase now</a>
        </div>
    </div>
      )
    })
  
   
    return (
      <section class="section" id="pricing">
        <div class="container">
            <div class="row mb-4">
                <div class="col-md-6 col-lg-4 ">

                    
                    <h2 class="lg-title mb-2 ">
                     {this.props.pricing[0].title}
                    </h2>

                  
                    <p class="my-4 ">
                    {this.props.pricing[0].para}
                    </p>

                    <a href="#contact" class="btn btn-primary">{this.props.pricing[0].btn}</a>
                    <p class="text-primary mt-3">{this.props.pricing[0].text}</p>
                </div>
            {card}
                
            </div>
           
        </div>
    </section>
    );
  }
}

export default Pricing;
