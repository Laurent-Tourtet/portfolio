<script>
    let letters = 'YAUTEDEV'.split('');
    let animationClass = '';
  
    function startAnimation() {
      animationClass = 'neon-animation';
    }
  
    function endAnimation() {
      animationClass = 'neon-animation-reverse';
    }
  </script>
  
  <h1 on:mouseenter={startAnimation} on:mouseleave={endAnimation}>
    {#each letters as letter, index (`${letter}-${index}`)}
      <span class={animationClass} style:animation-delay={`${index * 0.08}s`}>{letter}</span>
    {/each}
  </h1>
  
  <style>
    h1 {
      font-size: 5rem;
      margin: 0 auto 0.7rem auto;
      padding: 0;
      font-family: "Sixtyfour Convergence", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      font-variation-settings:
        "BLED" 0,
        "SCAN" 0,
        "XELA" 0,
        "YELA" 0;
    }
  
    .neon-animation {
      animation: neon 2s forwards;
    }
  
    .neon-animation-reverse {
      animation: neon-reverse 2s forwards;
    }
  
    @keyframes neon {
      0% {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #23b2eb, 0 0 30px #23b2eb, 0 0 40px #23b2eb;
      }
      100% {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #23b2eb, 0 0 50px #23b2eb, 0 0 60px #23b2eb;
      }
    }
  
    @keyframes neon-reverse {
      0% {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #23b2eb, 0 0 50px #23b2eb, 0 0 60px #23b2eb;
      }
      100% {
        text-shadow: none;
      }
    }
  
    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
        text-align: center;
      }
    }
  </style>
  