function getPreferredTheme(): "light" | "dark" {
	const stored = localStorage.getItem("theme");
	if (stored === "light" || stored === "dark") return stored;
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function applyTheme(theme: "light" | "dark") {
	document.documentElement.setAttribute("data-theme", theme);
	localStorage.setItem("theme", theme);
}

// Listen for system theme changes
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", (e) => {
		if (!localStorage.getItem("theme")) {
			applyTheme(e.matches ? "dark" : "light");
		}
	});

// Initial apply
applyTheme(getPreferredTheme());
