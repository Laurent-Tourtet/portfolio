<script>
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let skills = [
    { name: 'Javascript', logo: '/logo-javascript.svg' },
    { name: 'HTML', logo: '/html-1.svg' },
    { name: 'Sass', logo: '/sass-1.svg' },
    { name: 'Svelte', logo: '/svelte-1.svg' },
    { name: 'Directus', logo: '/Directus.svg' },
    { name: 'AWS', logo: '/aws-2.svg' },
    { name: 'IonosPartner', logo: '/1and1-ionos-logo.svg' }
  ];

  let showSkills = true;
</script>

<div class="skills-container" transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}>
  {#if showSkills}
    {#each skills as skill, index (skill.name)}
      <div class="skill" style="animation-delay: {index * 0.5}s; opacity: 0;">
        <img src={skill.logo} alt={skill.name} width="50" class="logo-animation" />
      </div>
    {/each}
  {/if}
</div>

<style>
  .skills-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .skill {
    position: absolute;
    left: -100%;
    animation: slide-in 2s forwards;
  }

  @keyframes slide-in {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(100%);
      opacity: 1;
    }
  }

  .skill:nth-child(1) { left: 300px; }
  .skill:nth-child(2) { left: 400px; }
  .skill:nth-child(3) { left: 500px; }
  .skill:nth-child(4) { left: 600px; }
  .skill:nth-child(5) { left: 700px; }
  .skill:nth-child(6) { left: 800px; }
  .skill:nth-child(7) { left: 900px; }

  .logo-animation {
    animation: logo-animation 2s forwards;
  }

  @keyframes logo-animation {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
