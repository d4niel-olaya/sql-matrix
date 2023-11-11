<template>
    <div class="flex flex-row justify-center gap-4 items-center">
        <div class="w-1/2">
            <div class="form-control w-full max-w-xl">
                <label class="label">Schema</label>
                <textarea class="textarea textarea-bordered" placeholder="CREATE TABLE ...." v-model="schema"></textarea>
            </div>
        </div>
        <div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Rows</span>
                </label>
                <input type="number"  min="1" max="20" class="input input-bordered w-full max-w-xs" v-model="rows" />
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
    import { ref } from 'vue';
    let schema = ref("")
    let rows = ref(1)
</script>