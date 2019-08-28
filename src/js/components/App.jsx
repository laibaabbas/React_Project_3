import React, { Component } from "react";
import data from "./Data"
import Header from './Header/Header';
import Features from "./Features/Features";
import About from './About/About';
import Services from "./Servies/Services";
import Portfolio from "./Portfolio/Portfolio";
import Team from './Team/Team';
import Pricing from './Pricing/Pricing';
import Footer from './Footer/Footer';
import Form from './Form/Form';


class App extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
        data:data
      }
    }
  
  render() {
    return (
      <div >
        

      <Header header={this.state.data[0].header} nav={this.state.data[0].nav}/>
<Features feature={this.state.data[0].features}/>
   <About about={this.state.data[0].about} />
   <Services services={this.state.data[0].services}/>
   <Portfolio portfolio={this.state.data[0].portfolio} />
   <Pricing pricing={this.state.data[0].pricing}/>
   <Team team={this.state.data[0].Team}/>
 <Form form={this.state.data[0].form} />
   <Footer footer={this.state.data[0].footer}/>


   
      </div>
    );
  }
}
export default App;
