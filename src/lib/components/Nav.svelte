<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    
    let pages = [
        { name: 'Accueil', path: '/' },
        { name: 'A Propos', path: '/about' },
        { name: 'Réalisation', path: '/real' },
        { name: 'Devis Gratuit', path: '/Devis gratuit' },
        { name: 'Contact', path: '/contact' }
    ];
    
    let currentPage = writable('');
    
    onMount(() => {
        page.subscribe(value => {
        currentPage.set(value.path);
        });
    });
    
    function navigateTo(path) {
        goto(path);
    }
</script>

<nav>
    <ul>
        {#each pages as { name, path }, index}
            <li>
                <a
                    href={path}
                    on:click|preventDefault={() => navigateTo(path)}
                    class:active={currentPage === path}
                >
                    {name}
                </a>
            </li>
        {/each}
    </ul>
</nav>
<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }
    
    ul {
        display: flex;
        list-style: none;
        padding: 0;
    }
    
    li {
        margin: 0 3rem;
    }
    
    a {
        font-size: 1.5rem;
        text-decoration: none;
        color: #fff;
        font-family: "Exo 2", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal; 
    }
    a:hover{
        color: #ff4942;
        animation: neon 2s forwards;

    }
    @keyframes neon {
        0% {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff4942, 0 0 30px #ff4942, 0 0 40px #ff4942;
        }
        100% {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff4942, 0 0 50px #ff4942, 0 0 60px #ff4942;
        }
    }
   
    
    .active {
        color: #ff4942;
        
    }

    @media (max-width: 768px) {
      nav ul li {
        margin: 0 1rem;
      }
      a{
          font-size: 1rem;
      }
    }
</style>