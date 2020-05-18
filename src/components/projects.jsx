import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/iot1.jpeg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://bit.ly/iot_rv2">Flood Awareness System using LoraWan</a></h3>
											<p className="icon">
												<span> Dr. Manas Khatua, Associate Professor, Dept. of CSE, IIT Guwahati </span>
												<p>An interactive human-node communication system was created using raspberry pi and Lora gateway.</p>
												<li><a href="https://bit.ly/iot_rv2" target="_blank" rel="noopener noreferrer"><i className="icon-open" /></a></li>
												
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/iot2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Smart security system using Facial Recognition</a></h3>
										<p className="icon">
											<span>Dr. Manas Khatua, Associate Professor, Dept. of CSE, IIT Guwahati </span>
											<p>A Raspberry pi based system for intrusion detection by classifying captured face as intruder and alert.</p>
										</p>	
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/speech.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://bit.ly/36Cj9yZ">Speech Based Vehicle Tutorial System in C</a></h3>
										<p className="icon">
											<span>Dr. P. K. Das, Professor, Dept. of CSE, IIT Guwahati </span>
											<p>A vehicle tutorial which works on users voice commands using Hidden Markov Model.</p>
											<li><a href="https://bit.ly/36Cj9yZ" target="_blank" rel="noopener noreferrer"><i className="icon-open" /></a></li>
										</p>	
										</div>
									</div>
								</div>
							</div>
							
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
