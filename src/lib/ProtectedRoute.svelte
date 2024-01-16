<script lang="ts">
	import { page } from '$app/stores';
	import { signIn } from '@auth/sveltekit/client';
</script>

{#if $page.data.session}
	<slot />
{:else}
	<span class="notSignedInText">You are not signed in</span>
	<button on:click={() => signIn('okta')}>Sign In</button>
{/if}
