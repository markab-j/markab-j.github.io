<script lang="ts">
  type Align = "left" | "center" | "right";

  interface ImageProps {
    src: string;
    alt: string;
    align?: Align;
    width?: string;
    caption?: string;
  }

  let { src, alt, align = "center", width, caption }: ImageProps = $props();

  const alignClasses: Record<Align, string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };
</script>

{#if caption}
  <figure class="my-6 flex flex-col items-center">
    <div class={`flex ${alignClasses[align]} w-full`}>
      <img
        {src}
        {alt}
        style={width ? `width: ${width}` : ""}
        class="max-w-full"
        loading="lazy"
      />
    </div>
    <figcaption class="border-t-border w-[50%] border-t py-2 text-center text-sm text-gray-500">
      {caption}
    </figcaption>
  </figure>
{:else}
  <div class={`my-6 flex ${alignClasses[align]} w-full`}>
    <img
      {src}
      {alt}
      style={width ? `width: ${width}` : ""}
      class="max-w-full"
      loading="lazy"
    />
  </div>
{/if}
