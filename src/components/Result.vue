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
    <div class="flex flex-col justify-center items-center" >
        <div class="m-4">
            <button class="btn btn-secondary" v-on:click="apiCall">GENERATE</button>
        </div>
        <div class="form-control w-full max-w-xs">
            <label class="label">
                <span class="label-text">Result</span>
            </label>
            <textarea class="textarea textarea-bordered h-40" placeholder="INSERT INTO ...." v-model="result"></textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
        import {onMounted , ref} from "vue"
        import { googleReq } from "../services/service"
        let result = ref("")
        let schema = ref("")
        let rows = ref(1)
        async function apiCall() : Promise<void>
        {   
            const resultApi : string = await googleReq(schema.value, rows.value.toString())
            console.log(resultApi)
            result.value = resultApi
        }

      
</script>   