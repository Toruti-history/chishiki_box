import { QuartzComponentConstructor } from "./types"

const Random01Page: QuartzComponentConstructor = () => {
  return () => (
    <button
      type="button"
      onClick={() => {
        console.log("BUTTON CLICKED")
        alert("clicked")
      }}
    >
      Random Note
    </button>
  )
}

export default Random01Page
