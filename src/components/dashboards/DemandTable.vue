<script setup lang="ts">
import { ref } from 'vue';
import { useDemandStore } from '@/stores/apps/demands';
import { useDate } from 'vuetify';
import { formatDateToMonthShort, formatDate, formatAmount } from '@/utils/helpers/formatters';
const select = ref('March');
const months = ref(['March', 'April', 'May', 'June']);
const items = ref([]);
const total = ref(0);
const loading = ref(true);
const store = useDemandStore();

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
    items.value = response.data.data;
    total.value = response.data.total || 0;
    loading.value = false;
});
</script>
<template>
    <VCard elevation="10">
        <v-skeleton-loader v-if="loading" height="200" type="table-tbody"></v-skeleton-loader>
        <v-card-text v-else>
            <div class="d-sm-flex align-center">
                <div>
                    <h2 class="text-h4">{{ title }} : {{ total || 0 }}</h2>
                </div>
                <v-spacer></v-spacer>
                <div class="ml-auto">
                    <v-btn variant="tonal" color="primary" density="compact" :to="`/demands?status=${options.status}`">{{
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
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Date') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Source') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Type') }}</th>
                        <th class="text-subtitle-1 font-weight-medium">{{ $t('Lieu') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id" class="month-item cursor-pointer" @click="$router.push('/demands/' + item.id)">
                        <td class="text-no-wrap">
                            {{ item.customer ? `${item.customer.firstname} ${item.customer.lastname}` : '-' }}
                        </td>

                        <td v-if="props.options.statistics != 'closed'" class="text-no-wrap">
                            {{ formatDate(item.event_date) }}
                        </td>
                        <td class="text-no-wrap">
                            {{ item.source }}
                        </td>
                        <td class="text-no-wrap text-truncate">
                            <v-tooltip v-if="item.eventtype" :text="item.eventtype.name">
                                <template v-slot:activator="{ props }">
                                    <span v-bind="props">
                                        {{
                                            item.eventtype.name == null || item.eventtype.name.length < 30
                                                ? item.eventtype.name
                                                : `${item.eventtype.name.replace('\n', ' ').slice(0, 29)}...`
                                        }}
                                    </span>
                                </template>
                            </v-tooltip>
                        </td>
                        <td v-if="props.options.statistics != 'closed'" class="text-no-wrap text-truncate">
                            <v-tooltip :text="item.hall ? item.hall.name : ''">
                                <template v-slot:activator="{ props }">
                                    <span v-bind="props" v-if="item.hall">
                                        {{
                                            item.hall.name.length < 30
                                                ? item.hall.name
                                                : `${item.hall.name.replace('\n', ' ').slice(0, 29)}...`
                                        }}
                                    </span>
                                </template>
                            </v-tooltip>
                        </td>
                    </tr>
                </tbody>
                <!--                </template>-->
            </v-table>
        </v-card-text>
    </VCard>
</template>
