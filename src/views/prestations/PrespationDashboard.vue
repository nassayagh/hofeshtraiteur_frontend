<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';
import { t } from '@/plugins/i18n';
import { usePrestationStore } from '@/views/prestations/Controller';
import type { CurrencyEuroIcon, HotelServiceIcon, ShoppingCartIcon, CalendarQuestionIcon } from 'vue-tabler-icons';
import { formatAmount } from '../../utils/helpers/formatters';

const props = defineProps({
    showDescription: { type: Boolean, default: false },
    showPayments: { type: Boolean, default: false },
    showValidation: { type: Boolean, default: false },
    showValidated: { type: Boolean, default: false },
    showProcessing: { type: Boolean, default: false },
    showClosed: { type: Boolean, default: false },
    showCancelled: { type: Boolean, default: false },
    showTotalPayments: { type: Boolean, default: false },
    md: { type: String, default: '3' }
});

const store = usePrestationStore();

store.fetchStatistics({});
</script>

<template>
    <v-row v-if="showPayments">
        <v-col v-if="showTotalPayments" class="h-100" cols="12" :md="showTotalPayments ? '4' : '6'">
            <v-card elevation="10" class="bg-info h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Montant total') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon>
                                <CurrencyEuroIcon class="text-info" />
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ formatAmount(store.statistics.totalPayments || 0) }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t('Montant total de service') }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col class="h-100" cols="12" :md="showTotalPayments ? '4' : '6'">
            <v-card elevation="10" class="bg-primary h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Montant à régler') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon>
                                <CurrencyEuroIcon class="text-primary" />
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ formatAmount(store.statistics.paymentsLeft || 0) }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t('Montant restant à régler') }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col class="h-100" cols="12" :md="showTotalPayments ? '4' : '6'">
            <v-card elevation="10" class="bg-success h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Montant réglé') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon>
                                <CurrencyEuroIcon class="text-success" />
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ formatAmount(store.statistics.paymentsReceived || 0) }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t('Montant total déjà réglé') }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-row v-else>
        <v-col class="h-100" cols="12" :md="md">
            <v-card elevation="10" class="bg-primary h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Prestations') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon>
                                <HotelServiceIcon class="text-primary" />
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.total || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t('Prestations total') }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col v-if="showValidation" class="h-100" cols="12" :md="md">
            <v-card elevation="10" class="bg-success h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Prestations validées') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon>
                                <HotelServiceIcon class="text-success" />
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.validated || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t('Prestations total validées') }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col v-if="showValidated" class="h-100" cols="12" :md="md">
            <v-card elevation="10" class="bg-info h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Prestations en validation') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon>
                                <HotelServiceIcon class="text-info" />
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.validation || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t('Prestations total en attende de validation') }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <!--        <v-col v-if="showProcessing" class="h-100" cols="12" :md="md">
            <v-card elevation="10" class=" h-100" :class="showValidation?'bg-primary':'bg-success'">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Prestations en cours') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon >
                                <HotelServiceIcon :class="showValidation?'text-primary':'text-success'"/>
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.validation || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t("Prestations total en cours") }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>-->
        <v-col v-if="showClosed" class="h-100" cols="12" :md="md">
            <v-card elevation="10" class="bg-info h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Prestations Clôturée') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon>
                                <HotelServiceIcon class="text-info" />
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.closed || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t('Prestations total Clôturée') }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col v-if="showCancelled" class="h-100" cols="12" :md="md">
            <v-card elevation="10" class="bg-error h-100">
                <v-card-text>
                    <div class="d-flex align-start">
                        <h2 class="text-h4">{{ $t('Prestations annulées') }}</h2>
                        <v-spacer></v-spacer>
                        <div class="ml-auto">
                            <v-btn depressed color="white" class="btn-custom-sm" small icon>
                                <HotelServiceIcon class="text-error" />
                            </v-btn>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h2 class="text-h4 font-weight-regular">{{ store.statistics.cancelled || 0 }}</h2>
                        <span v-if="showDescription" class="text-subtitle-1">{{ $t('Prestations total annulées') }}</span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss"></style>
