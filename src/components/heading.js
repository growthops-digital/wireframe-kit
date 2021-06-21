import React from 'react';
import PropTypes from 'prop-types';

const headings = {
	one: {element: 'h1', className: 'heading-one'},
	two: {element: 'h2', className: 'heading-two'},
	three: {element: 'h3', className: 'heading-three'},
	four: {element: 'h4', className: 'heading-four'},
	five: {element: 'h5', className: 'heading-five'},
	six: {element: 'h6', className: 'heading-six'},
	sixUppercase: {element: 'h6', className: 'heading-six-uppercase'},
};

const Heading = ({variant, as, children}) => {
	const {element, className} = headings[variant];
	const RenderableElement = as ?? element;

	return (
		<RenderableElement className={className}>
			{children}
		</RenderableElement>
	);
};

Heading.propTypes = {
	variant: PropTypes.oneOf([
		'one', 'two', 'three', 'four', 'five', 'six', 'sixUppercase',
	]).isRequired,
	as: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Heading;
