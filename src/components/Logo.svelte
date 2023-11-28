<script>
    import { onMount } from 'svelte';
    let items = [
      'js',
      'svelte',
      'node',
      'postgres',
      'sass',
      'react',
      'github',
      'tailwind',
      'directus',
      'docker'
    ];
  
    onMount(() => {
      // Add any additional logic you need on component mount
    });
  </script>
  
  <section>
    <article class="photo">
      {#each items as item, index}
        <div
          class={item}
          style={`animation-delay: ${index * 0.5}s`}
        ></div>
      {/each}
    </article>
  </section>
  
  <style>
    .photo {
      position: absolute;
      top: 30%;
      right: 40%;
      background-image: url('../assets/images/logo.png');
      background-size: cover;
      background-position: center;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      box-shadow: 0 0 0 10px #2ecc71, 0 0 0 15px #000;
    }
  
    .photo div {
      position: absolute;
      top: 45%;
      left: 50%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-position: center;
      background-size: cover;
      animation: rotate 5s linear infinite;
      transform: translate(-50%, -50%);
    }
  
    .js { background-image: url('../assets/images/js.png'); }
    .svelte { background-image: url('../assets/images/svelte.png'); }
    .node { background-image: url('../assets/images/node.png'); }
    .postgres { background-image: url('../assets/images/postgres.png'); }
    .sass { background-image: url('../assets/images/sass.png'); }
    .react { background-image: url('../assets/images/react.svg'); }
    .github { background-image: url('../assets/images/github.png'); }
    .tailwind { background-image: url('../assets/images/tailwind.webp'); }
    .directus { background-image: url('../assets/images/directus.jpg'); }
    .docker { background-image: url('../assets/images/docker.png'); }
  
    @keyframes rotate {
      0% {
        transform: translate(-50%, -50%) rotate(0deg) translate(200px) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg) translate(200px) rotate(-360deg);
      }
    }
  </style>
  


<!-- <script>
    import { link } from 'svelte-spa-router';
    import { onMount } from 'svelte';
   
</script>

<section>
    <article class="photo">
        <div class="js"></div>
        <div class="svelte"></div>
        <div class="node"></div>
        <div class="postgres"></div>
        <div class="sass"></div>
        <div class="react"></div>
        <div class="github"></div>
        <div class="tailwind"></div>
        <div class="directus"></div>
        <div class="docker"></div>
        </article>
    
</section>
<style>
    .photo {
        position: absolute;
        top: 30%;
        right: 40%;
        background-image: url('../assets/images/logo.png');
        background-size: cover;
        background-position: center;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        box-shadow: 0 0 0 10px #fff, 0 0 0 15px #000;
    }
    .js {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height:100px;
    background-image: url('../assets/images/js.png');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
    
}
.svelte {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height:100px;
    background-image: url('../assets/images/svelte.png');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
    animation-delay: 2s;  
}
.node {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height:100px;
    background-image: url('../assets/images/node.png');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
    animation-delay: 3s;  
}
.postgres {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height:100px;
  
    background-image: url('../assets/images/postgres.png');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
    animation-delay: 3.5s;  
}
.sass {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height:100px;
    background-image: url('../assets/images/sass.png');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
    animation-delay: 4s;  
}
.react {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height:100px;
    background-image: url('../assets/images/react.svg');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
    animation-delay: 4.5s;  
}
.github {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height:100px;
    background-image: url('../assets/images/github.png');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
    animation-delay: 5.5s;  
}
.tailwind {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height:100px;
    background-image: url('../assets/images/tailwind.webp');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
    animation-delay: 6s;  
}
.directus {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height:100px;
    background-image: url('../assets/images/directus.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
    animation-delay: 6.5s;  
}
.docker {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height:100px;
    background-image: url('../assets/images/docker.png');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    animation: rotate 5s linear infinite;
    animation-delay: 7.5s;  
}


@keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0deg) translate(200px) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg) translate(200px) rotate(-360deg);
    }
}
    </style> -->