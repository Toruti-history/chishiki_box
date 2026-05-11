// Vercel Analytics initialization
// This loads the analytics script dynamically
;(function () {
  // Initialize Vercel Web Analytics
  ;(window as any).va =
    (window as any).va ||
    function () {
      ;((window as any).vaq = (window as any).vaq || []).push(arguments)
    }

  // Load the Vercel Analytics script
  const script = document.createElement("script")
  script.defer = true
  script.src = "/_vercel/insights/script.js"

  document.head.appendChild(script)

  // Track initial page view
  ;(window as any).va("pageview")

  // Track SPA navigation for Quartz
  document.addEventListener("nav", () => {
    if ((window as any).va) {
      ;(window as any).va("pageview", { path: location.pathname })
    }
  })
})()
