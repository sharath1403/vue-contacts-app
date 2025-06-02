<template>
  <div class="contact-card">
    <div class="contact-card__image">
      <img :src="user.picture.large" alt="User photo" class="user-img" />
    </div>
    <div class="contact-card__details">
      <h2 class="contact-card__name">
        {{ user.name.first }} {{ user.name.last }}
      </h2>
      <div class="address-div">
        <p class="contact-card__address">
          {{ user.location.street.number }} {{ user.location.street.name
          }}<br />
          {{ user.location.postcode }} {{ user.location.city }}<br />
          {{ user.location.country.toUpperCase() }}
        </p>
        <div class="contact-card__action">
          <a href="tel:8554630704" class="contact-card__button"
            >Call {{ user.phone }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  computed: {
    fullAddress() {
      const loc = this.user.location;
      return `${loc.street.number} ${loc.street.name}, ${loc.city}, ${loc.state}, ${loc.country}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.address-div {
  display: flex;
  gap: 20px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
}

.contact-card {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 0.75rem;
  padding: 1.25rem 2.5rem;
  box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  max-width: 40.5rem;
  margin: 1rem auto;
  gap: 0;

  @media (max-width: 640px) {
    max-width: 210px;
    flex-wrap: wrap;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 32px;
  }

  @media (max-width: 430px) {
    max-width: 310px;
  }

  &__image {
    flex: 0 0 auto;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      object-fit: cover;
      border: 0.125rem solid #ccc;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 2.5rem;

    @media (max-width: 640px) {
      margin-left: 0;
    }

    &__name,
    .contact-card__name {
      margin: 0;
      font-size: 1.75rem;
      color: #333;
      text-align: center;
    }

    &__address,
    .contact-card__address {
      margin: 0;
      font-size: 0.875rem;
      color: #666;
      line-height: 1.5;
      width: 230px;

      @media (max-width: 640px) {
        width: 210px;
        text-align: center;
      }

      @media (max-width: 430px) {
        width: 310px;
      }
    }
  }

  &__action {
    flex: 0 0 auto;
    margin-left: auto;
    display: flex;
    align-items: flex-end;

    .contact-card__button {
      margin: 0;
      display: flex;
      height: 14px;
      justify-content: center;
      align-items: center;
      background-color: #e17b00;
      width: 198px;
      color: #ffffff;
      font-weight: 600;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      text-decoration: none;
      white-space: nowrap;
      font-size: 16px;
      text-align: center;
      transition: background-color 0.3s ease;

      @media (max-width: 640px) {
        width: 178px;
      }

      @media (max-width: 430px) {
        width: 278px;
      }

      &:hover {
        background-color: #c96c00;
      }
    }
  }

  &__name {
    display: flex;
    height: 80px;
    align-items: flex-end;

    @media (max-width: 640px) {
      width: 210px;
      justify-content: center;
      align-items: flex-start;
    }

    @media (max-width: 430px) {
      width: 310px;
    }
  }
}
</style>
