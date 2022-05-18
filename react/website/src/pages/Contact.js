import React from 'react';
import Location from './Location';
import Glyphicon from '../components/Glyphicon';
import Button from '../components/Button';

const Contact = props => {
    return (
        <section id='contact' className='container-fluid bg-grey'>
            <h2 className='text-center'>CONTACT</h2>
            <div className='row'>
                <div className='col-sm-5'>
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p><Glyphicon name='glyphicon-map-marker' /> Chicago, US</p>
                    <p><Glyphicon name='glyphicon-phone' /> +00 1515151515</p>
                    <p><Glyphicon name='glyphicon-envelope' /> myemail@something.com</p>
                </div>
                <div className='col-sm-7 slideanim slide'>
                    <div className='row'>
                        <div className='col-sm-6 form-group'>
                            <input className='form-control' id='name' name='name' placeholder='Name' type='text' required='' />
                        </div>
                        <div className='col-sm-6 form-group'>
                            <input className='form-control' id='email' name='email' placeholder='Email' type='email' required='' />
                        </div>
                    </div>
                    <textarea className='form-control' id='comments' name='comments' placeholder='Comment' rows='5'></textarea><br />
                    <div className='row'>
                        <div className='col-sm-12 form-group'>
                            <Button text='Send' className='btn-default pull-right' type='submit' disabled={true} />
                        </div>
                    </div>
                </div>
            </div>
            <Location />
        </section>
    );
}
export default Contact;