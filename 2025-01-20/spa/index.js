const app = Vue.createApp({});

const Home = {
  template: "<h1>Hem</h1>",
};

const About = {
  template: `
    <h1>Om oss</h1>
    <p>Hej {{ $route.params.name }}!</p>
  `,
};

const Contact = {
  template: "<h1>Kontakt</h1>",
};

const routes = [
  { component: Home, path: "/" },
  { component: About, path: "/about/:name" },
  { component: Contact, path: "/contact" },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);

app.mount("#app");
