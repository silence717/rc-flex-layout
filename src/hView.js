import React from 'react';
import PropTypes from 'prop-types';
import { mainAxis, crossAxis, defaultProps, resolveStyle } from './utils';

const defaultStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
}

export default function HView(props) {

    const { className, children, ...rest } = props;
    const styles = resolveStyle(defaultStyle, rest);

    return <div className={className} style={styles}>{children}</div>
}

HView.propTypes = {
    ...defaultProps,
    hAlign: PropTypes.oneOf(mainAxis),
    vAlign: PropTypes.oneOf(crossAxis),
};