import type { IconProps } from "@lucide/svelte";
import type { Component } from "svelte";

export type UserInfo = {
  readonly nickname: string;
  readonly name: string;
  readonly githubId: string;
  readonly email: string;
};

export type SkillInfo = {
  readonly proficient: string[];
  readonly learning: string[];
};

export type TimelineItem = {
  icon: Component<IconProps>;
  date: string;
  title: string;
  description: string;
};
