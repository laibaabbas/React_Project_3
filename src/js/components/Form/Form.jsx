import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
        <section class="section" id="contact">
        <div class="container">
            <div class="row justify-content-center mb-4">
                <div class="col-md-8 col-lg-8 text-center">

                  
                    <h2 class="lg-title mb-2">
                       {this.props.form[0].title}
                    </h2>

                   
                    <p class="mb-5">
                        {this.props.form[0].para}
                    </p>

                </div>
            </div>
          


            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <form action="mail.php" method="post" id="main_contact_form" class="contact__form">
                     
                            <div class="row">
                                <div class="col-12">
                                    <div class="alert alert-success contact__msg" style={{"display":" none"}} role="alert">
                                        Your message was sent successfully.
                                    </div>
                                </div>
                            </div>
                          
                            
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="name" id="name" class="form-control" placeholder={this.props.form[0].name}/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <input type="text" name="email" id="email" class="form-control" placeholder= {this.props.form[0].email} required="required"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="text" name="subject" id="subject" class="form-control" placeholder={this.props.form[0].sub} required="required"/>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <textarea name="message" id="message" cols="30" rows="6" class="form-control" placeholder="Enter your Message" required="required"></textarea>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="submit text-center">
                                    <input name="submit" type="submit" class="btn btn-primary btn-lg" value={this.props.form[0].btn}/>
                                    <p class="pt-3">   {this.props.form[0].p2}</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Form;
