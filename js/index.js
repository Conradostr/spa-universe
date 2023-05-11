import { Router } from "./router.js";
import { controls } from "./controls.js";

const buttonHome = document.querySelector('#home')
const buttonUniverse = document.querySelector('#universe')
const buttonExplorer = document.querySelector('#exploration')
const imgHome = document.querySelector('.bg-home')
const imgUniverse = document.querySelector('.bg-universe')
const imgExplorer = document.querySelector('.bg-explorer')


const control = controls({
  imgHome,
  imgUniverse,
  imgExplorer,
})
const router = new Router()

buttonHome.addEventListener('click', () => {
  control.toggleHome()
})

buttonUniverse.addEventListener('click', () => {
  control.toggleUniverse()
})

buttonExplorer.addEventListener('click', () => {
  control.toggleExplorer()
})


router.add("/", "./pages/home.html")
router.add("/universe", "./pages/universe.html")
router.add("/exploration", "./pages/exploration.html")



router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()