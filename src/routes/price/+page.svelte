<script>
  import Nav from "$lib/components/Nav.svelte";
  import Card from "$lib/components/Card.svelte";
  import { onMount } from 'svelte';

  let showLocation = true;
  const locationsVitrine = 'Site vitrine de 4 pages avec formulaire de contact. Hébergement et nom de domaine. RGPD inclus';
  const locationsEcommerce = 'Site vitrine avec boutique e-commerce inclus la mise en ligne de 100 produits. RGPD. Hébergement et nom de domaine inclus'; 
  const locationsMaintenance = 'Maintenance de votre site web, mise à jour, sauvegarde et sécurité';
  
  const achatsLanding = 'Site Vitrine pour votre site web, optimisé pour la conversion en E-commerce';
  const achatsEcommerce = 'Site E-commerce pour vendre vos produits en ligne, optimisé pour la conversion';
  const achatsMaintenance = 'Maintenance de votre site web, mise à jour, sauvegarde et sécurité';
  
  const locationCards = [
    { title: 'Site Vitrine', description: `${locationsVitrine}`, price: '99€/mois'}, 
    { title: 'Site E-commerce', description: `${locationsEcommerce}` , price: '149€/mois' },
    { title: 'Maintenance supplémentaire', description: `${locationsMaintenance}`, price: '250/mois' }
  ];

  const achatCards = [
    { title: 'Landing page', description: `${achatsLanding}`, price: '1200,00€' },
    { title: 'E-commerce', description: `${achatsEcommerce}`, price: '4800,00€' },
    { title: 'Maintenance', description: `${achatsMaintenance}`, price: '300,00€' }
  ];

  function toggleView(view) {
    showLocation = view === 'location';
  }
</script>

<Nav />

<section class="container">
  <div class="buttons">
    <button 
      class:active={showLocation} 
      on:click={() => toggleView('location')}
    >
      Location
    </button>
    <button 
      class:active={!showLocation} 
      on:click={() => toggleView('achat')}
    >
      Acheter
    </button>
  </div>

  <div class="grid">
    {#if showLocation}
      {#each locationCards as card}
        <Card title={card.title} description={card.description} price={card.price} />
       
      {/each}
       
    {:else}
      {#each achatCards as card}
        <Card title={card.title} description={card.description} price={card.price} />
      {/each}
    {/if}
  </div>
  
</section>

<style>
  .container {
    padding: 2rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .buttons button {
    width: 800px;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #979b9f;
    color: white;
    cursor: pointer;
    font-size: 1rem;
  }

  .buttons button:hover {
    background-color: #0056b3;
  }

  .buttons button.active {
    background-color: #0056b3;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
</style>