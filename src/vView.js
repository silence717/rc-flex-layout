import React from 'react';
import PropTypes from 'prop-types';
import { mainAxis, crossAxis, defaultProps, resolveStyle, omit } from './utils';

const defaultStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
}

export default function VView(props) {

    const { className, children, ...rest } = props;
    const styles = resolveStyle(defaultStyle, rest);
    const otherProps = omit(rest, ['width', 'height', 'gap', 'padding', 'flex', 'overflow', 'bgColor', 'hAlign', 'vAlign']);


    return <div className={className} style={styles} {...otherProps}>{ children }</div>;
};


VView.propTypes = {
    ...defaultProps,
    hAlign: PropTypes.oneOf(crossAxis),
    vAlign: PropTypes.oneOf(mainAxis),
};