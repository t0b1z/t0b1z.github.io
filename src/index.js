console.log("Hello!")

let content = document.getElementById("main")
let headline = document.createElement("h1")
headline.innerText = "Welcome to our amazing restaurant!"

let paragraph = document.createElement("p")
paragraph.innerText = "This is one of the oldest restaurants in the history of the entire galaxy."

let tabsy = document.createElement("div")
tabsy.className = "tabsy"

content.append(headline) 
content.append(paragraph)
content.append(tabsy)

appendTabToTabsy( "Menu", true)
appendTabToTabsy( "Contact")

function appendTabToTabsy(title, checked = false){
    let radio = createTab(title, checked)
    let label = createLabel(title, radio)
    let content = createContent(title + " Tab")

    tabsy.append(radio)
    tabsy.append(label)
    tabsy.append(content)
}


function createTab(title, checked = false) {
    let tab = document.createElement("input")
    let id = "tab_" + title.toLowerCase()

    tab.type = "radio"
    tab.id = id
    tab.name = "tab"
    tab.checked = checked
    return tab
}

function createLabel(title, tab) {
    let label = document.createElement("label")
    label.className = "tabButton"
    label.setAttribute("for", tab.id)
    label.textContent = title
    return label;
}

function createContent(title) {
    let tab = document.createElement("div")
    tab.className = "tab"

    let content = document.createElement("content")
    content.className = "content"

    let heading = document.createElement("h3")
    heading.textContent = title

    let exampleParagraph = document.createElement("p")
    exampleParagraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    tab.append(content)
    content.append(heading)
    content.append(exampleParagraph)

    return tab
}
