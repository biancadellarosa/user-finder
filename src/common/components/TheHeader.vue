<template>
  <header id="header">
    <div class="hedear__container">
      <slot></slot>
    </div>
  </header>
</template>
<sytle scoped lang="scss">
#header {
  position: sticky;
  margin-bottom: $hda-space-m;
  background-color: $hda-color-primary;

  .hedear__container {
    width: 100%;
    height: 70px;
    color: $hda-color-white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: $hda-weight-bold;
  }
}
</sytle>
