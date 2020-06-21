import Vue from "vue";
import VueRouter from "vue-router";

// Views
import IndexPage from "@views/Index.vue";
import SignUpPage from "@views/SignUp.vue";
import SignInPage from "@views/SignIn.vue";
import PolicyPage from "@views/Policy.vue";
import TermsPage from "@views/Terms.vue";

import DashboardPage from "@views/Dashboard.vue";
import MainDashboardPage from "@views/MainDashboard.vue";
import UsersIndexPage from "@views/User.vue";

import FourZeroFour from "@views/404.vue";

Vue.use(VueRouter);

import GuardsFactory from "@classes/Guards";

const Guards = new GuardsFactory();

export default new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "index",
            component: IndexPage
        },
        {
            path: "/sign-up",
            name: "Sign-Up",
            component: SignUpPage
        },
        {
            path: "/sign-in",
            name: "Sign-In",
            component: SignInPage
        },
        {
            path: "/privacy-policy",
            name: "Privacy-Policy",
            component: PolicyPage
        },
        {
            path: "/terms-of-service",
            name: "Terms-of-Service",
            component: TermsPage
        },
        {
            path: "/dashboard",
            component: DashboardPage,
            beforeEnter: Guards.isAdmin(),
            children: [
                {
                    path: "",
                    component: MainDashboardPage,
                    name: "Main-Dashboard"
                },
                {
                    path: "users",
                    component: UsersIndexPage
                }
            ]
        },
        {
            path: "/*",
            component: FourZeroFour
        }
    ]
});
