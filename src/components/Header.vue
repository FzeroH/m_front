<template>
  <div class="header-wrapper">
    <div class="header-container">
      <router-link to="/" class="header-logo">
        <h2>Mixed</h2>
        <h2>Site</h2>
      </router-link>
      <div class="header-container-links">
        <router-link to="/weather">
          <button>Weather</button>
        </router-link>
        <router-link to="/currency">
          <button>Курсы валют</button>
        </router-link>
        <router-link to="/weather">
          <button>Пусто</button>
        </router-link>
        <router-link to="/weather">
          <button>Пусто</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  position: relative;
  background: #171A21;
}

.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: #2C313D solid 1px;
  margin: 0 10px 0 10px;
}

.header-logo {
  display: flex;
  flex-direction: row;
  text-decoration: none;
}

.header-logo > h2 {
  color: white;
  margin: 0;
  padding-top: 20px;
  padding-left: 20px;
}

.header-logo > h2:not(:first-child) {
  color: greenyellow;
  padding-left: 0;
}

.header-container-links {
  display: flex;
  flex-direction: row;
}

.header-container-links > a {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  text-decoration: none;
  color: white;
  list-style: none;
}

.header-container-links > a > button {
  margin: 20px 20px 20px 0;
  border: transparent;
  background: transparent;
  color: white;
}

/* Large desktops and laptops */
@media (min-width: 1200px) {
  .header-logo > h2 {
    font-size: 24px;
  }

  .header-container-links > a > button {
    font-size: 16px;
  }
}

/* Portrait tablets and medium desktops */
@media (min-width: 992px) and (max-width: 1199px) {
  .header-logo > h2 {
    font-size: 24px;
  }

  .header-container-links > a > button {
    font-size: 16px;
  }
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
  .header-logo > h2 {
    font-size: 20px;
  }

  .header-container-links > a > button {
    font-size: 14px;
  }
}

/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  .header-logo > h2 {
    font-size: 18px;
  }

  .header-container-links > a > button {
    font-size: 10px;
  }
}
</style>
