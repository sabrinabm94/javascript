import React from 'react';

const Alert = (props) => {
    return (
        <div data-testid="alert-component" className={`alert alert-${props.type}`} role="alert">
            {props.message}
        </div>
    );
}
export default Alert;
