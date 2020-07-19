import './views/home';
import './styles.css';
import './views/html';
import './views/css';
import './views/javascript';
import './views/others';

import {Router} from '@vaadin/router';

window.addEventListener('load' , ()=>{
    initRouter();
});

function initRouter() {
    const router = new Router(document.querySelector('main'));
    router.setRoutes([
        {
            path: './',
            component: ''
        },
        {
            path: '/html',
            component: 'html-element'
        },
        {
            path: '/css',
            component: 'css-element'
        },
        {
            path: '/javascript',
            component: 'js-element'
        },
        {
            path: '/others',
            component: 'others-element'
        },
    ])
}
