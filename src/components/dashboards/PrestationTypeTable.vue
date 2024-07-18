<script setup lang="ts">
import { ref } from 'vue';
import { useEventTypeStore } from '@/stores/apps/eventType';
import { useDate } from 'vuetify';
import { formatDateToMonthShort, formatDate, formatAmount } from '@/utils/helpers/formatters';
const select = ref('March');
const months = ref(['March', 'April', 'May', 'June']);
const items = ref([]);
const loading = ref(true);
const store = useEventTypeStore();

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

const dataYears = ref([]);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 4 }, (_, i) => currentYear - i);

store.fetchItems(props.options).then((response) => {
    items.value = response.data.data;
    for (let i = 0; i < 4; i++) {
        const year = new Date().getFullYear() - i;
        for (let j = 0; j < items.value.length; j++) {
            if (items.value[j][`prestation_${year}`] > 0 && dataYears.value.indexOf(year) == -1) {
                dataYears.value.push(year);
            }
        }
    }
    loading.value = false;
});
</script>
<template>
    <VCard elevation="10">
        <v-skeleton-loader v-if="loading" height="200" type="table-tbody"></v-skeleton-loader>
        <v-card-text v-else>
            <div class="d-sm-flex align-center">
                <div>
                    <h2 class="text-h4">{{ title }}</h2>
                </div>
                <v-spacer></v-spacer>
                <div class="ml-auto">
                    <v-btn variant="tonal" color="primary" density="compact" to="/event_types">{{ $t('Voir plus') }}</v-btn>
                    <!--                    <v-select v-model="select" :items="months" variant="outlined" dense hide-details></v-select>-->
                </div>
            </div>
            <v-table density="compact">
                <!--                <template v-slot:default>-->
                <thead>
                    <tr>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Nom') }}</th>
                        <th class="text-subtitle-1 font-weight-medium" v-for="year in dataYears">{{ year }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id" class="month-item">
                        <td class="text-no-wrap cursor-pointer" @click="$router.push(`/prestations?event_type=${item.name}`)">
                            {{ item.name }}
                        </td>
                        <td class="text-no-wrap" v-for="year in dataYears">
                            {{ item[`prestation_${year}`] || 0 }}
                        </td>
                    </tr>
                </tbody>
                <!--                </template>-->
            </v-table>
        </v-card-text>
    </VCard>
</template>
