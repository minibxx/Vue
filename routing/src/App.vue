<template>
  <router-link to="/">HOME</router-link>
  <router-link :to="{name:'ListV',query:{num:100}}">LIST</router-link>
  <router-link to="/class/:name">CLASS</router-link>
  <router-view/> <!-- 모든 컴포넌트는 router-view에서 나와요 -->
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    font-family: 'GmarketSansMedium';
  }
  a{
    margin-right: 20px; color: yellowgreen; 
    text-decoration: none; font-size: 1.3rem; font-weight: 700;
  }
</style>
