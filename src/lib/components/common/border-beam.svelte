<script lang="ts">
	import { Motion, type Transition } from 'svelte-motion';
	import { cn } from "$lib/utils/css";

	interface Props {
		size?: number;
		duration?: number;
		delay?: number;
		colorFrom?: string;
		colorTo?: string;
		transition?: Transition;
		class?: string;
		style?: string;
		reverse?: boolean;
		initialOffset?: number;
		borderWidth?: number;
	}

	let {
		class: className,
		size = 50,
		delay = 0,
		duration = 6,
		colorFrom = "#ffaa40",
		colorTo = "#9c40ff",
		transition,
		style = "",
		reverse = false,
		initialOffset = 0,
		borderWidth = 1
	}: Props = $props();
</script>

<div
	class="pointer-events-none absolute inset-0 rounded-[inherit] border-[length:var(--border-beam-width)] border-transparent [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box]"
	style:--border-beam-width="{borderWidth}px"
>
	<Motion
		initial={{ offsetDistance: `${initialOffset}%` }}
		animate={{
			offsetDistance: reverse
				? [`${100 - initialOffset}%`, `${-initialOffset}%`]
				: [`${initialOffset}%`, `${100 + initialOffset}%`]
		}}
		transition={{
			repeat: Infinity,
			ease: "linear",
			duration,
			delay: -delay,
			...transition
		}}
		let:motion
	>
		<div
			use:motion
			class={cn(
				"absolute aspect-square",
				"bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
				className
			)}
			style="
        width: {size}px;
        offset-path: rect(0 auto auto 0 round {size}px);
        --color-from: {colorFrom};
        --color-to: {colorTo};
        {style}
      "
		></div>
	</Motion>
</div>