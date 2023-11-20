<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'PlayerComponent', 
    props: {
        name: String,
        idStartGG: String
    },
})
</script>

<template>
    <div>
        <p>{{ name }}</p>
        <p>{{ idStartGG }}</p>
    </div>
</template>
