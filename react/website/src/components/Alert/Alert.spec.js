import React, { render, screen } from "@testing-library/react";

import Alert from "./Alert";

describe("Alert", () => {
    const message = "Be careful!";
    //fit("Shoud render the component", () => {
    it("Shoud render the component", () => {
        render(<Alert />);

        expect(screen.getByTestId("alert-component")).toBeInTheDocument();
        //expect(screen.getByTestId("alert-component")).not.toBeInTheDocument();
    });

    it("Shoud render the component with props", () => {
        render(<Alert type="danger" message={message} />);

        expect(screen.getByTestId("alert-component")).toHaveClass("alert alert-danger");
        expect(screen.getByTestId("alert-component")).not.toHaveClass("alert alert-success");
        expect(screen.getByText(message)).toBeInTheDocument();
    });

    it("Shoud render the component with the role attribute", () => {
        render(<Alert message={message} />);

        expect(screen.getByTestId("alert-component")).toHaveAttribute("role").toBe("alert");
        //expect(container).toHaveAttribute('src', imageUrl);
        //expect(screen.getByText('Institucional')).not.toBeEmptyDOMElement();
    });
});