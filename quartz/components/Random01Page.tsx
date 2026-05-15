import { QuartzComponentConstructor } from "./types"

const Random01Page: QuartzComponentConstructor = () => {
  return () => (
    <div>
      <style>
        {`
          .random-button {
            display: block;
            width: 100%;
            padding: 12px 14px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 10px;
            border: 1px solid var(--lightgray);
            background: var(--secondary);
            color: #8eb3cc;
            cursor: pointer;
            transition: all 0.15s ease;
          }

          .random-button:hover {
            transform: translateY(-1px);
            background: var(--highlight);
          }

          .random-button:active {
            transform: translateY(0px);
          }
        `}
      </style>

      <button id="random-note-button" class="random-button">
        ページをランダム表示
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