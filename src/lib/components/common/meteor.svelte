<script lang="ts">
	import { cn } from "$lib/utils/css";

	interface Props {
		number?: number;
		minDelay?: number;
		maxDelay?: number;
		minDuration?: number;
		maxDuration?: number;
		angle?: number;
		class?: string;
	}

	let {
		number = 20,
		minDelay = 0.2,
		maxDelay = 1.2,
		minDuration = 2,
		maxDuration = 10,
		angle = 215,
		class: className
	}: Props = $props();

	let meteorStyles = $state<string[]>([]);

	$effect(() => {
		if (typeof window === "undefined") return;

		meteorStyles = [...new Array(number)].map(() => {
			const delay = Math.random() * (maxDelay - minDelay) + minDelay;
			const duration = Math.floor(Math.random() * (maxDuration - minDuration) + minDuration);

			return `
        --angle: ${-angle}deg;
        top: -5%;
        left: calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px);
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
      `;
		});
	});
</script>

{#each meteorStyles as style, i (i)}
	<div
		{style}
		class={cn(
			"animate-meteor opacity-0 pointer-events-none absolute size-0.5 rotate-[var(--angle)] rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
			className
		)}
	>
		<div
			class="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent"
		></div>
	</div>
{/each}