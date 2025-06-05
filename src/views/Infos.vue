<template>
  <div class="py-16 bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 max-w-3xl">
      <h1 class="text-4xl #dbfont-extrabold text-center text-gray-800 mb-6">Entre em Contato com a gente</h1>
      <p class="text-xl text-center text-gray-600 mb-12">
        A MRS está aqui para ajudar! Mande sua dúvida.
      </p>

      <div class="bg-white rounded-lg shadow-xl p-8 mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Envie-me uma Mensagem</h2>

        <form action="#" method="POST" class="space-y-6">
          <div>
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nome Completo:</label>
            <input type="text" id="name" name="name" required
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              placeholder="Seu nome" />
          </div>
          <div>
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" required
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              placeholder="seu.email@exemplo.com" />
          </div>
          <div>
            <label for="subject" class="block text-gray-700 text-sm font-bold mb-2">Assunto:</label>
            <input type="text" id="subject" name="subject"
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              placeholder="Sobre o que é a mensagem?" />
          </div>
          <div>
            <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
            <textarea id="message" name="message" rows="6" required
              class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
              placeholder="Escreva sua mensagem aqui..."></textarea>
          </div>
          <div class="text-center">
            <button type="submit"
              class="bg-purple-900  text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>
