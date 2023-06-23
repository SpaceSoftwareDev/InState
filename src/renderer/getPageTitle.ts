export function getPageTitle(pageContext: {
	config: { documentProps?: { title: string } }
	documentProps?: { title: string }
}): string {
	const title = pageContext.config.documentProps?.title || pageContext.documentProps?.title
	if (title) return `${title} - InState`
	return "InState"
}
