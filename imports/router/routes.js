import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';
import WizardClient from '../ui/pages/WizardClient.jsx';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/wizard',
    component: WizardClient
  },
 {
    path: '*',
    component: NotFound
  },

];

export default routes;
