import React from 'react';
import styled from 'styled-components'

const StyledFigure = styled.figure`
max-width: 60%;

figcaption {
    font-style: italic
}
`
export default function Figure({ imageURL, caption }) {
    return (
        <figure>
            <img src={imageURL} alt="NASA Astronomy Picture of the Day" />
            <figcaption>Awesome pic taken on {caption}</figcaption>
        </figure>
    );
}

