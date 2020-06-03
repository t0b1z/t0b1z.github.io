const data = [
  {
    title: 'Book Collection',
    desc: 'My first Vue.JS Project that lets the user safe and display their book collection.',
    tech: ['Vue.JS', 'Bootstrap'],
    url: 'https://t0b1z.github.io/vuelib/',
    img: 'vuelib.jpg'
  }
]

let projectsElement = document.getElementById('projects')

function createProjectElement(item) {
  let project = document.createElement("div")

  let title = document.createElement("h2")
  title.innerText = item.title

  let titleAnchor = document.createElement("a")
  titleAnchor.href = item.url
  titleAnchor.appendChild(title)

  let img = document.createElement("img")
  img.src = "img/" + item.img

  let imgAnchor = document.createElement("a")
  imgAnchor.href = item.url
  imgAnchor.appendChild(img)

  let desc = document.createElement("p")
  desc.innerText = item.desc

  //let tech = document.createElement("ul")

  project.appendChild(titleAnchor)
  project.appendChild(imgAnchor)
  project.appendChild(desc)

  project.setAttribute("class", "project")

  return project;
}

data.forEach(
  (item, index) => {
    projectsElement.appendChild(createProjectElement(item))
  }
)
