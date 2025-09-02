  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  const isActive = ref(false);
  const message = ref('');
  
  const togglePopup = () => {
    isActive.value = !isActive.value;
  };
  
  const sendMessage = () => {
    if (message.value.trim()) {
      const encodedMsg = encodeURIComponent(message.value);
      window.open(`https://wa.me/5218335260000?text=${encodedMsg}`, '_blank');
      message.value = '';
      isActive.value = false;
    }
  };
  
  onMounted(() => {
    setTimeout(() => {
      isActive.value = true;
    }, 3000);
  });
  </script>

<template>
    <div class="nav-bottom">
      <!-- Popup de WhatsApp -->
      <div class="popup-whatsapp" :class="{ 'is-active-whatsapp-popup': isActive }">
        <div class="content-whatsapp -top">
          <button class="closePopup" @click="togglePopup">
            <i class="bi bi-x-lg icon-font-color"></i>
          </button>
          <div class="d-flex align-items-center gap-2">
            <img
              src="/img/whatsapp-inbtel.jpg"
              alt="WhatsApp"
              class="icon-whatsapp shadow-sm"
            />
            <p class="my-3">Hola, ¿en qué podemos ayudarle?</p>
          </div>
        </div>
  
        <div class="content-whatsapp -bottom">
          <input
            type="text"
            class="whats-input"
            placeholder="Enviar mensaje..." 
            v-model="message"
            @keyup.enter="sendMessage"
          />
          <button class="send-msPopup" @click="sendMessage">
            <i class="bi bi-send-fill icon-font-color--black"></i>
          </button>
        </div>
      </div>
  
      <!-- Botón flotante -->
      <button class="float" @click="togglePopup">
        <i class="bi bi-whatsapp my-float"></i>
      </button>
  
      <!-- Círculo animado -->
      <div class="circle-anime"></div>
    </div>
  </template>
  
  <style scoped>
  /* Estilos personalizados pegados tal cual los diste */
  .float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 15px;
    left: 16px;
    background-color: #4cc370;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: none;
    border: none;
    outline: none;
    z-index: 1000;
  }
  .float:hover {
    text-decoration: none;
    color: #fff;
    background-color:#3d9e5a;
  }
  .my-float {
    margin-top: 16px;
  }
  @keyframes pulse {
    0% { transform: scale(1, 1); }
    50% { opacity: 0.3; }
    100% { transform: scale(1.45); opacity: 0; }
  }
  
  .nav-bottom {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: flex-end;
    width: auto;
    height: auto;
    position: fixed;
    z-index: 1100;
    bottom: 0px;
    left: 0px;
    padding: 5px;
    margin: 0px;
  }
  @media (max-width: 360px) {
    .nav-bottom {
      width: 320px;
    }
  }
  
  .circle-anime {
    display: none;
    position: absolute;
    justify-content: center;
    align-content: center;
    width: 60px;
    height: 60px;
    top: 30px;
    left: 30px;
    border-radius: 50%;
    transition: .3s;
    background-color: #77bb4a;
    animation: pulse 1.2s 4.0s ease 4;
  }
  
  .popup-whatsapp {
    display: none;
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: auto;
    height: auto;
    padding: 10px;
    bottom: 85px;
    left: 6px;
    transition: .5s;
    border-radius: 10px;
    background-color: white;
    box-shadow: 2px 1px 6px 0px rgba(68, 68, 68, 0.705);
    animation: slideInLeft .6s 0.0s both;
  }
  button {
    box-shadow: none;
    border: none;
    outline: none;
  }
  .popup-whatsapp > div {
    margin: 5px;
  }
  @media (max-width: 680px) {
    .popup-whatsapp p {
      font-size: 0.9em;
    }
  }
  .popup-whatsapp > .content-whatsapp.-top {
    display: flex;
    flex-direction: column;
  }
  .popup-whatsapp > .content-whatsapp.-top p {
    color: #585858;
    font-family: "Montserrat", sans-serif !important;
    font-weight: 400;
    font-size: 0.8em;
  }
  .popup-whatsapp > .content-whatsapp.-bottom {
    display: flex;
    flex-direction: row;
  }
  .closePopup {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    margin-left: 265px !important;
    margin: 0px 0px 15px 0px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #4cc370;
    box-shadow: 1px 1px 2px 0px rgba(68, 68, 68, 0.705);
  }
  .closePopup:hover {
    background-color: #3d9e5a;
    transition: .3s;
  }
  .send-msPopup {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff;
    margin: 0px 0px 0px 5px;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 1px 1px 2px 0px rgba(68, 68, 68, 0.705);
  }
  .send-msPopup:hover {
    background-color: #f8f8f8;
    transition: .3s;
  }
  .is-active-whatsapp-popup {
    display: flex;
    animation: slideInLeft .6s 0.0s both;
    background-color: #fafafa;
  }
  input.whats-input[type=text] {
    width: 250px;
    height: 40px;
    box-sizing: border-box;
    border: 0px solid #ffffff;
    border-radius: 20px;
    font-size: 1em;
    background-color: #ffffff;
    padding: 0px 0px 0px 10px;
    outline: none;
    transition: .3s;
  }
  @media (max-width: 420px) {
    input.whats-input[type=text] {
      width: 225px;
    }
  }
  input.whats-input::placeholder {
    color: rgba(68, 68, 68, 0.705);
    opacity: 1;
  }
  input.whats-input[type=text]:focus {
    background-color: #f8f8f8;
    transition: .3s;
  }
  .icon-whatsapp-small {
    width: 24px;
    height: 24px;
  }
  .icon-whatsapp {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .icon-font-color {
    color: #ffffff;
  }
  .icon-font-color--black {
    color: #333333;
  }
  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  </style>
  