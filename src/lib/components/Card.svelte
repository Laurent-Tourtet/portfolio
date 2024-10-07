<script>
    export let title;
    export let description;
    export let price;
</script>
<section class="card">
    <h2>{title}</h2>
    <p>{description}</p>
    <p>{price}</p>
</section>

<style>
    .card {
        border: 1px solid #ff4942;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
        font-family: "Exo 2", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal; 
    }
</style>