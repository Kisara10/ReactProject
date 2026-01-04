import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PropertyList from "../components/PropertyList";

const mockProperties = [
    {
        id: "prop1",
        price: 250000,
        bedrooms: 2,
        type: "House",
        location: "Test Location",
        picture: ["/test1.jpg"]
    },
    {
        id: "prop2",
        price: 400000,
        bedrooms: 3,
        type: "Flat",
        location: "Another Location",
        picture: ["/test2.jpg"]
    }
];

test("PropertyList renders the correct number of properties", () => {
    render(
        <MemoryRouter>
            <PropertyList
                properties={mockProperties}
                onAddToFavourites={() => {}}
                onViewDetails={() => {}}
            />
        </MemoryRouter>
    );

    expect(screen.getByText(/2 Bedroom House/i)).toBeInTheDocument();
    expect(screen.getByText(/3 Bedroom Flat/i)).toBeInTheDocument();
});
