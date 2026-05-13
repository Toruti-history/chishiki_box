import { QuartzComponentConstructor } from "./types"

const Random01Page: QuartzComponentConstructor = () => {
  return () => (
    <button
      type="button"
      onClick={async () => {
        try {
          const res = await fetch("/static/contentIndex.json")
          const data = await res.json()

          console.log(data)

          const pages = Object.values(data)
            .map((item: any) => item.slug)
            .filter((slug) => slug?.startsWith("01Page/"))

          console.log(pages)

          if (pages.length === 0) {
            alert("No pages found")
            return
          }

          const randomPage =
            pages[Math.floor(Math.random() * pages.length)]

          console.log(randomPage)

          window.location.href = "/" + randomPage

        } catch (err) {
          console.error(err)
        }
      }}
    >
      Random Note
    </button>
  )
}

export default Random01Page