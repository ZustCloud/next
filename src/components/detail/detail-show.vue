<script setup lang="ts">
import { IonButton, IonContent, IonInput } from '@ionic/vue';
import { User } from '@/types/user';
import { computed } from 'vue';
interface IProps {
  user: User;
  close: () => void;
}
const props = defineProps<IProps>();

const user = computed(() => {
  const u = { ...props.user } as any;
  const keys = Object.keys(u) as Array<keyof User>;
  keys.forEach((k) => {
    if (!u[k]) u[k] = '未填写';
  });
  return u;
});
</script>

<template>
  <ion-content v-if="user">
    <ion-input label="姓名" :value="user.name" disabled></ion-input>
    <ion-input label="微信" :value="user.wechat" disabled></ion-input>
    <ion-input label="QQ" :value="user.QQ" disabled></ion-input>
    <ion-input label="手机" :value="user.phone" disabled></ion-input>
    <ion-input label="班级" :value="user.class" disabled></ion-input>
    <ion-input label="寝室号" :value="user.room" disabled></ion-input>
    <ion-input label="籍贯" :value="user.birthPlace" disabled></ion-input>
    <ion-button shape="round" @click="props.close">确认</ion-button>
  </ion-content>
</template>

<style scoped></style>
