<script lang="ts">
	import type { UserInfo } from '$lib/types/about';
	import { Github, Mail } from '@lucide/svelte';

	interface UserProfileProps {
		userInfo: UserInfo;
	}

	const { userInfo }: UserProfileProps = $props();
</script>

<div class="flex flex-col items-center text-center md:flex-row md:items-start md:space-x-12 md:text-left lg:px-8">
	<div class="flex-shrink-0">
		<img
			src="https://github.com/{userInfo.githubId}.png"
			alt="Profile of {userInfo.nickname}"
			class="border-foreground/10 size-36 rounded-full border-4 object-cover shadow-lg"
		/>
	</div>
	<div class="mt-6 md:mt-0">
		<h1 class="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
			{userInfo.name}
		</h1>
		<p class="text-muted-foreground mt-4 max-w-xl text-lg">
			만들고 그 결과를 보여주는 순간을 가장 좋아합니다.
		</p>
		<div class="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
			<a
				href="https://github.com/{userInfo.githubId}"
				target="_blank"
				rel="noopener noreferrer external"
				class="border-input hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center
								 rounded-md border
								 bg-transparent px-4 py-2 text-sm
								 font-medium
								 shadow-sm transition-all hover:shadow-md"
			>
				<Github class="size-icon mr-2" />
				GitHub
			</a>

			<a
				href="mailto:{userInfo.email}"
				rel="external"
				class="border-input hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center
								 rounded-md border
								 bg-transparent px-4 py-2 text-sm
								 font-medium
								 shadow-sm transition-all hover:shadow-md"
			>
				<Mail class="size-icon mr-2" />
				Contact
			</a>
		</div>
	</div>
</div>