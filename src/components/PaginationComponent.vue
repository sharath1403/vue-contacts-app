<template>
  <nav class="pagination">
    <button
      v-for="page in visiblePages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="$emit('page-changed', page)"
    >
      {{ page }}
    </button>
  </nav>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    total: Number,
    cardsPerPage: Number,
    currentPage: Number,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.cardsPerPage);
    },
    visiblePages() {
      const isMobile = this.windowWidth <= 640;
      if (isMobile) {
        // show only [currentPage -1, currentPage, currentPage +1]
        const start = Math.max(this.currentPage - 1, 1);
        const end = Math.min(this.currentPage + 1, this.totalPages);
        const pages = [];
        for (let i = start; i <= end; i++) pages.push(i);
        return pages;
      } else {
        // show all pages on larger screens
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  button {
    cursor: pointer;
    background-color: grey;
    color: white;
    border-radius: 6px;
    border: 1px solid black;
  }

  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 1rem;
    button {
      font-size: 14px;
    }
  }
}
</style>
