import { React } from "react";

import Plan from "../components/Plan";

const Pricing = props => {
    return (
        <section id="pricing" className="container-fluid">
            <div className="text-center">
                <h2>Pricing</h2>
                <h4>Choose a payment plan that works for you</h4>
            </div>
            <div className="row slideanim slide">
                <div className="col-sm-4 col-xs-12">
                    <Plan title="Basic" description="20 Lorem, 15 Ipsum, 5 Dolor, 2 Sit, Endless Amet" value="$19 per month" link="/" />
                </div>
                <div className="col-sm-4 col-xs-12">
                    <Plan title="Pro" description="50 Lorem, 25 Ipsum, 10 Dolor, 5 Sit, Endless Amet" value="$29 per month" link="/" />
                </div>
                <div className="col-sm-4 col-xs-12">
                    <Plan title="Premium" description="100 Lorem, 50 Ipsum, 25 Dolor, 10 Sit, Endless Amet" value="$49 per month" link="/" />
                </div>
            </div>
        </section >
    );
};
export default Pricing;