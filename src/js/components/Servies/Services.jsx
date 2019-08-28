import React, { Component } from 'react';

class Services extends Component {
  render() {
    let cards=this.props.services[1].cards.map((v,i)=>{
      return(
        <div class="col-lg-4 col-sm-6 col-md-6 mb-4 ">
        <div class="service-block d-flex">
            <div class="service-icon ">
                <i class={`fa ${v.icon}`} ></i>
            </div>
            <div class="service-content ">
                <h4><span>{v.span[0]} </span> {v.span[1]}</h4>
                <p>{v.description} </p>
            </div>
        </div>
    </div>
      )
    })
    return (
      <section class="section" id="service">
      
      <div class="container">
          <div class="row justify-content-center mb-4">
              <div class="col-md-8 col-lg-7 text-center">

                 
                  <h2 class="lg-title mb-2">
                    {this.props.services[0].title}
                  </h2>

                
                  <p class="mb-5">
                  {this.props.services[0].para}
                  </p>

              </div>
          </div>
        


          <div class="row">
              

              {cards}
          </div>
      </div>
  </section>
    );
  }
}

export default Services;
