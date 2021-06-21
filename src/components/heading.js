import React from 'react';
import PropTypes from 'prop-types';

const headings = {
	one: {html: 'h1', className: 'heading-one'},
	two: {html: 'h2', className: 'heading-two'},
	three: {html: 'h3', className: 'heading-three'},
	four: {html: 'h4', className: 'heading-four'},
	five: {html: 'h5', className: 'heading-five'},
	six: {html: 'h6', className: 'heading-six'},
	sixUppercase: {html: 'h6', className: 'heading-six-uppercase'},
};

const Heading = ({variant, as, children}) => {
	const Element = as ?? headings[variant].html;

	return (
		<Element className={headings[variant].className}>
			{children}
		</Element>
	);
};

Heading.propTypes = {
	variant: PropTypes.string.isRequired,
	as: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Heading;
