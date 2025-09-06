import ghPages from "gh-pages";

await ghPages.publish(
  "build",
  {
    branch: "main",
    nojekyll: true,
  },
  (err) => {
    console.error(err);
  }
);

console.info("Published");
