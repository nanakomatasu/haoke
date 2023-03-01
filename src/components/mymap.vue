<template>
  <baidu-map
    class="bm-view"
    :center="center"
    :zoom="zoom"
    :scroll-wheel-zoom="true"
  ></baidu-map>
</template>

<script>
export default {
  name: 'MyMap',
  data () {
    return {
      center: { lng: 0, lat: 0 }, // 经纬度
      zoom: 1, // 地图展示级别
    };
  },
};
</script>

<style>
.bm-view {
  width: 500px;
  height: 500px;
}
</style>
