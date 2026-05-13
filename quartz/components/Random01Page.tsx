import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Random01Page() {
    const openRandom = async () => {
      const res = await fetch("/contentIndex.json")
      const data = await res.json()

      const pages = Object.keys(data).filter((p) =>
        p.startsWith("01Page/")
      )

      if (pages.length === 0) return

      const randomPage =
        pages[Math.floor(Math.random() * pages.length)]

      window.location.href = "/" + randomPage
    }

    return (
      <button onClick={openRandom}>
        Random Note
      </button>
    )
  }

  return Random01Page
}) satisfies QuartzComponentConstructor