<script setup lang="ts">
import { ref } from 'vue';
import { useCustomerStore } from '@/stores/apps/customers';
import { useDate } from 'vuetify';
import { formatDateToMonthShort, formatDate, formatAmount } from '@/utils/helpers/formatters';
const select = ref('March');
const months = ref(['March', 'April', 'May', 'June']);
const items = ref([]);
const loading = ref(true);
const store = useCustomerStore();

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
                    <v-btn variant="tonal" color="primary" density="compact" to="/customers">{{ $t('Voir plus') }}</v-btn>
                    <!--                    <v-select v-model="select" :items="months" variant="outlined" dense hide-details></v-select>-->
                </div>
            </div>
            <v-table density="compact">
                <!--                <template v-slot:default>-->
                <thead>
                    <tr>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Nom') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Mail') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Tel') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Prest') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        @click="$router.push('/customers/' + item.id)"
                        v-for="item in items"
                        :key="item.id"
                        class="month-item cursor-pointer"
                    >
                        <td>
                            {{ `${item.firstname} ${item.lastname}` }}
                        </td>
                        <td>
                            {{ `${item.email}` }}
                        </td>
                        <td>
                            {{ `${item.phone}` }}
                        </td>
                        <td class="text-no-wrap">
                            {{ item.prestations_count }}
                        </td>
                    </tr>
                </tbody>
                <!--                </template>-->
            </v-table>
        </v-card-text>
    </VCard>
</template>
