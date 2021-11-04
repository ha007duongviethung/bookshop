<template>
<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <div class="card mb-3">
        <div class="card-img">
            <img src="{book.img}" class="card-img-top" alt="book">
            <div class="quick-add">
                <a href="#">Quick add</a>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{book.title}}</h5>
            <p class="card-text">{{book._type}}</p>
            <p class="card-text"><small class="text-muted">by: {{book.auth}}</small></p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "BookCard",
    props: ['book'],
}
</script>