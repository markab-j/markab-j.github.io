<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { browser } from "$app/environment";
  import Particles from "$lib/components/common/particles.svelte";
  import BentoGrid from "@/components/home/bento-grid.svelte";

  function wordsAnimation() {
    gsap.set(".words", {
      yPercent: -66.66,
    });

    gsap
      .timeline({
        repeat: -1,
      })
      .to(".words", {
        yPercent: -33.33,
        duration: 0.7,
        ease: "power3.inOut",
        delay: 1.5,
      })
      .to(".words", {
        yPercent: 0,
        duration: 0.7,
        ease: "power3.inOut",
        delay: 1.5,
      });
  }

  onMount(() => {
    if (browser) {
      gsap.registerPlugin(ScrollTrigger);
      wordsAnimation();

      const animatedElements: HTMLElement[] = gsap.utils.toArray(".scroll-reveal");
      animatedElements.forEach((elem) => {
        gsap.from(elem, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  });
</script>

<svelte:head>
  <title>markab-j's Blog</title>
</svelte:head>

<div>
  <div class="sticky top-0 -z-10 h-screen">
    <div class="-mt-header flex h-full items-center justify-center">
      <div class="flex text-7xl font-extrabold md:text-9xl">
        <span class="mr-6">I'm</span>
        <div class="inline-block h-[1.1em] overflow-hidden align-top">
          <div class="words">
            <p class="pb-[0.2em]">Not a Developer</p>
            <p class="pb-[0.2em]">Just an Enjoyer</p>
            <p class="pb-[0.2em]">Not a Developer</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-background/80 relative backdrop-blur-md">
    <Particles
      class="absolute inset-0 z-0"
      quantity={100}
      ease={80}
      color="#333"
      refresh
    />
    <div class="mx-auto max-w-3xl space-y-8 p-8">
      <div class="h-[25vh]"></div>
      <h2 class="scroll-reveal text-4xl font-bold">Why Enjoyer?</h2>
      <p class="scroll-reveal text-center text-lg leading-relaxed">
        이유는 단순합니다. 그저 만들고 싶어서 만듭니다.
      </p>

      <BentoGrid class="scroll-reveal" />
      <div class="h-[25vh]"></div>
    </div>
  </div>
</div>
