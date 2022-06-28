import React, { Component } from "react";

class Ga extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (typeof window == 'undefined') {
            return;
        }
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            window.dataLayer.push(arguments);
        }
        
        gtag('js', new Date());
        gtag('config', 'YOUR_TRACKING_ID');
    }
}
export default Ga;
