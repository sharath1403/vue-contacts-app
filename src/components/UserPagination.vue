<template>
  <nav class="pagination">
    <button
      v-for="page in visiblePages"
      :key="page"
      :class="{ 'pagination__button--active': page === currentPage }"
      class="pagination__button"
      @click="$emit('page-changed', page)"
    >
      {{ page }}
    </button>
  </nav>
</template>

<script>
import "@/styles/UserPagination.scss";
export default {
  name: "UserPagination",
  props: {
    total: Number,
    cardsPerPage: Number,
    currentPage: Number,
  },

  computed: {
    totalPages() {
      return Math.ceil(this.total / this.cardsPerPage);
    },
    visiblePages() {
      const total = this.totalPages;
      const current = this.currentPage;
      const maxButtons = 5;

      let start = Math.max(current - Math.floor(maxButtons / 2), 1);
      let end = start + maxButtons - 1;

      if (end > total) {
        end = total;
        start = Math.max(end - maxButtons + 1, 1);
      }

      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
};
</script>
