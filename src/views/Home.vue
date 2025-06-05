<template>
  <section>
    <Carousel></Carousel>
    <div class="absolute bottom-[80px] left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
  </section>
  <div class="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
    <div>
      <h2 class="font-bold mb-2">Categorias</h2>
      <ul>
        <li v-for="category in categories" :key="category">
          <button @click="filterByCategory(category.slug)" class="text-blue-500 hover:underline">{{ category.name }}</button>
        </li>
        <li>
          <button @click="fetchProducts()" class="text-red-500 hover:underline">Limpar filtro</button>
        </li>
      </ul>
      <div class="mt-4">
        <input v-model="searchQuery" @input="search" class="border rounded p-1 w-full" placeholder="Buscar produtos..." />
      </div>
      <div class="mt-4">
        <select v-model="sort" @change="applySort" class="border rounded p-1 w-full">
          <option value="">Ordenar por</option>
          <option value="price_asc">Preço Crescente</option>
          <option value="price_desc">Preço Decrescente</option>
          <option value="name_asc">Nome A-Z</option>
          <option value="name_desc">Nome Z-A</option>
        </select>
      </div>
    </div>
    <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard v-for="product in displayedProducts" :key="product.id" :product="product" />
    </div>
  </div>
  <div class="flex justify-center mt-4 gap-2">
    <button @click="prevPage" :disabled="page === 1" class="px-2 py-1 border rounded">Anterior</button>
    <span>Página {{ page }}</span>
    <button @click="nextPage" class="px-2 py-1 border rounded">Próxima</button>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import { getProducts, getCategories, getProductsByCategory, searchProducts } from '../services/api'
import ProductCard from '../components/ProductCard.vue'
import Carousel from '../components/Carousel.vue'

const products = ref([])
const categories = ref([])
const page = ref(1)
const limit = 9
const searchQuery = ref('')
const sort = ref('')

const fetchProducts = async () => {
  const { data } = await getProducts(limit, (page.value - 1) * limit)
  products.value = data.products
}

const fetchCategories = async () => {
  const { data } = await getCategories()
  categories.value = data
}

const filterByCategory = async (category) => {
  const { data } = await getProductsByCategory(category)
  products.value = data.products
}

const search = async () => {
  if (searchQuery.value.trim() === '') {
    fetchProducts()
    return
  }
  const { data } = await searchProducts(searchQuery.value)
  products.value = data.products
}

const applySort = () => {
  if (sort.value === 'price_asc') {
    products.value.sort((a, b) => a.price - b.price)
  } else if (sort.value === 'price_desc') {
    products.value.sort((a, b) => b.price - a.price)
  }
}

const nextPage = () => {
  page.value++
  fetchProducts()
}

const prevPage = () => {
  if (page.value > 1) {
    page.value--
    fetchProducts()
  }
}

const displayedProducts = computed(() => products.value)

onMounted(() => {
  fetchProducts()
  fetchCategories()
})
</script>