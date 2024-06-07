<template>
    <div class="d-flex justify-center align-center text-center h-100">
        <div>
            <img src="@/assets/images/backgrounds/errorimg.svg" width="500" alt="404" />
            <h1 class="text-h1 pt-3">OOPS!!!</h1>
            <h4 class="text-h4 my-8">{{ $t('La page que vous cherchez n’a pas pu être trouvée.') }}</h4>
            <v-btn flat color="primary" class="mb-4" to="/">{{ $t('Retour à la page d’accueil') }}</v-btn>
        </div>
    </div>
</template>
