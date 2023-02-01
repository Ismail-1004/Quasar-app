<template>
  <q-item>
    <q-item-section avatar class="q-pa-none">
      <q-item-label
        class="text-weight-bolder text-h6 text-center"
        style="width: 100%"
      >
        {{ idx + 1 }})
      </q-item-label>
    </q-item-section>
    <q-item-section class="text-h5"> {{ productType.name_ru }} </q-item-section>
    <q-item-section side>
      <q-btn
        color="primary"
        label="Подробнее"
        :to="{ name: 'Products', params: { id: productType.id } }"
        @click="addLoader"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "ProductTypeIten",
  props: ["productType", "idx"],

  methods: {
    ...mapMutations(['addLoader'])
  }
});
</script>