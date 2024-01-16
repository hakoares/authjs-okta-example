<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	// import type { LayoutData } from './$types';
	// export let data: LayoutData;
</script>

<header>
	<p>
		{#if $page.data.session}
			{#if $page.data.session.user?.image}
				<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
			{/if}
			<span class="signedInText">
				<small>Signed in as</small><br />
				<strong>{$page.data.session.user?.name ?? 'User'}</strong>
			</span>
			<button on:click={() => signOut()} class="button">Sign out</button>
		{:else}
			<span class="notSignedInText">You are not signed in</span>
			<button on:click={() => signIn()}>Sign In</button>
		{/if}
	</p>
</header>
<main>
	<slot />
</main>

<style>
	main {
		padding: 1rem;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background: #eee;
	}
</style>
