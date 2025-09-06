<script lang="ts">
  import { Github, GraduationCap, Mail } from "@lucide/svelte";

  const userInfo = {
    nickname: "markab-j",
    name: "Jeong Yehwan",
    githubUrl: "github.com/markab-j",
    email: "markab.j.nn@gmail.com",
  } as const;

  const skills = {
    proficient: ["TypeScript", "JavaScript", "Express.js", "NestJS"],
    learning: ["React", "Svelte", "SvelteKit"],
  };

  const timeline = [
    {
      icon: GraduationCap,
      date: "2020 - 2025 (Expected)",
      title: "Hanbat National University",
      description: "Dept. of Information and Communication Engineering",
    },
  ];
</script>

<section class="mt-header border-border bg-card/50 border-b">
  <div
    class="mx-auto flex max-w-5xl flex-col items-center px-4 py-10 text-center sm:px-6 md:flex-row md:items-start md:space-x-12 md:text-left lg:px-8"
  >
    <div class="flex-shrink-0">
      <img
        src="https://github.com/{userInfo.nickname}.png"
        alt="Profile of {userInfo.nickname}"
        class="border-foreground/10 size-36 rounded-full border-4 object-cover shadow-lg"
      />
    </div>
    <div class="mt-6 md:mt-0">
      <h1 class="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
        {userInfo.name} ({userInfo.nickname})
      </h1>
      <p class="text-muted-foreground mt-4 max-w-xl text-lg">
        만들고 그 결과를 보여주는 순간을 가장 좋아합니다.
      </p>
      <div class="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
        <a
          href="https://{userInfo.githubUrl}"
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
</section>

<section
  class="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8"
>
  <div class="lg:col-span-1">
    <h2 class="mb-4 text-center text-2xl font-bold tracking-tight lg:text-left">My Journey</h2>
    <ul class="flow-root">
      {#each timeline as item, i (item.title)}
        <li class="flex gap-4">
          <div class="relative flex flex-col items-center">
            <div class="bg-background z-10 flex size-8 items-center justify-center rounded-full">
              <svelte:component
                this={item.icon}
                class="size-icon"
              />
            </div>
            {#if i !== timeline.length - 1}
              <div class="bg-border w-0.5 flex-grow"></div>
            {/if}
          </div>
          <div class="flex-grow pb-8">
            <p class="text-muted-foreground text-xs font-medium">{item.date}</p>
            <p class="mt-0.5 text-base font-semibold">{item.title}</p>
            <p class="text-muted-foreground mt-1 text-sm">{item.description}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>

  <section class="border-border bg-card/50 space-y-6 rounded-xl border p-8 lg:col-span-2">
    <h2 class="text-2xl font-bold tracking-tight">Skills</h2>
    <div>
      <h3 class="text-accent-foreground/80 text-base font-semibold">Proficient</h3>
      <div class="mt-3 flex flex-wrap gap-2">
        {#each skills.proficient as skill (skill)}
          <span class="rounded-md border border-gray-200 px-2 py-0.5 text-sm font-medium">
            {skill}
          </span>
        {/each}
      </div>
    </div>
    <div>
      <h3 class="text-accent-foreground/80 text-base font-semibold">Learning</h3>
      <div class="mt-3 flex flex-wrap gap-2">
        {#each skills.learning as skill (skill)}
          <span
            class="rounded-md border border-dashed border-gray-200 px-2 py-0.5 text-sm font-medium"
          >
            {skill}
          </span>
        {/each}
      </div>
    </div>
  </section>
</section>
