import { toastController } from '@ionic/vue';

export const toast = async (
  message: string,
  duration: number = 1000,
  position: 'top' | 'middle' | 'bottom' = 'top'
) => {
  const toast = await toastController.create({
    message,
    duration,
    position
  });

  await toast.present();
};
