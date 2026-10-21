import { useEffect, useState } from 'react';
import Particles from './react-bits/Particles';

export default function HeroParticles() {
	const [appearance, setAppearance] = useState({
		particleColors: ['#9CDBD9', '#74C5C2', '#318783'],
		lightMode: true,
		paused: false,
	});

	useEffect(() => {
		const root = document.documentElement;
		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const updateAppearance = () => {
			const tokens = getComputedStyle(root);
			setAppearance({
				particleColors: ['--brand-200', '--brand-300', '--brand-500'].map(token =>
					tokens.getPropertyValue(token).trim(),
				),
				lightMode: !root.classList.contains('theme-dark'),
				paused: motion.matches,
			});
		};
		updateAppearance();
		const observer = new MutationObserver(updateAppearance);
		observer.observe(root, { attributes: true, attributeFilter: ['class'] });
		motion.addEventListener('change', updateAppearance);
		return () => {
			observer.disconnect();
			motion.removeEventListener('change', updateAppearance);
		};
	}, []);

	return (
		<Particles
			{...appearance}
			particleCount={220}
			particleSpread={12}
			speed={0.1}
			particleBaseSize={100}
			glow={0.4}
			twinkle={0.2}
			moveParticlesOnHover
			hoverEffect="repel"
			connections
			opacity={0.55}
		/>
	);
}
