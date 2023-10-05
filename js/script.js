const links = document.querySelectorAll('a[href^="#"]')

function scrollWindow(link){
    link.preventDefault()
    const href = link.target.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
}

links.forEach((item) => {
    item.addEventListener('click', scrollWindow)
})