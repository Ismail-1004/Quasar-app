
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/ProductsType.vue'), name: 'ProductsType' },
      { path: 'products/:id', name: 'Products', props: true, component: () => import('src/pages/Products.vue') },
      { path: 'update/:id', name: 'Update', component: () => import('src/components/UpdateForm.vue'), props: true }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
