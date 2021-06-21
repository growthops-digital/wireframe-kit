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
			<Heading variant="one">H1 — Heading one</Heading>
			<Heading variant="two">H2 — Heading two</Heading>
			<Heading variant="three">H3 — Heading three</Heading>
			<Heading variant="four">H4 — Heading four</Heading>
			<Heading variant="five">H5 — Heading five</Heading>
			<Heading variant="six">H6 — Heading six</Heading>
			<Heading variant="sixUppercase">H6 — Heading six uppercase</Heading>
			<Text variant="large">Paragraph large — Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</Text>
			<Text variant="regular">Paragraph regular — Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</Text>
			<Text variant="small">Paragraph small — Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</Text>
		</div>
	</section>
);

const App = () => (
	<div>
		<main className="flex h-screen bg-gray-900">
			<div className="m-auto">
				<WireframeKit label="Clicky"/>
			</div>
		</main>
		<Typography/>
	</div>
);

export default App;
