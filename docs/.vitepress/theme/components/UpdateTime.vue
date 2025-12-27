<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
const { page } = useData()

const date = computed(
    () => new Date(page.value.lastUpdated!)
)
</script>

<!--toLocaleString()：显示日期和时间 默认-->
<!--toLocaleDateString()：仅显示日期-->
<!--toLocaleTimeString()：仅显示时间-->
<template>
  <div class="LastUpdated">
    <p>更新时间: {{ date.toLocaleString() }}</p>
  </div>
</template>

<style>
.LastUpdated {
  color: var(--vp-c-text-2);
}
</style>