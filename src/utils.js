
import PropTypes from 'prop-types';

// 主轴方向
export const mainAxis = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around'
];
// 交叉轴方向
export const crossAxis = [
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch'
];

export const defaultProps = {
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

export function resolveStyle(props) {

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