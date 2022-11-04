<template>
	<div class="login-view">
		<div class="login-box">
			<div class="login-left">
				<img src="@/assets/images/login_left0.png" alt="login" />
			</div>
			<div class="login-form">
				<div class="login-logo">
					<img class="login-icon" src="@/assets/images/logo.svg" alt="logo" />
					<h2 class="logo-text">Vue3-Shop</h2>
				</div>
				<form-login />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import FormLogin from "@/views/login/cpns/form-login.vue";
</script>
<style scoped lang="less">
.login-view {
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background: url("@/assets/images/login_bg.svg");
	.login-box {
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-sizing: border-box;
		width: 96%;
		height: 94%;
		background-color: hsl(0deg 0% 100% / 80%);
		border-radius: 10px;
		padding: 0 50px;
		.login-left {
			width: 800px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.login-form {
			width: 420px;
			padding: 50px 40px 45px;
			border-radius: 10px;
			box-shadow: 2px 3px 7px rgb(0 0 0 / 20%);
			.login-logo {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 45px;
				.login-icon {
					width: 60px;
					height: 52px;
				}
				.logo-text {
					padding: 0 0 0 25px;
					margin: 0;
					font-size: 42px;
					font-weight: bold;
					color: #34495e;
					white-space: nowrap;
				}
			}
		}
	}
}
</style>
