<template>
    <div class="flex flex-row justify-center gap-4 items-center">
        <div class="w-1/2">
            <div class="form-control w-full max-w-xl">
                <label class="label">Schema</label>
                <textarea class="textarea textarea-bordered" placeholder="CREATE TABLE ...."></textarea>
            </div>
        </div>
        <div>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Rows</span>
                </label>
                <input type="number" value="1" min="1" max="20" class="input input-bordered w-full max-w-xs" />
            </div>
        </div>
    </div>
</template>