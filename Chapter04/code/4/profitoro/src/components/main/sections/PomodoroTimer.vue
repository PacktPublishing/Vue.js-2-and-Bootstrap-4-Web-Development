<template>
  <div>
    <div>PomodoroTimer</div>
    <div class="row">
      <div class="col">
        <svg-circle-sector angle="5" text="5 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="10" text="10 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="15" text="15 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="30" text="30 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="45" text="45 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="60" text="60 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="90" text="90 degrees"></svg-circle-sector>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <svg-circle-sector angle="120" text="120 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="160" text="160 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="190" text="190 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="250" text="250 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="290" text="290 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="345" text="345 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="360" text="360 degrees"></svg-circle-sector>
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <svg-circle-sector angle="110" text="110 degrees"></svg-circle-sector>
      </div>
      <div class="col-3">
        <svg-circle-sector angle="130" text="130 degrees"></svg-circle-sector>
      </div>
      <div class="col-1">
        <svg-circle-sector angle="180" text="180 degrees"></svg-circle-sector>
      </div>
      <div class="col-1">
        <svg-circle-sector angle="270" text="270 degrees"></svg-circle-sector>
      </div>
      <div class="col-3">
        <svg-circle-sector angle="270" text="270 degrees"></svg-circle-sector>
      </div>
      <div class="col-2">
        <svg-circle-sector angle="360" text="360 degrees"></svg-circle-sector>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <svg-circle-sector angle="95" text="95 degrees"></svg-circle-sector>
      </div>
      <div class="col">
        <svg-circle-sector angle="279" text="279 degrees"></svg-circle-sector>
      </div>
    </div>
    <div>
      <svg-circle-sector angle="180" text="big circle"></svg-circle-sector>
    </div>
  </div>
</template>
<script>
  import SvgCircleSector from './timer/SvgCircleSector'
  export default {
    components: {
      SvgCircleSector
    }
  }
</script>
<style scoped lang="sass">
</style>
