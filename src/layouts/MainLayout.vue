<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-cyan-8 header">
      <q-toolbar>
        <q-toolbar-title class="text-h5 header__title">
          Quasar-app
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapMutations } from "vuex";

export default defineComponent({
  name: "MainLayout",

  methods: {
    ...mapActions(["getProductsType"]),
    ...mapMutations(['removeLoader'])
  },

  async mounted() {
    await this.getProductsType();
    this.removeLoader()
  },
});
</script>
