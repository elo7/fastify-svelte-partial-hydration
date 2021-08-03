<script>
 export let component;
 export let name;
 export let props;
</script>

<div class="hydrate-me" data-component={name} data-props={JSON.stringify(props)}>
	<svelte:component this={component} {...props}/>
</div>
