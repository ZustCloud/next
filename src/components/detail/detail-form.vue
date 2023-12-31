<script setup lang="ts">
import { IonButton, IonContent, IonInput } from '@ionic/vue';
import { useAuthStore } from '@/stores/auth.store';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { User } from '@/types/user';
import { toast } from '@/utils/toast';
import { validateDetailForm } from '@/components/detail/validator';
import { pageTo } from '@/router/director';

const { getToken } = useAuthStore();

export interface IProps {
  editable?: boolean;
  userNo?: string;
}

const props = defineProps<IProps>();

const form = ref<User>();

// 获取表单
const fetchUserInfo = async (userNo?: string) => {
  const token = await getToken();
  const config = {
    url: `http://localhost:3000/user/${userNo ?? ''}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'bearer ' + token
    }
  };
  axios(config).then((res) => {
    toast(JSON.stringify(res.data), 10000);
    form.value = res.data;
  });
};
onMounted(() => {
  fetchUserInfo(props.userNo);
});

// 提交
const patchUserInfo = async (userNo: string) => {
  // TODO validate
  if (!validateDetailForm(form.value)) return;

  const token = await getToken();
  const config = {
    url: `http://localhost:3000/user/${userNo}`,
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'bearer ' + token
    },
    data: form.value
  };
  axios(config).then((res) => {
    toast(JSON.stringify(res.data));
    pageTo('/home');
  });
};
const submit = async () => {
  if (!form.value?.no) return;
  await patchUserInfo(form.value?.no);
};
</script>

<template>
  <ion-content v-if="form">
    <ion-input
      placeholder="输入您的姓名"
      label="姓名"
      :value="form.name"
      @ion-input="form.name = $event.target.value as string"
      :clear-input="true"
    ></ion-input>
    <ion-input
      placeholder="输入您的微信"
      label="微信"
      :value="form.wechat"
      @ion-input="form.wechat = $event.target.value as string"
      :clear-input="true"
    ></ion-input>
    <ion-input
      placeholder="输入您的QQ"
      label="QQ"
      :value="form.QQ"
      @ion-input="form.QQ = $event.target.value as string"
      :clear-input="true"
    ></ion-input>
    <ion-input
      placeholder="输入您的手机"
      label="手机"
      :value="form.phone"
      @ion-input="form.phone = $event.target.value as string"
      :clear-input="true"
    ></ion-input>
    <ion-input
      placeholder="输入您的班级"
      label="班级"
      :value="form.class"
      @ion-input="form.class = $event.target.value as string"
      :clear-input="true"
    ></ion-input>
    <ion-input
      placeholder="输入您的寝室号"
      label="寝室号"
      :value="form.room"
      @ion-input="form.room = $event.target.value as string"
      :clear-input="true"
    ></ion-input>
    <ion-input
      placeholder="输入您的籍贯"
      label="籍贯"
      :value="form.birthPlace"
      @ion-input="form.birthPlace = $event.target.value as string"
      :clear-input="true"
    ></ion-input>
    <ion-button shape="round" @click="submit">加入芸馆</ion-button>
  </ion-content>
</template>

<style scoped></style>
