import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import get_types from './modules/get_types'
import get_products from './modules/get_products'
import get_request_handler from './modules/get_request_handler'
import product_delete from './modules/product_delete'
import add_product from './modules/add_product'
import post_query_handler from './modules/post_query_handler'
import update_product from './modules/update_product'

export default store(function () {
  const Store = createStore({
    modules: {
      get_types,
      get_request_handler,
      get_products,
      product_delete,
      add_product,
      post_query_handler,
      update_product
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
