import React from 'react';
import 'tailwindcss/tailwind.css';
import '../css/wireframe.css';
import WireframeKit from '../components/wireframe-kit.js';
import Heading from '../components/heading.js';
import Text from '../components/text.js';

const Typography = () => (
	<section className="my-16 px-4">
		<div className="container mx-auto">
			<h2 className="text-2xl font-bold border-b border-gray-300 text-blue-600">Typography</h2>
		</div>
		<div className="mt-4 container mx-auto">
			<div className="flex-col space-y-6 max-w-3xl">
				<Heading variant="headline">Headline</Heading>
				<Heading variant="one">Heading one</Heading>
				<Heading variant="two">Heading two</Heading>
				<Heading variant="three">Heading three</Heading>
				<Heading variant="four">Heading four</Heading>
				<Heading variant="five">Heading five</Heading>
				<Heading variant="six">Heading six</Heading>
				<Heading variant="sixUppercase">Heading six uppercase</Heading>
				<Text variant="large">Paragraph large — Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</Text>
				<Text variant="regular">Paragraph regular — Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</Text>
				<Text variant="small">Paragraph small — Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</Text>
			</div>
		</div>
	</section>
);

const App = () => (
	<div className="antialiased">
		<main className="flex h-screen bg-gray-900">
			<div className="m-auto">
				<WireframeKit label="Clicky"/>
			</div>
		</main>
		<Typography/>
	</div>
);

export default App;
