import styled from 'styled-components';

const ResponsiveSize = styled.section `
    max-width: 1200px;
    margin: 0 auto;

    @media only screen and (max-width: 1200px) {
        max-width: 992px;
    }

    @media only screen and (max-width: 992px) {
        max-width: 768px;
    }

    @media only screen and (max-width: 768px) {
        max-width: 576px;
    }

    @media only screen and (max-width: 576px) {
        max-width: 360px
    }
`

export default ResponsiveSize;