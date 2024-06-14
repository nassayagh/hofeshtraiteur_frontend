<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { useDemandStore } from '@/stores/apps/demands';
import type { CurrencyEuroIcon, BasketIcon, ShoppingCartIcon, CalendarQuestionIcon } from 'vue-tabler-icons';

const props = defineProps({
    showDescription: { type: Boolean, default: false }
});

const store = useDemandStore();

store.fetchStatistics({});

</script>

<template>
    <v-row>
        <v-col class="h-100" cols="12" md="3">
            <v-card elevation="10" class="bg-primary h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Demandes') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon >
                                <CalendarQuestionIcon  class="text-primary" />
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.total || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t("Demandes globales") }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col class="h-100" cols="12" md="3">
            <v-card elevation="10" class="bg-success h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Demandes validées') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon >
                                <CalendarQuestionIcon class="text-success"/>
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.validated || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t("Demandes validées global") }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col class="h-100" cols="12" md="3">
            <v-card elevation="10" class="bg-info h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Demandes non validées') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon >
                                <CalendarQuestionIcon class="text-info"/>
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.unvalidated || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t("Demandes non validées global") }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col class="h-100" cols="12" md="3">
            <v-card elevation="10" class="bg-error h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Demandes annulées') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon >
                                <CalendarQuestionIcon class="text-error"/>
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.cancelled || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t("Demandes annulées global") }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">

</style>
