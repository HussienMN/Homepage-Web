import './styles.css';
import './views/menue.js';
import {Router} from '@vaadin/router';

window.addEventListener('load', () =>{
    initRouter();
});


function initRouter() {
    const router = new router(document.querySelector('main'));
    router.setRoutes([
        {
            path: '/',
            component: 'nav-element'
        }
    ])
}
