import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import Heading from './heading.js';

test('snapshot — heading one', () => {
	const result = renderer.create(
		<Heading variant="one">Foo</Heading>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — heading two', () => {
	const result = renderer.create(
		<Heading variant="two">Foo</Heading>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — heading three', () => {
	const result = renderer.create(
		<Heading variant="three">Foo</Heading>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — heading four', () => {
	const result = renderer.create(
		<Heading variant="four">Foo</Heading>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — heading five', () => {
	const result = renderer.create(
		<Heading variant="five">Foo</Heading>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — heading six', () => {
	const result = renderer.create(
		<Heading variant="six">Foo</Heading>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — heading six uppercase', () => {
	const result = renderer.create(
		<Heading variant="sixUppercase">Foo</Heading>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('snapshot — heading one casted as heading two', () => {
	const result = renderer.create(
		<Heading variant="one" as="h2">Foo</Heading>,
	).toJSON();

	expect(result).toMatchSnapshot();
});

test('heading text is rendered', () => {
	render(
		<Heading variant="one">Foo</Heading>,
	);

	const result = screen.getByText('Foo');

	expect(result).toBeDefined();
});

test('heading variant one is rendered as h1', () => {
	const {container} = render(
		<Heading variant="one">Foo</Heading>,
	);

	const result = container.querySelector('h1');

	expect(result).not.toBeNull();
});

test('heading variant two is rendered as h2', () => {
	const {container} = render(
		<Heading variant="two">Foo</Heading>,
	);

	const result = container.querySelector('h2');

	expect(result).not.toBeNull();
});

test('heading variant three is rendered as h3', () => {
	const {container} = render(
		<Heading variant="three">Foo</Heading>,
	);

	const result = container.querySelector('h3');

	expect(result).not.toBeNull();
});

test('heading variant four is rendered as h4', () => {
	const {container} = render(
		<Heading variant="four">Foo</Heading>,
	);

	const result = container.querySelector('h4');

	expect(result).not.toBeNull();
});

test('heading variant five is rendered as h5', () => {
	const {container} = render(
		<Heading variant="five">Foo</Heading>,
	);

	const result = container.querySelector('h5');

	expect(result).not.toBeNull();
});

test('heading variant six is rendered as h6', () => {
	const {container} = render(
		<Heading variant="six">Foo</Heading>,
	);

	const result = container.querySelector('h6');

	expect(result).not.toBeNull();
});

test('heading variant six uppercase is rendered as h6', () => {
	const {container} = render(
		<Heading variant="sixUppercase">Foo</Heading>,
	);

	const result = container.querySelector('h6');

	expect(result).not.toBeNull();
});

test('heading variant one casted as h6 is rendered as h6', () => {
	const {container} = render(
		<Heading variant="one" as="h6">Foo</Heading>,
	);

	const result = container.querySelector('h6');

	expect(result).not.toBeNull();
});
