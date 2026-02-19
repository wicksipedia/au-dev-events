function initFilters() {
	const buttons = document.querySelectorAll<HTMLButtonElement>(".filter-btn");
	const cards = document.querySelectorAll<HTMLElement>("[data-tags]");

	for (const btn of buttons) {
		btn.addEventListener("click", () => {
			const tag = btn.dataset.tag;

			// Update active state
			for (const b of buttons) {
				b.classList.remove("border-accent", "bg-accent/15", "text-accent");
				b.classList.add("border-border/50", "text-foreground/60");
			}
			btn.classList.remove("border-border/50", "text-foreground/60");
			btn.classList.add("border-accent", "bg-accent/15", "text-accent");

			// Show/hide cards
			for (const card of cards) {
				const cardTags = card.dataset.tags?.split(",") ?? [];
				card.style.display =
					tag === "all" || cardTags.includes(tag ?? "") ? "" : "none";
			}
		});
	}
}

initFilters();
document.addEventListener("astro:after-swap", initFilters);
