<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { browser } from "$app/environment";
  import Particles from "$lib/components/common/particles.svelte";

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
      <p class="scroll-reveal text-lg leading-relaxed text-center">
        이유는 단순합니다. 그저 만들고 싶어서 만듭니다.
      </p>

      <p class="scroll-reveal text-lg leading-relaxed">
        여기에는 완벽하게 정리된 지식보다, 직접 부딪히며 얻은 경험과 고민이 그대로 남아 있습니다.
        때로는 서툴고 불완전할지라도, 그런 과정 하나하나가 저를 조금씩 앞으로 나아가게 합니다.
      </p>

      <p class="scroll-reveal text-lg leading-relaxed">
        기술을 파고들고 아이디어를 실제로 구현하는 과정 자체가 즐겁습니다.
      </p>
      <div class="h-[25vh]"></div>
    </div>
  </div>
</div>
