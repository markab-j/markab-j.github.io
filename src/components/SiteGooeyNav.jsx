import { useEffect, useState } from 'react';
import GooeyNav from './react-bits/GooeyNav';
import StarBorder from './react-bits/StarBorder';

export default function SiteGooeyNav({ items, initialActiveIndex }) {
	const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
	const [appearance, setAppearance] = useState({
		theme: 'light',
		color: '#9CDBD9',
		colors: ['#DCEDC1', '#FFD3B6', '#FFAAA5'],
		activeTextColor: '#123735',
		starColor: '#205e5b',
		starTrailColor: '#853e3a',
	});

	useEffect(() => {
		const updatePage = () => {
			const pathname = window.location.pathname.replace(/^\/index\.html$/, '/').replace(/(?:\.html|\/)$/, '') || '/';
			const index = items.findIndex(({ href }) =>
				pathname === href || (href !== '/' && pathname.startsWith(`${href}/`)),
			);
			setActiveIndex(Math.max(0, index));
		};
		const updateTheme = () => {
			const root = document.documentElement;
			const tokens = getComputedStyle(root);
			setAppearance({
				theme: root.classList.contains('theme-dark') ? 'dark' : 'light',
				color: tokens.getPropertyValue('--color-mint').trim(),
				colors: ['--color-lime', '--color-peach', '--color-coral'].map(token =>
					tokens.getPropertyValue(token).trim(),
				),
				activeTextColor: tokens.getPropertyValue('--text-on-pastel').trim(),
				starColor: tokens.getPropertyValue('--link-color').trim(),
				starTrailColor: tokens.getPropertyValue('--ink-coral').trim(),
			});
		};
		updatePage();
		updateTheme();
		document.addEventListener('astro:after-swap', updatePage);
		const observer = new MutationObserver(updateTheme);
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
		return () => {
			document.removeEventListener('astro:after-swap', updatePage);
			observer.disconnect();
		};
	}, [items]);

	const { starColor, starTrailColor, ...navAppearance } = appearance;

	return (
		<StarBorder
			as="div"
			color={starColor}
			trailColor={starTrailColor}
			duration={6}
			direction="clockwise"
			stars={1}
			trailLength={0.3}
			thickness={1}
			radius={999}
			glow={0.7}
			hover="none"
			sparkle
			clickPulse
			theme={appearance.theme}
			backgroundColor="var(--gray-999)"
			textColor="var(--gray-100)"
			borderColor="var(--gray-800)"
			style={{ padding: '6px' }}
		>
			<GooeyNav
				items={items}
				activeIndex={activeIndex}
				onChange={setActiveIndex}
				{...navAppearance}
				size="lg"
				frame={false}
				style={{ '--gn-ink': 'var(--gray-100)', '--gn-muted': 'var(--gray-300)' }}
			/>
		</StarBorder>
	);
}
