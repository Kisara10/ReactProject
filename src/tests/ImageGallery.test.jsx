import { render, screen, fireEvent } from "@testing-library/react";
import ImageGallery from "../components/ImageGallery";

test("ImageGallery changes main image when thumbnail is clicked", () => {
    const mockPictures = [
        "/image1.jpg",
        "/image2.jpg",
        "/image3.jpg"
    ];

    render(<ImageGallery picture={mockPictures} />);

    const mainImage = screen.getByAltText("property");
    expect(mainImage).toHaveAttribute("src", mockPictures[0]);

    const thumbnails = screen.getAllByAltText("property view");
    fireEvent.click(thumbnails[1]);

    expect(mainImage).toHaveAttribute("src", mockPictures[1]);
});
