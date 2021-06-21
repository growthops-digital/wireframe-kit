import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import Text from './text.js';

test('snapshot — text large', () => {
	const result = renderer.create(
		<Text variant="large">Foo</Text>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — text regular (explicit)', () => {
	const result = renderer.create(
		<Text variant="regular">Foo</Text>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — text regular', () => {
	const result = renderer.create(
		<Text>Foo</Text>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — text small', () => {
	const result = renderer.create(
		<Text variant="small">Foo</Text>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('text is rendered', () => {
	render(
		<Text variant="one">Foo</Text>,
	);

	const result = screen.getByText('Foo');

	expect(result).toBeDefined();
});

test('text is rendered as p', () => {
	const {container} = render(
		<Text>Foo</Text>,
	);

	const result = container.querySelector('p');

	expect(result).not.toBeNull();
});
