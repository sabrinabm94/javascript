import { React } from "react";
import Card from "../components/Card";

const Service = props => {
    return (
        <section id="services" className="container-fluid text-center">
            <h2>SERVICES</h2>
            <h4>What we offer</h4>
            <br />
            <div className="row slideanim slide">
                <div className="col-sm-4">
                    <Card iconName="glyphicon-off logo-small" title="POWER" subtitle="Lorem ipsum dolor sit amet.." />
                </div>
                <div className="col-sm-4">
                    <Card iconName="glyphicon-heart logo-small" title="LOVE" subtitle="Lorem ipsum dolor sit amet.."/>
                </div>
                <div className="col-sm-4">
                    <Card iconName="glyphicon-lock logo-small" title="JOB DONE" subtitle="Lorem ipsum dolor sit amet.."/>
                </div>
            </div>
            <br />
            <br />
            <div className="row slideanim slide">
                <div className="col-sm-4">
                    <Card iconName="glyphicon-leaf logo-small" title="GREEN" subtitle="Lorem ipsum dolor sit amet.."/>
                </div>
                <div className="col-sm-4">
                    <Card iconName="glyphicon-certificate logo-small" title="CERTIFIED" subtitle="Lorem ipsum dolor sit amet.."/>
                </div>
                <div className="col-sm-4">
                    <Card iconName="glyphicon-wrench logo-small" title="HARD WORK" subtitle="Lorem ipsum dolor sit amet.."/>
                </div>
            </div>
        </section>
    );
};
export default Service;