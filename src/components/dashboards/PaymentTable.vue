<script setup lang="ts">
import { ref } from 'vue';
import { usePaymentStore } from '@/stores/apps/payments';
import { useDate } from 'vuetify';
import { formatDateToMonthShort, formatDate, formatAmount } from '@/utils/helpers/formatters';
const select = ref('March');
const months = ref(['March', 'April', 'May', 'June']);
const items = ref([]);
const totalAmount = ref(0);
const loading = ref(true);
const store = usePaymentStore();

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

store.fetchStats(props.options).then((response) => {
    console.log(response.data);
    items.value = response.data.data.data;
    totalAmount.value = response.data.total_amount || 0;
    loading.value = false;
});
</script>
<template>
    <VCard elevation="10">
        <v-skeleton-loader v-if="loading" height="200" type="table-tbody"></v-skeleton-loader>
        <v-card-text v-else>
            <div class="d-sm-flex align-center">
                <div>
                    <h2 class="text-h4">
                        {{ title }} :
                        {{ formatAmount(totalAmount) }}
                        <!--                        {{ formatAmount(items.reduce((acc, item) => parseFloat(acc) + parseFloat(item.amount), 0)) }}-->
                    </h2>
                </div>
                <v-spacer></v-spacer>
                <div class="ml-auto">
                    <v-btn variant="tonal" color="primary" density="compact" to="/payments">{{ $t('Voir plus') }}</v-btn>
                    <!--                    <v-select v-model="select" :items="months" variant="outlined" dense hide-details></v-select>-->
                </div>
            </div>
            <v-table density="compact">
                <!--                <template v-slot:default>-->
                <thead>
                    <tr>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Montant') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Client') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Prest') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Date') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in items"
                        :key="item.id"
                        class="month-item cursor-pointer"
                        @click="$router.push('/prestations/' + item.prestation_id)"
                    >
                        <td class="text-no-wrap">
                            {{ formatAmount(item.amount) }}
                        </td>
                        <td class="text-no-wrap">
                            {{
                                `${item.prestation && item.prestation.customer ? `${item.prestation.customer.firstname} ${item.prestation.customer.lastname}` : ''}`
                            }}
                        </td>
                        <td class="text-no-wrap">
                            {{ `${item.prestation && item.prestation.eventtype ? `${item.prestation.eventtype.name || '-'}` : ''}` }}
                        </td>
                        <td class="text-no-wrap">
                            {{ formatDate(item.payment_date) }}
                        </td>
                    </tr>
                </tbody>
                <!--                </template>-->
            </v-table>
        </v-card-text>
    </VCard>
</template>
