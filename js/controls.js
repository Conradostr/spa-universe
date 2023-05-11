export function controls({
  imgHome,
  imgUniverse,
  imgExplorer,
}) {
  function toggleHome() {
    imgHome.classList.remove("hide")
    imgUniverse.classList.add("hide")
    imgExplorer.classList.add("hide")
  }

  function toggleUniverse() {
    imgHome.classList.add("hide")
    imgUniverse.classList.remove("hide")
    imgExplorer.classList.add("hide")
  }

  function toggleExplorer() {
    imgHome.classList.add("hide")
    imgUniverse.classList.add("hide")
    imgExplorer.classList.remove("hide")
  }


  return {
    toggleHome,
    toggleExplorer,
    toggleUniverse,
  }
}