import React, { Component } from 'react';
import Nav from "../Nav/Nav";

class Header extends Component {
  render() {
    return (
      <div className="header bg-cover" style={{"background-image":`url(${this.props.header[0].header_bg_img})`}}>
           <Nav  nav={this.props.nav}/>
           <div class="bg-overlay"></div>
           <div class="container d-flex h-90">
           <div class="row justify-content-center align-items-center">
                <div class="col-md-10 col-lg-7 ">
                    <div class="banner-content">
                       
                        <p class="text-white text-uppercase text-center text-xs">
                            Meet <span> {this.props.header[0].meet} </span>
                        </p>

                       
                        <h1 class="text-white text-center mb-4 display-4 font-weight-bold">
                        {this.props.header[0].title[0]}  <br/>&amp; {this.props.header[0].title[1]} 
                        </h1>

                      
                        <p class="lead text-white text-center mb-5">
                        {this.props.header[0].para} 
                            </p>

                      
                        <p class="text-center mb-0">
                            <a href="#" target="_blank" class="btn btn-primary ">
                            {this.props.header[0].btn} 
                            </a>
                        </p>
                    </div>
                </div>
            </div>

    </div>
            </div>
    );
  }
}

export default Header;
