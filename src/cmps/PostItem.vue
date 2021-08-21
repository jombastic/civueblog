<template>
	<div class="row post mb-5">
		<div class="col-12 col-sm-4 text-center">
			<img class="img-fluid" :src="'http://codeigniter-4-restapi-tutorial/assets/uploads/' + post.post_featured_image" v-if="post.post_featured_image != ''" alt="">
			<img v-else :src="imgPlaceholder" alt="">
		</div>
		<div class="col-12 col-sm-8">
			<h4>{{ post.post_title }}</h4>
			<p>{{ post.post_description }}</p>
		</div>
		<div class="col-12 mt-3">
			<router-link :to="'/post/' + post.post_id" class="btn btn-outline-success mr-2">View</router-link>
			<button class="btn btn-outline-primary" @click="$emit('edit', post.post_id, index)">Edit</button>
			<button class="btn btn-outline-danger float-right" @click="$emit('delete', post.post_id, index)">Delete</button>
		</div>
		<div class="col-12">
			<hr>

		</div>
	</div>
</template>

<script>
	export default {
		props: ['post', 'index', 'imgPlaceholder']
	}
</script>