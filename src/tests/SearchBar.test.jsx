import {render, screen} from "@testing-library/react";
import SearchBar from "../components/SearchBar.jsx";


test("SearchBar renders search inputs", () => {
    render(<SearchBar onSearch={() => {}}/>);

    expect(screen.getByText(/Search Properties/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Property Type/i)).toBeInTheDocument();
});