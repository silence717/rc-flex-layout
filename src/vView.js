import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mainAxis, crossAxis, defaultProps, resolveStyle } from './utils';

const VGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export default function VView(props) {

    const { className, children, ...rest } = props;
    const styles = resolveStyle(rest);

    return <VGroup className={className} style={styles}>{ children }</VGroup>;
};


VView.propTypes = {
    ...defaultProps,
    hAlign: PropTypes.oneOf(crossAxis),
    vAlign: PropTypes.oneOf(mainAxis),
};