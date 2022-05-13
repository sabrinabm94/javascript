import React from 'react';

const Plan = props => {
    return (
        <div class="panel panel-default text-center">
            <div class="panel-heading">
                <h1>{props.title}</h1>
            </div>
            <div class="panel-body">
                <p>{props.description}</p>
            </div>
            <div class="panel-footer">
                <h3>{props.value}</h3>
                <a href={props.link}>
                    <button class="btn btn-lg">Sign Up</button>
                </a>
            </div>
        </div>
    );
}
export default Plan;