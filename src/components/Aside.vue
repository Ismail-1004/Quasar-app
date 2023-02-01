<template>
  <q-drawer show-if-above :width="200" :breakpoint="400">
    <q-scroll-area style="height: 100%; border-right: 1px solid #ddd">
      <div
        class="bg-transparent row justify-center items-center q-py-md"
        style="width: 100%"
      >
        <h2 class="text-weight-bold q-ma-none q-pa-none text-h5">CRUD APP</h2>
      </div>

      <q-separator />

      <q-list padding>
        <q-item clickable v-ripple exact to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section> Products </q-item-section>
        </q-item>

        <q-item clickable v-ripple exact to="/add-product">
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>

          <q-item-section> Add product </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>