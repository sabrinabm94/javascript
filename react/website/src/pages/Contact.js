import React from 'react';

import Location from './Location';
import Glyphicon from '../components/Glyphicon';

const Contact = props => {
    return (
        <section id="contact" class="container-fluid bg-grey">
            <h2 class="text-center">CONTACT</h2>
            <div class="row">
                <div class="col-sm-5">
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p><Glyphicon name='glyphicon-map-marker' /> Chicago, US</p>
                    <p><Glyphicon name='glyphicon-phone' /> +00 1515151515</p>
                    <p><Glyphicon name='glyphicon-envelope' /> myemail@something.com</p>
                </div>
                <div class="col-sm-7 slideanim slide">
                    <div class="row">
                        <div class="col-sm-6 form-group">
                            <input class="form-control" id="name" name="name" placeholder="Name" type="text" required="" />
                        </div>
                        <div class="col-sm-6 form-group">
                            <input class="form-control" id="email" name="email" placeholder="Email" type="email" required="" />
                        </div>
                    </div>
                    <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
                    <div class="row">
                        <div class="col-sm-12 form-group">
                            <button class="btn btn-default pull-right" type="submit">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <Location />
        </section>
    );
}
export default Contact;