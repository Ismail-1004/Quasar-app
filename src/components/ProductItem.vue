<template>
  <q-item>
    <q-item-section>
        <q-item-label class="text-h4"> Товар: {{ product.name_uz }} </q-item-label>
        <q-item-label caption> Цена: {{ product.cost }} </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn color="primary" label="Update" @click="updateClickHandler(product)" :to="{name: 'Update', params: {id: product.id}}"/>
    </q-item-section>

    <q-item-section side>
      <q-btn color="red" label="Delete" @click="deleteTask(product)" />
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from 'quasar'
import { mapActions, mapMutations, mapGetters } from "vuex";

export default defineComponent({
  name: "ProductItem",
  props: ['product', 'typeId'],


  data: () => ({
    $q: useQuasar()
  }),   

  methods: {
    ...mapActions(['deleteProduct']),
    ...mapMutations(['withOutDeletedProduct', 'updateClickHandler']),
    deleteTask (product) {
        this.$q.dialog({
        dark: true,
        title: 'Удаление товара',
        message: 'Точно ли удалить данный товар?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        await this.deleteProduct(product.id)
      })
    }
  },

  computed: {
   ...mapGetters(['getProductsList'])
  },
});
</script>