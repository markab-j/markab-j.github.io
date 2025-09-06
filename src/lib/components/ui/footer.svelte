<script lang="ts">
	import { Github, Mail } from '@lucide/svelte';

	const fullYear = new Date().getFullYear();
</script>

<footer class="bg-muted">
	<div
		class="mx-auto gap-4 flex flex-col items-center justify-between p-4 text-gray-600 dark:text-gray-400"
	>
		<div class="text-sm">
			<p>&copy; {fullYear} markab-j. All rights reserved.</p>
		</div>
		<div class="flex items-center space-x-4">
			<a
				href="https://github.com/markab-j"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub Profile"
				class="hover:text-gray-900 dark:hover:text-gray-100"
			>
				<Github size={20} />
			</a>
			<a
				href="mailto:your-email@example.com"
				aria-label="Email"
				class="hover:text-gray-900 dark:hover:text-gray-100"
				rel="external"
			>
				<Mail size={20} />
			</a>
		</div>
	</div>
</footer>
