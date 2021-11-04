<template>
  <div class="newbook content">
    <nav aria-label="breadcrumb mt-2">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
    <h1>This is new book page</h1>
  </div>
</template>

<script>

export default {
  name: "NewBook"
};
</script>
