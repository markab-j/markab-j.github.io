import { SiAstro, SiBun, SiGithub, SiJavascript, SiReact, SiSvelte, SiTauri, SiTypescript } from 'react-icons/si';
import LogoLoop from './react-bits/LogoLoop';
import './TechLogoLoop.css';

const logos = [
	{ node: <SiAstro />, title: 'Astro', href: 'https://astro.build/' },
	{ node: <SiReact />, title: 'React', href: 'https://react.dev/' },
	{ node: <SiSvelte />, title: 'Svelte', href: 'https://svelte.dev/' },
	{ node: <SiSvelte />, title: 'SvelteKit', href: 'https://svelte.dev/docs/kit' },
	{ node: <SiJavascript />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
	{ node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org/' },
	{ node: <SiTauri />, title: 'Tauri', href: 'https://tauri.app/' },
	{ node: <SiBun />, title: 'Bun', href: 'https://bun.sh/' },
	{ node: <SiGithub />, title: 'GitHub', href: 'https://github.com/markab-j' },
];

export default function TechLogoLoop() {
	return (
		<div className="tech-logo-loop">
			<LogoLoop
				logos={logos}
				speed={45}
				logoHeight={36}
				gap={56}
				hoverSpeed={0}
				labels="inline"
				intro={false}
				ariaLabel="Languages, frameworks, and tools"
			/>
		</div>
	);
}
