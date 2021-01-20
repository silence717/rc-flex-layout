import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

function resolveStyle(props) {

    const { width, height, gap, flex, hAlign, vAlign, padding, overflow, bgColor } = props;

    return Object.assign({}, {
        width: isNaN(width) ? width : `${width}px`,
        height: isNaN(height) ? height : `${height}px`,
        justifyContent: hAlign,
        alignItems: vAlign,
        gap,
        flex,
        overflow,
        padding: isNaN(padding) ? padding : `${padding}px`,
        background: bgColor
    });
}

export const HView = props => {

    const { className, children, ...rest } = props;
    const styles = resolveStyle(rest);

    return <div data-layout-hgroup className={className} style={styles}>{ children }</div>;
}

export const VView = props => {

    const { className, children, ...rest } = props;
    const styles = resolveStyle(rest);

    return <div data-layout-vgroup className={className} style={styles}>{ children }</div>;

};

// 主轴方向
const mainAxis = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around'
];
// 交叉轴方向
const crossAxis = [
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch'
];

HView.propTypes = {
    ...defaultProps,
    hAlign: PropTypes.oneOf(mainAxis),
    vAlign: PropTypes.oneOf(crossAxis),
};

VView.propTypes = {
    ...defaultProps,
    hAlign: PropTypes.oneOf(crossAxis),
    vAlign: PropTypes.oneOf(mainAxis),
};

const defaultProps = {
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    gap: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    padding: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
    overflow: PropTypes.oneOf(['auto', 'hidden', 'scroll']),
    bgColor: PropTypes.string
};