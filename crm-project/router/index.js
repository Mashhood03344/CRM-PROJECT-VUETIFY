import { createRouter, createWebHistory } from 'vue-router';
import login from '../src/components/login.vue';
import dashboard from '../src/components/dashboard.vue';
import companyList from '../src/components/CompanyList.vue'; // Import the CompanyList component

const routes = [
    { path: '/', name: "login", component: login },
    { path: '/dashboard', name: 'dashboard', component: dashboard },
    { path: '/company-list', name: 'company-list', component: companyList }, // Add route for the CompanyList component
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
