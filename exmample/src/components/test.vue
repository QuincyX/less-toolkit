<template lang="pug">
.page
  .container
    .box
      .title 主要颜色
      .colorList.color
        .item(v-for="(i,n) in colorList" :key="n" :class="'color-'+i") @{{i}}
    .box
      .title 文字颜色
      .colorList.textColor
        .item(v-for="(i,n) in textColorList" :key="n" :class="'textColor-'+i") @{{i}}
    .box
      .title 基础颜色
      .colorList.baseColor
        .item(v-for="(i,n) in baseColorList" :key="n" :class="'baseColor-'+i") @{{i}}
    .box
      .title 色板
      .colorList.rainbowColor
        .item(v-for="(i,n) in rainbowColorList" :key="n" :class="'rainbowColor-'+i") @{{i}}
    .box
      .title 形状
      .list.shape
        .item.rightTriangle
        .item.equilateralTriangle
        .item.circle
        .item.square
    .box
      .title 图片
      .list.image
        .item.defaultImage

</template>

<script>
export default {
  data() {
    return {
      colorList: ['primary', 'success', 'warn', 'error', 'info'],
      textColorList: ['textTitle', 'textPrimary', 'textGrey', 'textDisabled'],
      baseColorList: ['white', 'black', 'grey', 'border', 'background'],
      rainbowColorList: [
        'red',
        'volcano',
        'orange',
        'gold',
        'yellow',
        'lime',
        'green',
        'cyan',
        'blue',
        'geekBlue',
        'purple',
        'magenta'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.container {
  min-height: 200px;
  padding: 1em;
  text-align: center;
  color: @textPrimary;
}
.box {
  .border;
  .marginBottom;
  .boxShadow;
  .title {
    .color(@textTitle);
    .borderBottom;
    .padding(10px, 0);
  }
  .item {
    .margin(5px);
    .pointer;
    .trans;
  }
}
.colorList {
  .flexCenter;
  .item {
    .padding(5px, 10px);
    .radius;
    .border;
    .hoverColor;
    .hoverScale;
  }
}
.colorBlock(@color) {
  .background(@color);
  .color(@white);
}
.colorBlock(@color)when(@color=@white) {
  .color(@black);
}
.color {
  &-primary {
    .colorBlock(@primary);
  }
  &-warn {
    .colorBlock(@warn);
  }
  &-error {
    .colorBlock(@error);
  }
  &-info {
    .colorBlock(@info);
  }
  &-success {
    .colorBlock(@success);
  }
}
.textColor {
  &-textTitle {
    .colorBlock(@textTitle);
  }
  &-textPrimary {
    .colorBlock(@textPrimary);
  }
  &-textGrey {
    .colorBlock(@textGrey);
  }
  &-textDisabled {
    .colorBlock(@textDisabled);
  }
}
.baseColor {
  &-white {
    .colorBlock(@white);
  }
  &-black {
    .colorBlock(@black);
  }
  &-grey {
    .colorBlock(@grey);
  }
  &-border {
    .colorBlock(@border);
  }
  &-background {
    .colorBlock(@background);
  }
}
.rainbowColor {
  &-red {
    .colorBlock(@red);
  }
  &-volcano {
    .colorBlock(@volcano);
  }
  &-orange {
    .colorBlock(@orange);
  }
  &-gold {
    .colorBlock(@gold);
  }
  &-yellow {
    .colorBlock(@yellow);
  }
  &-lime {
    .colorBlock(@lime);
  }
  &-green {
    .colorBlock(@green);
  }
  &-cyan {
    .colorBlock(@cyan);
  }
  &-blue {
    .colorBlock(@blue);
  }
  &-geekBlue {
    .colorBlock(@geekBlue);
  }
  &-purple {
    .colorBlock(@purple);
  }
  &-magenta {
    .colorBlock(@magenta);
  }
}

.shape {
  .rightTriangle {
    .rt(@red, 100px);
  }
  .equilateralTriangle {
    .et(@cyan, 60px);
  }
  .circle {
    .circle(@orange, 100px);
  }
  .square {
    .square(@magenta, 100px);
  }
}
.image {
  .defaultImage {
    .defaultImage;
  }
}
</style>
