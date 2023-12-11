import React from 'react';

const ExampleCarouselImage = ({ text, img }) => {
    return (
        <div>
            <img
                className="d-block w-100"
                src={img}
                alt={`Slide with text: ${text}`}
            />
        </div>
    );
};

export default ExampleCarouselImage;
