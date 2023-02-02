<template>
  <div class="q-pa-lg flex flex-center pagination">
    <q-pagination
      v-model="current"
      :max="pages"
      @click="$emit('page-click', current)"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  data: () => ({
    current: 1,
  }),

  computed: {
    ...mapGetters(["getProductsList"]),
    pages() {
      return Math.ceil(this.getProductsList.length / 4);
    },

    pageCheck () {
      if (this.getProductsList.length <= 4) {
        console.log(123);
      }
    }
  },
});
</script>