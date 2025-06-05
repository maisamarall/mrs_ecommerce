<template>
  <div
    class="group border rounded-3xl p-4 flex flex-col shadow-sm hover:shadow-lg transition-shadow bg-white"
  >
    <!-- Imagem -->
    <div class="relative overflow-hidden rounded-2xl">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="w-full h-52 object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <!-- Conteúdo -->
    <div class="flex flex-col flex-1 mt-4">
      <h2
        class="font-semibold text-lg text-gray-800 group-hover:text-black line-clamp-2"
      >
        {{ product.title }}
      </h2>
      <p class="text-xs text-gray-500 mt-1 capitalize">
        {{ product.category }}
      </p>
      <p class="mt-2 text-xl font-bold text-[#c5a2a6]">
        R$ {{ product.price }}
      </p>

      <!-- Painel de Quantidade -->
      <div
        class="mt-auto flex items-center justify-between gap-2 border rounded-2xl px-4 py-2"
        :class="{
          'border-[#c5a2a6]': quantity > 0,
          'border-gray-200': quantity === 0
        }"
      >
        <button
          @click="decrease"
          class="p-1 rounded-full hover:bg-[#c5a2a6]/10 transition"
        >
          <MinusIcon class="w-5 h-5 text-[#c5a2a6]" />
        </button>

        <span class="text-base font-medium text-gray-700">
          {{ quantity }}
        </span>

        <button
          @click="increase"
          class="p-1 rounded-full hover:bg-[#c5a2a6]/10 transition"
        >
          <PlusIcon class="w-5 h-5 text-[#c5a2a6]" />
        </button>
      </div>

      <!-- Ver detalhes -->
      <router-link
        :to="`/product/${product.id}`"
        class="text-center text-sm text-[#c5a2a6] hover:text-[#a87d82] transition-colors mt-2"
      >
        Ver detalhes
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { cart } from '../store/cart'
import { PlusIcon, MinusIcon } from '@heroicons/vue/24/outline'

const props = defineProps({ product: Object })

const quantity = computed(() => {
  const item = cart.items.find((i) => i.id === props.product.id)
  return item ? item.quantity : 0
})

const increase = () => {
  cart.addToCart(props.product)
}

const decrease = () => {
  if (quantity.value > 1) {
    cart.updateQuantity(props.product.id, quantity.value - 1)
  } else if (quantity.value === 1) {
    cart.removeFromCart(props.product.id)
  }
}
</script>
