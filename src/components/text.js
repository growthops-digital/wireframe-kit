import React from 'react';
import PropTypes from 'prop-types';
import {collapse} from '@growthops/ext-ramda';

const classNames = {
	lead: 'text-lead',
	regular: 'text-regular',
	small: 'text-small',
};

const Text = ({variant, children, as: Element, className}) => (
	<Element className={collapse(`${classNames[variant]} ${className}`)}>
		{children}
	</Element>
);

Text.propTypes = {
	variant: PropTypes.oneOf(['lead', 'regular', 'small']),
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	as: PropTypes.string,
};

Text.defaultProps = {
	variant: 'regular',
	className: '',
	as: 'p',
};

export default Text;
