<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { usePrestationStore } from '@/views/prestations/Controller';
import { useDate } from 'vuetify';
import { formatDateToYear, formatDate, formatAmount, formatDateToMonthShortYear } from '@/utils/helpers/formatters';
const currentYear = new Date().getFullYear();

const select = ref(currentYear);
const months = ref(['March', 'April', 'May', 'June']);
const items = ref([]);
const store = usePrestationStore();

const props = defineProps({
    title: { type: String, default: '' },
    options: {
        type: Object,
        default: () => {
            return {
                per_page: '10',
                order_by: 'id',
                direction: 'DESC'
            };
        }
    }
});
const years = Array.from({ length: 20 }, (_, i) => (props.options.section == 'future' ? currentYear + i : currentYear - i));
function getData() {
    store.fetchYearStatistics({ ...props.options, year: select.value }).then((response) => {
        items.value = response.data;
    });
}
onMounted(() => {
    getData();
});

function yearChanged(e) {
    getData();
}
</script>
<template>
    <VCard elevation="10">
        <v-card-text>
            <div class="d-sm-flex align-center">
                <div>
                    <h2 class="text-h4">
                        {{ title }} {{ formatAmount(items.reduce((acc, item) => parseFloat(acc) + item.amount_paid, 0)) }}
                    </h2>
                </div>
                <v-spacer></v-spacer>
                <div class="ml-auto">
                    <!--                    <v-btn variant="tonal" color="primary" density="compact" to="/prestations" class="mb-1">{{ $t('Voir plus') }}</v-btn>-->
                    <v-autocomplete
                        v-model="select"
                        :items="years"
                        @update:modelValue="yearChanged"
                        variant="outlined"
                        dense
                        density="compact"
                        hide-details
                    ></v-autocomplete>
                </div>
            </div>
            <v-table density="compact">
                <!--                <template v-slot:default>-->
                <thead>
                    <tr>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Mois') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Reste') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Déjà') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('CA') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Cls') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Fait') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Anlé') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id" class="month-item">
                        <td
                            class="text-no-wrap cursor-pointer"
                            @click="$router.push(`/prestations?status=-5&date=${[item.date1, item.date2]}`)"
                        >
                            {{ formatDateToMonthShortYear(item.label) }}
                        </td>
                        <td class="text-no-wrap">
                            {{ formatAmount(item.amount_left) }}
                        </td>
                        <td>
                            {{ formatAmount(item.amount_paid) }}
                        </td>
                        <td>
                            {{ formatAmount(item.total_amount) }}
                        </td>
                        <td>
                            {{ item.customers_count || 0 }}
                        </td>
                        <td>
                            {{ item.prestations_closed || 0 }}
                        </td>
                        <td>
                            {{ item.prestations_cancelled || 0 }}
                        </td>
                    </tr>
                </tbody>
                <!--                </template>-->
            </v-table>
        </v-card-text>
    </VCard>
</template>
