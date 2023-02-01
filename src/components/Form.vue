<template>
  <div
    class="q-pa-md form bg-white q-pa-lg"
    style="max-width: 400px"
    v-if="isActiveModal"
  >
    <q-form @submit="onSubmit" class="q-gutter-md">
      <h2 class="text-h5 text-center q-mb-lg">Добавление продукта</h2>

      <q-input
        filled
        v-model="name"
        label="Название продукта"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Это поле обязательное!']"
      />

      <q-input
        filled
        type="number"
        v-model="cost"
        label="Стоимость продукта"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Это поле обязательное!']"
      />

      <q-input
        filled
        type="text"
        v-model="address"
        label="Укажите адресс"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Это поле обязательное!']"
      />

      <div class="row justify-end">
        <q-btn
          label="Закрыть"
          class="q-mr-lg"
          type="button"
          color="red"
          @click="closeModal"
        />
        <q-btn label="Добавить" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default defineComponent({
  name: "MainLayout",
  props: ["typeId"],

  data: () => ({
    name: "",
    cost: "",
    address: "",
  }),

  computed: {
    ...mapGetters(["isActiveModal", "getProductsList"]),
  },

  methods: {
    ...mapMutations(["closeModal", "clearProductsList", "filterProducts"]),
    ...mapActions(["addProduct", "getProducts"]),

    resetFormValues() {
      this.name = "";
      this.cost = "";
      this.address = "";
    },

    async onSubmit() {
      const productInfo = {
        product_type_id: this.typeId,
        name_uz: this.name,
        cost: this.cost,
        address: this.address,
        created_date: Date.now(),
      };

      await this.addProduct(productInfo);
      this.resetFormValues(productInfo);

      window.location.reload()
    },
  },
});
</script>