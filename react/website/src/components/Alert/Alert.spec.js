import React, { render, screen } from "@testing-library/react";

import Alert from "./Alert";

describe("Alert", () => {
    it("Shoud render the component", () => {
        render(<Alert />);

        expect(screen.getByTestId("alert-component")).toBeInTheDocument();
    });
});