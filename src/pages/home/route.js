import Home from './modules/home';
// import Mine from './modules/mine';

const routes = [
    {
        name: 'home',
        path: '/home',
        component: Home,
    },{
        name: 'mine',
        path: '/mine',
        component: () => import(/* webpackPrefetch: true, webpackChunkName: 'mine' */'./modules/mine')
    },{
        path: '/',
        redirect: 'home',
    }
];
export default routes;