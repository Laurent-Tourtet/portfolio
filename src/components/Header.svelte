

<script>
    import { link } from 'svelte-spa-router';
    import {onMount} from 'svelte';
    import {writable} from 'svelte/store';
    import {get} from 'svelte/store';
   import '../global.scss'

</script>
<header>

    <h1>Mon Univers du <span id="dev">dev</span></h1>

    <nav>
        <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">Mes Skills</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>
<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5%;
        background-color: var(--color-header-background);
        color: var(--color-header-text);
        height: 10vh;
    }

    h1 {
        font-size: 2rem;
        font-weight: 700;
    }

    #dev {
        color: var(--color-link-background-active);
    }

    nav ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
    }

    nav ul li a {
        color: var(--color-header-text);
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 500;
        padding: 0 1rem;
    }

    nav ul li a:hover {
        color: var(--color-link-background-active);
    }

    nav ul li a.active {
        color: var(--color-link-background-active);
    }

    @media screen and (max-width: 768px) {
        header {
            flex-direction: column;
            justify-content: center;
            height: 20vh;
        }

        h1 {
            font-size: 1.5rem;
        }

        nav ul {
            flex-direction: column;
        }

        nav ul li a {
            font-size: 1rem;
            padding: 0.5rem 0;
        }
    }
</style>