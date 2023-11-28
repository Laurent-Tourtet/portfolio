import { link } from 'svelte-spa-router';
import { routes } from './router';

export default function renderRoutes(routes) {
  return routes.map(route => {
    return `
      <li>
        <a href="${route.path}" ${link}>${route.name}</a>
      </li>
    `;
  }).join('');
}