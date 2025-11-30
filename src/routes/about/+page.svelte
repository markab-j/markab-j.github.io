<script lang="ts">
  import GraduationCap from "@lucide/svelte/icons/graduation-cap";
  import SkillSection from "$lib/components/about/skill-section.svelte";
  import TimelineSection from "$lib/components/about/timeline-section.svelte";
  import UserProfile from "$lib/components/about/user-profile.svelte";
  import type { TimelineItem, UserInfo } from "$lib/types/about";

  const userInfo: UserInfo = {
    nickname: "markab-j",
    name: "Jeong Yehwan",
    githubId: "markab-j",
    email: "markab.j.nn@gmail.com",
  };

  const timeline: TimelineItem[] = [
    {
      icon: GraduationCap,
      date: "2020 - 2025 (Expected)",
      title: "Hanbat National University",
      description: "Dept. of Information and Communication Engineering",
    },
  ];
</script>

<div class="mt-header"></div>
<section class="border-border bg-card/50 mx-auto max-w-5xl border-b px-4 py-10 sm:px-6">
  <UserProfile {userInfo} />
</section>

<section
  class="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8"
>
  <div class="lg:col-span-1">
    <TimelineSection {timeline} />
  </div>

  <SkillSection />
</section>
