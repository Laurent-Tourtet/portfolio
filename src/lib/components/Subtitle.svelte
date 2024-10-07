<script>
    let letters = 'Développeur web freelance passionné par la création de solutions numériques uniques'.split('');
    let animationClass = '';
  
    function startAnimation() {
      animationClass = 'neon-animation';
    }
  
    function endAnimation() {
      animationClass = 'neon-animation-reverse';
    }
  </script>
  
  
    
      <p on:mouseenter={startAnimation} on:mouseleave={endAnimation}>
        {#each letters as letter, index (`${letter}-${index}`)}
          <span class={animationClass} style:animation-delay={`${index * 0.03}s`}>{letter}</span>
        {/each}
      </p>
    
  
  
  <style>
   
  
    p {
      font-size: 1.4rem;
      margin: 0 auto 0.5rem auto;
      padding: 0;
      color: #f40606;
      font-family: "Exo 2", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal; 
    }
  
    .neon-animation {
      animation: neon 2s forwards;
    }
  
    .neon-animation-reverse {
      animation: neon-reverse 2s forwards;
    }
  
    @keyframes neon {
      0% {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff4da6, 0 0 30px #ff4da6, 0 0 40px #ff4da6;
      }
      100% {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6;
      }
    }
  
    @keyframes neon-reverse {
      0% {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6;
      }
      100% {
        text-shadow: none;
      }
    }

    @media (max-width: 768px) {
      p {
        font-size: 0.5rem;
        text-align: center;
      }
    }
  </style>
  