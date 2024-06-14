<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { useCustomerStore } from '@/stores/apps/customers';
import type { UsersGroupIcon } from 'vue-tabler-icons';

const props = defineProps({
    showDescription: { type: Boolean, default: false }
});

const store = useCustomerStore();

store.fetchStatistics({});

</script>

<template>
    <v-row>
        <v-col class="h-100" cols="12" md="6">
            <v-card elevation="10" class="bg-info h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Prospets') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon >
                                <UsersGroupIcon class="text-info"/>
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.prospects || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t("Personnes sans prestations") }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col class="h-100" cols="12" md="6">
            <v-card elevation="10" class="bg-success h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Clients') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon >
                                <UsersGroupIcon class="text-success"/>
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.customers || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t("Personnes avec des prestations") }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>


    </v-row>
</template>

<style scoped lang="scss">

</style>
