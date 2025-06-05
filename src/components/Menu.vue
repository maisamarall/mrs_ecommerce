<template>
    <div>
        <nav 
            :class="[
                'fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300',
                (isScrolled || isNotHome) ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'
            ]"
        >
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-4">
                    <router-link to="/" class="text-lg font-[500]">
                        MRS Beauty
                    </router-link>

                    <ul class="hidden md:flex gap-8">
                        <li><router-link to="/" class="hover:underline">Início</router-link></li>
                        <li><router-link to="/produtos" class="hover:underline">Produtos</router-link></li>
                        <li><router-link to="/infos" class="hover:underline">Infos</router-link></li>
                        <li>
                            <router-link to="/cart" class="relative hover:underline">
                                <span v-if="cart.items.length > 0"
                                    class="absolute -top-2 -right-2 bg-[#c5a2a6] text-white text-[10px] min-w-[16px] h-[16px] flex items-center justify-center rounded-full px-[2px]">
                                    {{ cart.items.length }}
                                </span>
                                <ShoppingBagIcon class="w-5 h-5" />
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { cart } from '../store/cart'
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'

const isScrolled = ref(false)
const route = useRoute()

const isNotHome = computed(() => route.path !== '/')

const handleScroll = () => {
    isScrolled.value = window.scrollY > 200
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
