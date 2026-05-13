const openRandom = async () => {
  try {
    const res = await fetch("/static/contentIndex.json")

    console.log(res)

    const data = await res.json()

    console.log(data)

    const pages = Object.keys(data).filter((p) =>
      p.startsWith("01Page/")
    )

    console.log(pages)

    if (pages.length === 0) {
      alert("No pages found")
      return
    }

    const randomPage =
      pages[Math.floor(Math.random() * pages.length)]

    console.log(randomPage)

    window.location.href = "/" + randomPage

  } catch (e) {
    console.error(e)
  }
}