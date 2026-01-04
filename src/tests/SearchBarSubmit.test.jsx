import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("SearchBar calls onSearch when form is submitted", () => {
    const mockSearch = jest.fn();

    render(<SearchBar onSearch={mockSearch} />);

    fireEvent.click(
        screen.getByRole("button", { name: /search/i })
    );

    expect(mockSearch).toHaveBeenCalled();
});

