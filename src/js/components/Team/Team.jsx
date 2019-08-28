import React, { Component } from 'react';

class Team extends Component {
  render() {
   let slider=this.props.team.map((v,i)=>{
      return(
        <div key={i} class={`carousel-item text-center test-content ${v.class} `}>
        <div class="client-img">
            <img src={v.img} alt="" class="img-fluid "/>
        </div>

        <p class="lead">{v.para} </p>

        <div class="client-text">
            <h3>{v.h3} </h3>
            <h6>S{v.h6}</h6>
        </div>
    </div>
      )
    })
     
    return (
      <section class="section bg-dark" id="testimonial">
      <div class="carousel slide" id="review-slider" data-ride="carousel">
         <ol class="carousel-indicators">
          <li data-target="#review-slider" data-slide-to="0" class="active"></li>
          <li data-target="#review-slider" data-slide-to="1" class=""></li>
          <li data-target="#review-slider" data-slide-to="2" class=""></li>
        </ol>
         <div class="caousel-inner">
             <div class="container">
                   <div class="row">
                     <div class="col-lg-8 m-auto">
                       {slider}
                    
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>
    );
  }
}

export default Team;
