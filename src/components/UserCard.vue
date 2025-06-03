<template>
  <div class="user-card">
    <img
      :src="user?.picture?.large"
      alt="User photo"
      class="user-card__image"
    />
    <div class="user-card__content">
      <div class="user-card__name">
        {{ user?.name?.first }} {{ user?.name?.last }}
      </div>
      <div class="user-card__address">
        {{ user?.location?.street?.number }} {{ user?.location?.street?.name }},
        {{ user?.location?.postcode }} {{ user?.location?.city }},
        {{ user?.location?.country?.toUpperCase() }}
      </div>
      <div class="user-card__call">Call {{ user?.phone }}</div>
    </div>
  </div>
</template>

<script>
import "@/styles/UserCard.scss";
export default {
  props: ["user"],
};
</script>
