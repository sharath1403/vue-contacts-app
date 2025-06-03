<template>
  <main class="app">
    <header class="app__header">
      <h1 class="app__title">My Contacts</h1>
      <select v-model="sortOrder" class="app__select">
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </header>
    <div v-if="loading" class="app__loading">Loading...</div>
    <section v-else class="app__cards">
      <div
        v-for="user in paginatedUsers"
        :key="user.login.uuid"
        class="app__cards-container"
      >
        <UserCard :user="user" />
      </div>
    </section>

    <UserPagination
      :total="users.length"
      :cards-per-page="cardsPerPage"
      :current-page="currentPage"
      @page-changed="handlePageChange"
    />
  </main>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import UserPagination from "@/components/UserPagination.vue";
import "@/styles/base.scss";
import "@/styles/App.scss";
export default {
  components: { UserCard, UserPagination },
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
    this.fetchUsers();
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
    async fetchUsers() {
      this.loading = true;
      try {
        const url = "https://randomuser.me/api/?results=50";
        const response = await fetch(url);
        const data = await response.json();
        this.users = data.results;
      } catch (error) {
        // eslint-disable-next-line
        console.error("Failed to fetch users:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
