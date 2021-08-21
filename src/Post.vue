<template>
	<div v-if="post" class="row post mt-5 pt-3 pb-3 bg-white form-wrapper">
		<div class="col-12 col-sm-4 text-center">
			<img class="img-fluid" :src="'http://codeigniter-4-restapi-tutorial/assets/uploads/' + post.post_featured_image" v-if="post.post_featured_image != ''" alt="">
			<img v-else :src="imgPlaceholder" alt="">
		</div>
		<div class="col-12 col-sm-8">
			<h4>{{ post.post_title }}</h4>
			<p>{{ post.post_description }}</p>
		</div>
		<div class="col-12 mt-3">
			<router-link to="/" class="btn btn-outline-success mr-2">All Posts</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				post: false,
				imgPlaceholder: 'http://via.placeholder.com/300'
			}
		},
		created() {
			this.get()
		},
		methods: {
			get() {
				var id = this.$route.params.id
				this.$api.get('/blog/' + id)
					.then(res => {
						this.post = res.data
					}).catch(err => {
						console.log(err.response)
					})
			}
		}
	}
</script>