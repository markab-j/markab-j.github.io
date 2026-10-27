import { useEffect, useState } from 'react';
import Masonry from './react-bits/Masonry';

export default function WorkMasonry({ items, ...props }) {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		const root = document.documentElement;
		const updateTheme = () => setDark(root.classList.contains('theme-dark'));
		updateTheme();
		const observer = new MutationObserver(updateTheme);
		observer.observe(root, { attributes: true, attributeFilter: ['class'] });
		return () => observer.disconnect();
	}, []);

	return (
		<Masonry
			{...props}
			items={items.map(({ img_dark, ...item }) => ({
				...item,
				img: dark && img_dark ? img_dark : item.img,
			}))}
		/>
	);
}
