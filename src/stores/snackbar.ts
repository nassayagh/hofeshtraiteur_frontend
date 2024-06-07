import { defineStore } from 'pinia';

export const useSnackbar = defineStore('snackbar', {
    state: () => ({
        message: '' as string, // Type annotation for clarity
        color: 'success' as string, // Default color
        timeout: 6000, // Default timeout
        show: false as boolean // Type annotation for clarity
    }),
    actions: {
        showSnackbar(message: string, color: string = 'success') {
            this.message = message;
            this.color = color;
            this.show = true;
        },
        showSuccess(message: string, color: string = 'success') {
            this.message = message;
            this.color = color;
            this.show = true;
        },
        showError(message: string, color: string = 'danger') {
            this.message = message;
            this.color = color;
            this.show = true;
        },
        dismissSnackbar() {
            this.show = false;
        }
    }
});
