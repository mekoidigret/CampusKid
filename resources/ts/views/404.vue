<template>
    <div style="height: 100vh;" class="container d-flex">
        <div class="error-page align-self-center mx-auto">
            <h2 class="headline text-warning">404</h2>
            <div class="error-content">
                <h3>
                    <i class="fas fa-exclamation-triangle text-warning"></i>
                    Oops! Page not found.
                </h3>
                <p>
                    We could not find the page you were looking for. Meanwhile,
                    you may
                    <router-link to="/">return to the Home page</router-link>.
                    Or
                    <a href="" @click.prevent.stop="redirect()">
                        go back to the last page you visited.
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        redirect() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.btn-outline-danger {
    transition: none;
}
.btn-outline-danger:hover {
    text-decoration: underline;
}
</style>
