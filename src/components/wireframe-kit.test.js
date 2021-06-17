import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import WireframeKit from './wireframe-kit.js';

test('snapshot', () => {
	const result = renderer.create(
		<WireframeKit/>
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('icon exists', () => {
	render(<WireframeKit/>);

	const result = screen.getByText('⑆');

	expect(result).toBeDefined();
});

test('heading exists', () => {
	render(<WireframeKit/>);

	const result = screen.getByText('Wireframe Kit');

	expect(result).toBeDefined();
});

test('link text exists', () => {
	render(<WireframeKit/>);

	const result = screen.getByText('A GrowthOps Digital de(v/sign) project');

	expect(result).toBeDefined();
});
