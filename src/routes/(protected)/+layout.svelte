<script lang="ts">
	import ProtectedRoute from '$lib/ProtectedRoute.svelte';
</script>

<ProtectedRoute>
	<slot />
</ProtectedRoute>
