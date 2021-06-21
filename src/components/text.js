import React from 'react';
import PropTypes from 'prop-types';

const paragraphClassNames = {
	large: 'paragraph-large',
	regular: 'paragraph-regular',
	small: 'paragraph-small',
};

const Text = ({variant, children}) => (
	<p className={paragraphClassNames[variant]}>
		{children}
	</p>
);

Text.propTypes = {
	variant: PropTypes.oneOf(['large', 'regular', 'small']),
	children: PropTypes.node.isRequired,
};

Text.defaultProps = {
	variant: 'regular',
};

export default Text;
