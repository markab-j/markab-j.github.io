import { dev } from "$app/environment";

export const siteTitle = "markab-j's Blog";
export const siteDescription = "Development Blog";
export const siteUrl = dev ? "https://localhost:5173" : "https://markab-j.github.io";
export const siteAuthor = {
  name: "markab-j, Jeong Yehwan",
  email: "markab.j.nn@gmail.com",
  link: `${siteUrl}/about`,
};
