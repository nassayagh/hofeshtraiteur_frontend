<script setup lang="ts">
import { ref } from 'vue';
import { usePrestationStore } from '@/views/prestations/Controller';
import { useDate } from 'vuetify';
import { formatDateToMonthShort, formatDate, formatAmount } from '@/utils/helpers/formatters';
const select = ref('March');
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

store.fetchItems(props.options).then((response) => {
    items.value = response.data.data;
});
</script>
<template>
    <VCard elevation="10">
        <v-card-text>
            <div class="d-sm-flex align-center">
                <div>
                    <h2 class="text-h4">
                        {{ title }}
                        {{ formatAmount(items.reduce((acc, item) => parseFloat(acc) + item.service_total, 0)) }}
                    </h2>
                </div>
                <v-spacer></v-spacer>
                <div class="ml-auto">
                    <v-btn variant="tonal" color="primary" density="compact" :to="`/prestations?status=${options.status}`">{{
                        $t('Voir plus')
                    }}</v-btn>
                    <!--                    <v-select v-model="select" :items="months" variant="outlined" dense hide-details></v-select>-->
                </div>
            </div>
            <v-table density="compact">
                <!--                <template v-slot:default>-->
                <thead>
                    <tr>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Nom') }}</th>
                        <th v-if="props.options.statistics != 'closed'" class="text-subtitle-1 font-weight-medium">{{ $t('Date') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Montant') }}</th>
                        <th v-if="props.options.statistics != 'closed'" class="text-subtitle-1 font-weight-medium">{{ $t('Lieu') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in items"
                        :key="item.id"
                        class="month-item cursor-pointer"
                        @click="$router.push('/prestations/' + item.id)"
                    >
                        <td class="text-no-wrap">
                            {{ item.customer ? `${item.customer.firstname} ${item.customer.lastname}` : '-' }}
                        </td>
                        <td v-if="props.options.statistics != 'closed'" class="text-no-wrap">
                            {{ formatDate(item.event_date) }}
                        </td>
                        <td>
                            {{ formatAmount(item.service_total) }}
                        </td>
                        <td v-if="props.options.statistics != 'closed'" class="text-no-wrap text-truncate">
                            {{
                                item.event_location == null || item.event_location.length < 10
                                    ? item.event_location
                                    : `${item.event_location.replace('\n', ' ').slice(0, 9)}...`
                            }}
                        </td>
                    </tr>
                </tbody>
                <!--                </template>-->
            </v-table>
        </v-card-text>
    </VCard>
</template>
