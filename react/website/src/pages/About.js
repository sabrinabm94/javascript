import React from 'react';
import Values from './Values';
import Glyphicon from '../components/Glyphicon';

const About = props => {
    return (
        <section id='about' className='container-fluid'>
            <div className='row'>
                <div className='col-sm-8'>
                    <h2>About Company Page</h2><br />
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <br />
                    <a className="link" href="#contact">
                        <button className='btn btn-default btn-lg'>Get in Touch</button>
                    </a>
                </div>
                <div className='col-sm-4'>
                    <Glyphicon name='glyphicon-signal logo' />
                </div>
            </div>
            <br />
            <Values />
        </section>
    );
}
export default About;