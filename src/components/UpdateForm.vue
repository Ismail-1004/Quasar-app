<template>
  <q-page class="q-pa-lg bg-grey-3">
    <div class="q-pa-md form bg-white q-pa-lg" style="max-width: 400px">
      <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <h2 class="text-h5 text-center q-mb-lg">Добавление продукта</h2>

        <q-input
          filled
          v-model="productData.name_uz"
          label="Название продукта"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Это поле обязательное!',
          ]"
        />

        <q-input
          filled
          type="number"
          v-model="productData.cost"
          label="Стоимость продукта"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.toString().length > 0) || 'Это поле обязательное!',
          ]"
        />

        <q-input
          filled
          type="text"
          v-model="productData.address"
          label="Укажите адресс"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Это поле обязательное!',
          ]"
        />

        <div class="row justify-end">
          <q-btn
            label="Вернуться обратно"
            class="q-mr-lg"
            type="button"
            color="red"
            :to="{
              name: 'Products',
              params: { id: productData.product_type_id },
            }"
          />

          <q-btn label="Обновить" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>


<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default defineComponent({
  name: "MainLayout",
  props: ["id"],

  data: () => ({
    productData: {},
  }),

  computed: {
    ...mapGetters(["getUpdateModalIsActive", "getProduct"]),
  },

  methods: {
    ...mapMutations(["closeModal", "closeUpdateModal"]),
    ...mapActions(["addProduct", "updateProduct"]),

    async onSubmit() {
      try {
        const productInfo = {
          id: this.productData.id,
          product_type_id: this.productData.product_type_id,
          name_uz: this.productData.name_uz,
          cost: this.productData.cost,
          address: this.productData.address,
          created_date: this.productData.created_date,
        };
        await this.updateProduct(productInfo);
        
        await this.$router.push({ name: 'Products', params: { id: productInfo.product_type_id }})
        this.productData = sessionStorage.setItem('product', JSON.stringify(productInfo))

      } catch (e) {
        throw e
      }
    },
  },

  created() {
    const isHaveProduct = sessionStorage.getItem("product");
    this.productData = Object.assign({}, this.getProduct);

    if (Object.keys(this.productData).length === 0) {
      this.productData = JSON.parse(isHaveProduct);
      return;
    }


    isHaveProduct === null
      ? sessionStorage.setItem("product", JSON.stringify(this.productData))
      : "";
  },
});
</script>