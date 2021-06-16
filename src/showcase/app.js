import React from 'react';
import 'tailwindcss/tailwind.css';
import WireframeKit from '../components/wireframe-kit.js';
import '../css/wireframe.css';

const App = () => (
	<main className="flex h-screen bg-gray-900">
		<div className="m-auto">
			<WireframeKit label="Clicky"/>
		</div>
	</main>
);

export default App;
