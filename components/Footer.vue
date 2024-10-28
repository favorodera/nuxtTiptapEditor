<template>
  <footer class="mt-auto w-full flex flex-col gap-3">
    <UDivider
      :ui="{
        border: { base: ' dark:b-[gray/25]' },
        icon: { base: 'w-6 h-6 text-teal-500' },
      }"
      icon="i-mdi-nuxt"
    />

    <div class="flex flex-col items-center justify-center gap-y-4 text-sm md:flex-row md:justify-between md:gap-0">
      <p>Built By Favour</p>

      <div class="flex items-center gap-1">
        <NuxtLink to="https://github.com/favordoera/nuxtTiptapEditor">
          <i class="i-mdi-github size-6 text-gray-400 hover:text-gray-500" />
        </NuxtLink>
        <span>|</span>
        <NuxtLink to="https://twitter.com/favordoera">
          <i class="i-mdi-twitter size-6 text-gray-400 hover:text-gray-500" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
