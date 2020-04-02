import React, { Component } from 'react';
import '../../assets/scss/services.scss';
import { MdAttachMoney } from 'react-icons/md';
import { FaHandsHelping } from 'react-icons/fa';

export class Services extends Component {
    render() {
        return (
            <div className="services-div">
                  <section class="page-section" id="services">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <h2 class="section-heading" id="services-heading">Services</h2>
                            </div>
                        </div>
                    <div class="row text-center">
                        <div class="col-md-6" id="dollar-div">
                            <span class="fa-stack fa-4x">
                                <div className="dollar-container">
                                    <MdAttachMoney className="services-dollar-icon"/>
                                </div>
                            </span>
                        <h4 class="service-heading">Bankruptcy</h4>
                            <p id="services-content" id="bankruptcy-content">Lounsberry Law Office is dedicated to helping people and keeping costs low. Bankruptcy is much less stressful when someone takes the time to explain the process. We care about our clients. We provide free credit repair information after your bankruptcy is discharged, which takes approximately four months.</p>
                            </div>
                        <div class="col-md-6" id="hands-div">
                <span class="fa-stack fa-4x">
          <div className="dollar-container">
                <FaHandsHelping className="hands-icon"/>
                </div>
                </span>
            <h4 class="service-heading">Social Security Disability Assistance</h4>
                <p id="services-content">If you are suffering from a disability and you cannot do the work you did before, cannot adjust to other work because of your medical conditions, and your disability has lasted or is expected to last for at least one year or result in death, you may be eligible for SSD benefits.</p>
                </div>
            </div>
        </div>
    </section>
</div> 
        )
    }
}

export default Services;