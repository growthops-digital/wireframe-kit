import React from 'react';
import PropTypes from 'prop-types';

const paragraphClassNames = {
	large: 'paragraph-large',
	regular: 'paragraph-regular',
	small: 'paragraph-small',
};

const Text = ({variant, children, className}) => (
	<p className={`${paragraphClassNames[variant]} ${className}`.trim()}>
		{children}
	</p>
);

Text.propTypes = {
	variant: PropTypes.oneOf(['large', 'regular', 'small']),
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Text.defaultProps = {
	variant: 'regular',
	className: '',
};

export default Text;
