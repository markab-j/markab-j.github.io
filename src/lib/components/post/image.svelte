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
  <figure class="not-prose flex flex-col items-center px-2">
    <div class={`flex ${alignClasses[align]} w-full`}>
      <img
        {src}
        {alt}
        style={width ? `width: ${width}` : ""}
        class="mt-0 mb-0 max-w-full"
        loading="lazy"
      />
    </div>
    <figcaption class="w-full text-center text-sm text-gray-500">
      {caption}
    </figcaption>
  </figure>
{:else}
  <div class={`flex px-2 ${alignClasses[align]} w-full`}>
    <img
      {src}
      {alt}
      style={width ? `width: ${width}` : ""}
      class="max-w-full"
      loading="lazy"
    />
  </div>
{/if}
