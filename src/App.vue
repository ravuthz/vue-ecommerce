<template>
    <div id="app">
        <sui-container>
            <sui-menu secondary>
                <sui-menu-item link name="Home">
                    <router-link to="/">Home</router-link>
                </sui-menu-item>
                <sui-menu-item link name="about">
                    <router-link to="/about">About</router-link>
                </sui-menu-item>
                <sui-menu-item link name="Contact">
                    <router-link to="/contact">Contact</router-link>
                </sui-menu-item>
                <sui-menu-item position="right">
                    <sui-input placeholder="Search..." icon="search"/>
                </sui-menu-item>
                <sui-menu-item link name="Logout">Log Out</sui-menu-item>
            </sui-menu>
            <router-view></router-view>
        </sui-container>
    </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>

</style>
