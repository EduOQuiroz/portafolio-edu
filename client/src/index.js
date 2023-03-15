import Template from '@templates/Template.js';
import '@styles/main.scss';

(async function App() {
  const root = document.getElementById('root');
  root.innerHTML = await Template();
})();
