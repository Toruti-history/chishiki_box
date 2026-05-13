import { QuartzComponentConstructor } from "./types"

const Random01Page: QuartzComponentConstructor = () => {
  return () => (
    <div>
      <button id="random-note-button">
        Random Note
      </button>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", () => {
              const button = document.getElementById("random-note-button")

              if (!button) return

              button.addEventListener("click", async () => {
                try {
                  const res = await fetch("/static/contentIndex.json")
                  const data = await res.json()

                  const pages = Object.keys(data).filter((p) =>
                    p.startsWith("01Page/")
                  )

                  if (pages.length === 0) return

                  const randomPage =
                    pages[Math.floor(Math.random() * pages.length)]

                  window.location.href = "/" + randomPage
                } catch (err) {
                  console.error(err)
                }
              })
            })
          `,
        }}
      />
    </div>
  )
}

export default Random01Page
