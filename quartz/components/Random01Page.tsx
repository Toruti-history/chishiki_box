import { QuartzComponentConstructor } from "./types"

const Random01Page: QuartzComponentConstructor = () => {
  return () => (
    <button
      type="button"
      onClick={() => {
        alert("clicked")
      }}
    >
      Random Note
    </button>
  )
}

export default Random01Page