<template>
  <div class="cards-container">
    <div class="card">
      <img :src="user.picture.large" alt="User photo" class="user-img" />
      <div class="card-content">
        <div class="name">{{ user.name.first }} {{ user.name.last }}</div>
        <div class="address">
          {{ user.location.street.number }} {{ user.location.street.name }},
          {{ user.location.postcode }} {{ user.location.city }},
          {{ user.location.country.toUpperCase() }}
        </div>
        <div class="call-section">📞 Call {{ user.phone }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style scoped lang="scss">
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 40px; /* 20px top-bottom, 40px left-right */
  justify-content: center;
  align-items: stretch; /* ensures equal height */
}

.card {
  width: 300px;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  height: 100%; /* necessary for flex equal height */
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 32px; /* space from image to name */
}

.name {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 20px;
  line-height: 1.2;
  word-break: break-word;
}

.address {
  margin-bottom: 20px;
}

.call-section {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid #ccc;
}

@media (min-width: 640px) {
  .card {
    flex-direction: row;
    width: 728px;
    height: 203px;
    padding: 20px 40px;
    align-items: center;
    gap: 40px;
  }

  .user-img {
    align-self: flex-start;
    flex-shrink: 0;
  }

  .card-content {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    gap: 0 20px;
  }

  .name {
    width: 480px;
    height: 80px;
    font-size: 28px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    text-align: left;
  }

  .address {
    width: 230px;
    height: 63px;
    margin: 0;
    text-align: left;
  }

  .call-section {
    width: 230px;
    height: 63px;
    margin: 0;
    text-align: left;
    padding: 0;
    border: none;
    align-self: flex-start;
  }
}
</style>
