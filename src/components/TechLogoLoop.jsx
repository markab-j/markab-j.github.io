import { SiAstro, SiBun, SiGithub, SiReact, SiTypescript } from 'react-icons/si';
import LogoLoop from './react-bits/LogoLoop';
import './TechLogoLoop.css';

const logos = [
	{ node: <SiAstro />, title: 'Astro', href: 'https://astro.build/' },
	{ node: <SiReact />, title: 'React', href: 'https://react.dev/' },
	{ node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org/' },
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
				ariaLabel="Tools used to build this website"
			/>
		</div>
	);
}
