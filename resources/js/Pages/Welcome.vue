<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed } from 'vue'
import { Head, Link, usePage } from '@inertiajs/vue3'

defineProps({
  canLogin: Boolean as PropType<boolean>,
  canRegister: Boolean as PropType<boolean>,
  laravelVersion: String as PropType<string>,
  phpVersion: String as PropType<string>,
})

const user = computed(() => usePage<{ user: inertia.User }>().props?.user)
</script>

<template>
  <Head title="Welcome" />

  <div
    class="items-top relative flex min-h-screen justify-center bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"
  >
    <div
      v-if="canLogin"
      class="fixed top-0 right-0 hidden px-6 py-4 sm:block"
    >
      <Link
        v-if="user"
        :href="route('dashboard')"
        class="text-sm text-gray-700 underline dark:text-gray-500"
      >
        Dashboard
      </Link>

      <template v-else>
        <Link
          :href="route('login')"
          class="text-sm text-gray-700 underline dark:text-gray-500"
        >
          Log in
        </Link>

        <Link
          v-if="canRegister"
          :href="route('register')"
          class="ml-4 text-sm text-gray-700 underline dark:text-gray-500"
        >
          Register
        </Link>
      </template>
    </div>
    <div class="mx-auto max-w-6xl sm:px-6 lg:px-8">
      <div
        class="mt-4 flex justify-center sm:items-center sm:justify-between"
      >
        <div
          class="ml-4 text-center text-sm text-gray-500 sm:ml-0 sm:text-right"
        >
          Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
        </div>
      </div>
    </div>
  </div>
</template>
