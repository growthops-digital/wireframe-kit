import React from 'react';
import PropTypes from 'prop-types';

const headings = {
	headline: {element: 'p', className: 'headline'},
	one: {element: 'h1', className: 'heading-one'},
	two: {element: 'h2', className: 'heading-two'},
	three: {element: 'h3', className: 'heading-three'},
	four: {element: 'h4', className: 'heading-four'},
	five: {element: 'h5', className: 'heading-five'},
	six: {element: 'h6', className: 'heading-six'},
	sixUppercase: {element: 'h6', className: 'heading-six-uppercase'},
};

const Heading = ({variant, as, children, className}) => {
	const {element, className: variantClassName} = headings[variant];
	const RenderableElement = as ?? element;

	return (
		<RenderableElement className={`${variantClassName} ${className}`.trim()}>
			{children}
		</RenderableElement>
	);
};

Heading.propTypes = {
	variant: PropTypes.oneOf([
		'headline',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'sixUppercase',
	]).isRequired,
	as: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
	className: '',
};

export default Heading;
