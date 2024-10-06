<script>
    import Title from "$lib/components/Title.svelte";
    import Subtitle from "$lib/components/Subtitle.svelte";
    import Nav from "$lib/components/Nav.svelte";
	import Skills from "$lib/components/Skills.svelte";
	
  </script>
  
  <div class="container">
    <Title />
    <Subtitle />
    <Skills />
    <!-- <Nav />   -->
    <a href="/about">
        <button type="button" class="enter-button">Bienvenue</button>
      </a>
  </div>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      padding: 2rem;
    }
   button {
      background-color: #0d0c0c; 
      border: 1px solid #ff4942;
      border-radius: 5px;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      /* box-shadow: 0 0 10px #ff4942, 0 0 20px #ff4942, 0 0 30px #ff4942, 0 0 40px #ff4942; */
      transition: box-shadow 0.3s ease-in-out;
    }
    button:hover {
      background-color: #ff4942; 
      color: #0d0c0c;
      box-shadow: 0 0 20px #ff4942, 0 0 30px #ff4942, 0 0 40px #ff4942, 0 0 50px #ff4942;
    }
  
    @media (max-width: 768px) {
      .container {
        padding: 1rem;
        height: 100vh;
        ;
      }

    }
  </style>
  