import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 >Hi! <br />I'm Rahul</h1>
                          <p><a className="btn btn-warning" href="https://drive.google.com/file/d/1N72FZpPMIST9eEsq4bTM9ZVW2Ad2EluU/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>My research papers<br /> during bachelors !!</h1>
                          <p><a className="btn btn-warning" href="https://drive.google.com/drive/folders/1H6c1CN7r5YV9QuGgl-P96jNDZCTGLcmq?usp=sharing" target="_blank" rel="noopener noreferrer">View Papers <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Want to know more about projects<br/>Here, is my Linkedin																																																																																																																																																																																																																																																																																													                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ... </h1>
                          <p><a className="btn btn-warning" href="https://www.linkedin.com/in/rvats96/" target="_blank" rel="noopener noreferrer">View LinkedIn <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
