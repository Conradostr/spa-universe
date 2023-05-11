export class Router { 
  routes = {}

  add(routeName, url) {
    this.routes[routeName] = url
  }

  route(event) {
    event = event || window.event
   event.preventDefault() 

   window.history.pushState({}, "", event.target.href )
    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes["/home"]

    fetch(route)
    .then( data => data.text())
    .then(html => {
      document.querySelector(".page").innerHTML = html
    } )
  }

}