import React, { Component } from 'react';

class About extends Component {
  render() {
    let points=this.props.about[0].points.map((v,i)=>{
      return(
        <li key={i}> <i className="fa fa-check-double"></i>{v.point} </li>

      )
    })
    return (
      <section id="about" class="section bg-light">
          
          <div class="container">
        <div class="row">

          <div class="col-md-6 ">
            <div class="about-img">
              <img src={this.props.about[0].about_img} class="img-fluid"  alt=""/>
            </div>
          </div>

          <div class="col-lg-6 ">
                    <div class="about-content">
                        <h2 class="display-5">
                        {this.props.about[0].about_heading}
                        </h2>
                        <p>{this.props.about[0].about_para}</p>


                        <ul class="list-unstyled skill-list ">
                            
                            {points}
                        </ul>

                        <p>{this.props.about[0].qury}<a href="#">{this.props.about[0].cont}</a></p>
                    </div>
                </div>
        </div>
      </div>
      <div class="container">
            <div class="row mt-5 align-items-center ">
                <div class="col-lg-6 col-md-6">
                    <div class="about-content-2 ">
                        <h2 class="display-5">
                        {this.props.about[1].about_heading}
                        </h2>
                        <p>{this.props.about[1].about_para}</p>

                        <a href="#" class="btn btn-primary">{this.props.about[1].btn}</a>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="about-img">
                        <img src={this.props.about[1].about_img} alt="" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
      

      </section>
    );
  }
}

export default About;
