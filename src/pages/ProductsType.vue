<template>
  <q-page class="q-pa-lg bg-grey-3">
    <h5 class="text-center">Типы продуктов</h5>

    <Loader v-if="getTypeLoader"/>
    
    <q-list v-else separator bordered padding class="q-mt-lg q-pa-none relative-position">
      <ProductTypeItem 
        v-for="(productType, idx) in this.productsTypeList" :key="productType.id"
        :productType="productType"
        :idx="idx"
      />
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import ProductTypeItem from '../components/ProductTypeItem.vue'
import Loader from "src/components/Loader.vue";

export default defineComponent({
  name: "ProductsType",

  computed: {
   ...mapGetters(['productsTypeList', 'getTypeLoader'])
  },

  components: {
    ProductTypeItem, Loader
  }
});
</script>
