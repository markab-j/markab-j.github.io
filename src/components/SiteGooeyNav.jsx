import { useEffect, useState } from 'react';
import GooeyNav from './react-bits/GooeyNav';

export default function SiteGooeyNav({ items, initialActiveIndex }) {
	const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
	const [appearance, setAppearance] = useState({
		theme: 'light',
		color: '#9CDBD9',
		colors: ['#DCEDC1', '#FFD3B6', '#FFAAA5'],
		activeTextColor: '#123735',
	});

	useEffect(() => {
		const updatePage = () => {
			const pathname = `${window.location.pathname.replace(/\/$/, '')}/`;
			const index = items.findIndex(({ href }) =>
				href === '/' ? pathname === '/' : pathname.startsWith(href),
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

	return (
		<GooeyNav
			items={items}
			activeIndex={activeIndex}
			onChange={setActiveIndex}
			{...appearance}
			style={{
				'--gn-frame': 'var(--surface-lime)',
				'--gn-frame-edge': 'var(--border-accent)',
				'--gn-frame-highlight': 'var(--gray-999_40)',
				'--gn-frame-shadow': 'var(--shadow-md)',
				'--gn-ink': 'var(--gray-100)',
				'--gn-muted': 'var(--gray-300)',
			}}
		/>
	);
}
