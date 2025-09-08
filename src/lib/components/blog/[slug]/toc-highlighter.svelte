<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	function setupTocObserver() {
		const headers = document.querySelectorAll<HTMLElement>('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
		const allTocLinks = document.querySelectorAll<HTMLAnchorElement>('.toc .toc-link');

		if (headers.length === 0 || allTocLinks.length === 0) {
			console.warn('TOC Observer: Required header or toc-link elements were not found.');
			return { destroy: () => {} };
		}

		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const tocLinkMap = new Map<string, HTMLAnchorElement>();

		allTocLinks.forEach(link => {
			const href = link.getAttribute('href');
			if (href) {
				tocLinkMap.set(href.substring(1), link);
			}
		});

		let lastActiveLink: HTMLAnchorElement | null = null;

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const currentId = entry.target.id;
					const currentActiveLink = tocLinkMap.get(currentId);

					if (currentActiveLink) {
						lastActiveLink?.classList.remove('highlight');
						currentActiveLink.classList.add('highlight');
						lastActiveLink = currentActiveLink;
					}
				}
			});
		}, {
			rootMargin: '-150px 0px -75% 0px',
		});

		headers.forEach(header => observer.observe(header));

		return {
			destroy: () => observer.disconnect(),
		};
	}

	let tocManager: { destroy: () => void; };

	onMount(() => {
		tocManager = setupTocObserver();
	});

	onDestroy(() => {
		if (tocManager) {
			tocManager.destroy();
		}
	});
</script>
