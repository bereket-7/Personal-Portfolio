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

// JavaScript for smooth scrolling to top of the page
document.addEventListener('DOMContentLoaded', function () {
    var upArrow = document.querySelector('.up-arrow')
    upArrow.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
});

