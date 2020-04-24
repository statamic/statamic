<template>
    <div class="example-fieldtype-container">
        <text-input :value="value" @input="update" />
    </div>
</template>

<script>
// Learn more at https://statamic.dev/extending/fieldtypes/
export default {
    mixins: [Fieldtype],
    data() {
        return {}
    }
};
</script>
