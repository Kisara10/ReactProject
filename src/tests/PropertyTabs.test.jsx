import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PropertyTabs from "../components/PropertyTabs";

const mockProperty = {
    type: "House",
    bedrooms: 3,
    tenure: "Freehold",
    price: 350000,
    description: "Nice family house",
    location: "Test Road",
    coordinates: {
        lat: 51.36,
        lng: 0.07
    },
    added: {
        day: 10,
        month: "January",
        year: 2023
    }
};

test("PropertyTabs switches content when tabs are clicked", () => {
    render(
        <MemoryRouter>
            <PropertyTabs property={mockProperty} />
        </MemoryRouter>
    );

    expect(
        screen.getByText(/Nice family house/i)
    ).toBeInTheDocument();

    fireEvent.click(
        screen.getByRole("button", { name: /details/i })
    );

    expect(
        screen.getByText(/Bedrooms:/i)
    ).toBeInTheDocument();

    fireEvent.click(
        screen.getByRole("button", { name: /location/i })
    );

    expect(
        screen.getByTitle(/google map/i)
    ).toBeInTheDocument();
});
