import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mainAxis, crossAxis, defaultProps, resolveStyle } from './utils';

const HGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export default function HView(props) {

    const { className, children, ...rest } = props;
    const styles = resolveStyle(rest);

    return <HGroup className={className} style={styles}>{children}</HGroup>
}

HView.propTypes = {
    ...defaultProps,
    hAlign: PropTypes.oneOf(mainAxis),
    vAlign: PropTypes.oneOf(crossAxis),
};