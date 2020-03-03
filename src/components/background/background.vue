<template>
    <div class="bg">
      <img class="static" src="../../assets/img/allbg/1.gif" />
      <img class="lf-tp" src="../../assets/img/allbg/2.gif" />
      <img class="tp" src="../../assets/img/allbg/3.gif" />
      <img class="lf" src="../../assets/img/allbg/4.gif" />
      <img class="rt" src="../../assets/img/allbg/5.gif" />
    </div>
</template>
<script>
	export default{
		name:"background",
	}
</script>

<style lang="less" scoped>
.bg {
  z-index: -300;
  width: 100%;
  top: 40px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 600px) {
    .block-mobile {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    .block-pc {
      display: none;
    }
  }
  .static {
    width: 100%;
    position: fixed;
    top: 40px;
    animation: tp 1.0s;
  }
  .lf-tp {
    width: 100%;
    position: fixed;
    animation: lftp 1.0s;
    top: 40px;
  }
  .tp {
    width: 100%;
    position: fixed;
    animation: tp 1.0s;
    top: 40px;
  }
  .lf {
    width: 100%;
    position: fixed;
    animation: lf 1.0s;
    top: 40px;
  }
  .rt {
    width: 100%;
    position: fixed;
    animation: rt 1.0s;
    top: 40px;
  }


  @keyframes lftp {
    from {
      left: -300px;
      top: -300px;
    }
    to {
      left: 0;
      top: 40;
    }
  }

  @keyframes tp {
    from {
      top: -300px;
    }
    to {
      top: 40;
    }
  }

  @keyframes rt {
    from {
      right: -300px;
    }
    to {
      right: 0px;
    }
  }

  @keyframes lf {
    from {
      left: -300px;
    }
    to {
      left: 0px;
    }
  }

  @keyframes orangeSlideIn {
    from {
      top: 100px;
    }
    to {
      top: 160px;
    }
  }
}

</style>