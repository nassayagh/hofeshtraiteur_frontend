<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { useDate } from 'vuetify'

const props = defineProps({
  modelValue: {
    type: [Date, String],
  },
  label: {
    type: String,
    default: 'Date',
  },
  rules: {
    type: [Array, Object],
    default: null,
  },
  errorMessages: {
    type: [Array, Object, String],
   /* default: 'Le champ est requis',*/
  },
})

const emit = defineEmits([
  'update:modelValue',
])

const dateObject = useDate()

const date = computed({
  get: () => {
    return props.modelValue != null ? new Date(props.modelValue /*|| (new Date().toLocaleDateString())*/) : null
  },
  set: (value, oldValue) => {
      if(value != oldValue){

          emit('update:modelValue', value != null?value.toDateString():null)
      }
  },
})

const modal = ref(false)
const dialog = ref()

const formatedDate = computed(() => date.value != null?dateObject.format(date.value, 'shortDate'):null)
</script>

<template>
  <VDialog
    ref="dialog"
    v-model="modal"
    v-model:return-value="date"
    persistent
    width="290px"
  >
    <template #activator="{ props }">
      <VTextField
        v-model="date"
        prepend-inner-icon="bx-calendar"
        :label="label"
        readonly
        v-bind="props"
        :error-messages="errorMessages"
        :rules="rules"
      />
    </template>
    <template #default="{ isActive }">
      <VLocaleProvider :locale="$i18n.locale">
        <VDatePicker v-model="date" hide-header >
          <template #actions>
            <VBtn
              color="primary"
              @click="modal = false"
            >
              {{ $t('Annuler') }}
            </VBtn>
            <VSpacer />
            <VBtn
              variant="elevated"
              color="primary"
              @click="modal = false"
            >
              {{ $t('OK') }}
            </VBtn>
          </template>
        </VDatePicker>
      </VLocaleProvider>
    </template>
  </VDialog>
</template>
