import { Component } from "react";

class Ga extends Component {
    if(window) {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            window.dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'YOUR_TRACKING_ID');

        return gtag;
    }

    
}
export default Ga;
