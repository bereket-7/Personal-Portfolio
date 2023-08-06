const roles = ["Full Stack Developer", "Blogger", "Software Tester", "Volunteer"]
let currentRoleIndex = 0
let currentLetterIndex = 0
let typingInterval

function typeRole() {
    const roleElement = document.getElementById("role")
    const currentRole = roles[currentRoleIndex]
    roleElement.textContent = currentRole.slice(0, currentLetterIndex)
    currentLetterIndex++
    if (currentLetterIndex > currentRole.length) {
        currentLetterIndex = 0
        currentRoleIndex = (currentRoleIndex + 1) % roles.length
    }
}

function startTyping() {
    typingInterval = setInterval(typeRole, 200)
}

function stopTyping() {
    clearInterval(typingInterval)
}
startTyping()

document.getElementById("learn-more-btn").addEventListener("click", function () {
    stopTyping()
})

// JavaScript for smooth scrolling to top of the page with progress indicator
document.addEventListener('DOMContentLoaded', function () {
    var upArrow = document.querySelector('.up-arrow')

    upArrow.addEventListener('click', function () {
        var scrollToTop = function () {
            var position = window.scrollY
            if (position > 0) {
                window.scrollTo(0, position - 20)
                requestAnimationFrame(scrollToTop)
            }
        }
        requestAnimationFrame(scrollToTop)
    })

    // Show the up arrow when scrolling down
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY
        if (scrollPosition > 300) {
            upArrow.classList.add('show-up-arrow')
        } else {
            upArrow.classList.remove('show-up-arrow')
        }
    })
})


