<template>
  <main class="container">
    <header class="app-header">
      <h1>My Contacts</h1>
      <select v-model="sortOrder">
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </header>
    <div v-if="loading" class="loading">Loading...</div>
    <section v-else class="cards">
      <div
        v-for="user in paginatedUsers"
        :key="user.login.uuid"
        class="card-wrapper"
      >
        <UserCard :user="user" />
      </div>
    </section>

    <PaginationComponent
      :total="users.length"
      :cards-per-page="cardsPerPage"
      :current-page="currentPage"
      @page-changed="handlePageChange"
    />
  </main>
</template>

<script>
import UserCard from "./components/UserCard.vue";
import PaginationComponent from "./components/PaginationComponent.vue";

export default {
  components: { UserCard, PaginationComponent },
  data() {
    return {
      users: [],
      currentPage: 1,
      cardsPerPage: 6,
      sortOrder: "asc",
      loading: true,
    };
  },
  computed: {
    sortedUsers() {
      return [...this.users].sort((a, b) => {
        const nameA = `${a.name.first} ${a.name.last}`.toLowerCase();
        const nameB = `${b.name.first} ${b.name.last}`.toLowerCase();
        return this.sortOrder === "asc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.cardsPerPage;
      return this.sortedUsers.slice(start, start + this.cardsPerPage);
    },
  },
  created() {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        this.users = data.results;
        this.loading = false;
      });
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #f5f5f5;
  font-family: "Open Sans", sans-serif;
}
.card-wrapper {
  width: 100%;
  @media (max-width: 640px) {
    width: auto;
    display: flex;
    flex-wrap: wrap;
  }
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 728px;
  margin: auto;
  @media (max-width: 640px) {
    width: auto;
  }
  select {
    height: fit-content;
    padding: 10px 15px;
    border: 1px solid black;
    border-radius: 10px;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; // spacing between cards
  justify-content: center;
}

.user-card {
  width: 100%; // default width for small screens
}

h1 {
  color: #ef8100;
}
</style>
