import React from 'react';
import PropTypes from 'prop-types';
import { mainAxis, crossAxis, defaultProps, resolveStyle } from './utils';

const defaultStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
}

export default function VView(props) {

    const { className, children, ...rest } = props;
    const styles = resolveStyle(defaultStyle, rest);

    return <div className={className} style={styles}>{ children }</div>;
};


VView.propTypes = {
    ...defaultProps,
    hAlign: PropTypes.oneOf(crossAxis),
    vAlign: PropTypes.oneOf(mainAxis),
};