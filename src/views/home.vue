<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>你好啊~</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-button
          style="margin: 10px auto; display: block; width: 25%; height: 5vh"
          href="auth"
      >
        登录成功之后跳转到这里，是项目的主页面
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/vue";
import 'swiper/css'
</script>