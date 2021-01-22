import React from 'react';
import PropTypes from 'prop-types';
import { mainAxis, crossAxis, defaultProps, resolveStyle, omit } from './utils';

const defaultStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
}

export default function HView(props) {

    const { className, children, ...rest } = props;
    const styles = resolveStyle(defaultStyle, rest);
    const otherProps = omit(rest, ['width', 'height', 'gap', 'padding', 'flex', 'overflow', 'bgColor', 'hAlign', 'vAlign']);
    console.log(otherProps);

    return <div className={className} style={styles} {...otherProps}>{children}</div>
}

HView.propTypes = {
    ...defaultProps,
    hAlign: PropTypes.oneOf(mainAxis),
    vAlign: PropTypes.oneOf(crossAxis),
};