import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    let blog=this.props.portfolio[0].container.map((v,i)=>{
      return(
        <div key={i} class="col-lg-4 col-md-6 col-sm-6 mb-5">
        <div class="portfolio-block">
            <img src={v.img} alt="portfolio"/>

            <div class="portfolio-content">
                <h4>{v.h4} </h4>
                <span class="work-cat">{v.span} </span>
            </div>
            <div class="overlay-content">
                <a href="#"><i class={`fa ${v.icon}`} ></i></a>
            </div>
        </div>
    </div>
      )
    })
    
    return (
      <section class="section bg-light" id="portfolio">
      <div class="container">
          <div class="row justify-content-center mb-4">
              <div class="col-md-8 col-lg-7 text-center">

                 
                 
                  <h2 class="lg-title mb-2">
                     {this.props.portfolio[0].title}
                  </h2>


                  <p class="mb-5">
                  {this.props.portfolio[0].para}
                  </p>

              </div>
          </div>
         

          <div class="row justify-content-center">
              {/* <div class="col-lg-4 col-md-6 col-sm-6 mb-5">
                  <div class="portfolio-block">
                      <img src="http://themeturn.com/free/coral/assets/img/portfolio/43.png" alt="portfolio"/>

                      <div class="portfolio-content">
                          <h4>Probiz-portfolio web template</h4>
                          <span class="work-cat">Web Design</span>
                      </div>
                      <div class="overlay-content">
                          <a href="#"><i class="fa fa-link"></i></a>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 mb-5">
                  <div class="portfolio-block">
                      <img src="http://themeturn.com/free/coral/assets/img/portfolio/44.png" alt="portfolio"/>

                      <div class="portfolio-content">
                          <h4>Probiz-portfolio web template</h4>
                          <span class="work-cat">Web Design</span>
                      </div>
                      <div class="overlay-content">
                          <a href="single-portfolio.html"><i class="fa fa-link"></i></a>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 mb-5">
                  <div class="portfolio-block">
                      <img src="http://themeturn.com/free/coral/assets/img/portfolio/43.png" alt="portfolio"/>

                      <div class="portfolio-content">
                          <h4>Probiz-portfolio web template</h4>
                          <span class="work-cat">Web Design</span>
                      </div>
                      <div class="overlay-content">
                          <a href="single-portfolio.html"><i class="fa fa-link"></i></a>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="portfolio-block">
                      <img src="http://themeturn.com/free/coral/assets/img/portfolio/45.png" alt="portfolio"/>

                      <div class="portfolio-content">
                          <h4>Probiz-portfolio web template</h4>
                          <span class="work-cat">Web Design</span>
                      </div>
                      <div class="overlay-content">
                          <a href="single-portfolio.html"><i class="fa fa-link"></i></a>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="portfolio-block">
                      <img src="http://themeturn.com/free/coral/assets/img/portfolio/46.png" alt="portfolio"/>

                      <div class="portfolio-content">
                          <h4>Probiz-portfolio web template</h4>
                          <span class="work-cat">Web Design</span>
                      </div>
                      <div class="overlay-content">
                          <a href="single-portfolio.html"><i class="fa fa-link"></i></a>
                      </div>
                  </div>
              </div> */}
              {blog}
          </div>
      </div>
  </section>
    );
  }
}

export default Portfolio;
