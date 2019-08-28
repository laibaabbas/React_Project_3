import React, { Component } from 'react';

class Featuers extends Component {
  render() {
      let feature=this.props.feature[0].feature_list.map((v,i)=>{
          return(
            <div key={i} class="col-lg-3 col-sm-6">
            <div class="text-center feature-block">
                <div class="feature-icon-block mb-4">
                    <i class={`fa ${v.icon}`}></i>
                </div>
                <h4 class="mb-3 ">{v.title} </h4>
                <p>{v.para} </p>
            </div>
        </div>
          )
      })
    return (
        <section class="section" id="feature">
        <div class="container">
            <div class="row justify-content-center mb-4">
                <div class="col-md-8 col-lg-6 text-center">

                   
                    <h2 class="lg-title mb-2">
                       {this.props.feature[0].title}
                    </h2>

                  
                    <p class="mb-5 ">
                       {this.props.feature[0].para}
                    </p>

                </div>
            </div>
       

            <div class="row justy-content-center">
                {feature}
                
            </div>
        </div>
       
    </section>
    );
  }
}

export default Featuers;
