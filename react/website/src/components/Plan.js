import React from 'react';

const Plan = props => {
    return (
        <div className='panel panel-default text-center'>
            <div className='panel-heading'>
                <h1>{props.title}</h1>
            </div>
            <div className='panel-body'>
                <p>{props.description}</p>
            </div>
            <div className='panel-footer'>
                <h3>{props.value}</h3>
                <a href={props.link}>
                    <button className='btn btn-lg'>Sign Up</button>
                </a>
            </div>
        </div>
    );
}
export default Plan;