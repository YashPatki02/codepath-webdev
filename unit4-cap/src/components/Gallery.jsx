import React from "react";

const Gallery = ({ images }) => {
    return (
        <div>
            <h3>Previous Screenshots:</h3>
            {images.length ? (
                <ul>
                    {images.map((image, index) => (
                        <li key={index}>
                            <img
                                className="screenshot-thumbnail"
                                src={image}
                                alt={`Screenshot ${index + 1}`}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No screenshots available.</p>
            )}
        </div>
    );
};

export default Gallery;
