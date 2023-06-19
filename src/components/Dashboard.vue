<template>
  <div class="dashboard">
    <!-- Logo -->
    <div class="logo">
      <img src="/path/to/your/logo.png" alt="Logo">
    </div>

    <!-- Navigation Bar -->
    <div class="navigation">
      <ul>
        <li><router-link to="/dashboard">Home</router-link></li>
        <li><router-link to="/loans">Loans</router-link></li>
        <li><router-link to="/payments">Payments</router-link></li>
        <li><router-link to="/borrowers">Borrowers</router-link></li>
        <li><router-link to="/loanplans">Loan Plans</router-link></li>
        <li><router-link to="/loantypes">Loan Types</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
        <li><router-link to="/logout">Logout</router-link></li>
      </ul>
    </div>

    <!-- Content Boxes -->
    <div class="content">
      <div class="box">Box 1</div>
      <div class="box">Box 2</div>
      <div class="box">Box 3</div>
    </div>
  </div>
</template>


<script>
export default {
  // Add your dashboard page logic here
};
</script>

<style scoped>
.dashboard-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
