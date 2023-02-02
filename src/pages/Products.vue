<template>
  <q-page class="q-pa-lg bg-grey-3">
    <q-item class="row justify-between align-center">
      <q-item>
        <h5>Продукты</h5>
        <q-btn color="primary q-ml-lg" to="/" @click="closeModal">
          Вернуться на главную
        </q-btn>
      </q-item>

      <q-item>
        <q-btn color="primary" @click="openModal"> Добавить продукт </q-btn>
      </q-item>
    </q-item>

    <Loader v-if="getProductsLoader" />

    <q-item-section v-else>
      <q-list
        separator
        bordered
        padding
        class="q-mt-lg q-pa-none"
        v-if="getProductsList.length !== 0"
      >
        <ProductItem
          v-for="(product) in filteredProducts"
          :key="product.id"
          :product="product"
          :typeId="id"
        />
      </q-list>
      
      <p v-else class="text-center q-mt-lg text-h4">Продуктов не найдено</p>

      <Pagination v-if="getProductsList.length > 4"
        @page-click="pageClick"
      />

    </q-item-section>


    <Form :typeId="id" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
import ProductItem from "src/components/ProductItem.vue";
import Form from "src/components/Form.vue";
import Loader from "src/components/Loader.vue";
import Pagination from "src/components/Pagination.vue";

export default defineComponent({
  props: ["id"],
  name: "Products",

  data: () => ({
    pageNumber: 1,
    userPage: 4
  }), 

  watch: {
    id(value) {
      this.filterProducts(value);
    },
  },

  methods: {
    ...mapActions(["getProducts"]),
    ...mapMutations([
      "filterProducts",
      "openModal",
      "closeModal",
      "removeLoader",
    ]),

    pageClick (page) {
      this.pageNumber = page
    }
  },

  async created() {
    await this.getProducts();
    this.filterProducts(this.id);
    setTimeout(() => this.removeLoader(), 1000)
  },

  computed: {
    ...mapGetters(["getProductsList", "getProductsLoader"]),
    filteredProducts () {
      const productsCopy = [...this.getProductsList]

      if (productsCopy.length < 5 && this.pageNumber !== 1) {
        this.pageNumber = 1
      }

      let from = (this.pageNumber - 1) * this.userPage
      let to = from + this.userPage
      

      return productsCopy.sort((a, b) => b.created_date - a.created_date).slice(from, to)
    }
  },

  components: {
    ProductItem,
    Form,
    Loader,
    Pagination
  },
});
</script>