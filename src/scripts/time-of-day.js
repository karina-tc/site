var currentHour = new Date().getHours();
var previousGreetingClass;

function initializeGreeting() {
    var greeting, greetingClass;
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning";
        greetingClass = "sunrise";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon";
        greetingClass = "sunset";
    } else {
        greeting = "Good evening";
        greetingClass = "evening";
    }

    var greetingElement = document.getElementById("greeting");
    var todElement = document.querySelector(".tod");

    if (greetingElement) {
        greetingElement.textContent = greeting;
    }

    if (todElement) {
        todElement.classList.add(greetingClass);
    }

    previousGreetingClass = greetingClass;
}

function updateGreeting() {
    var greeting, greetingClass;
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning";
        greetingClass = "sunrise";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon";
        greetingClass = "sunset";
    } else {
        greeting = "Good evening";
        greetingClass = "evening";
    }

    var greetingElement = document.getElementById("greeting");
    var todElement = document.querySelector(".tod");

    if (greetingElement) {
        greetingElement.textContent = greeting;
    }

    if (todElement && greetingClass !== previousGreetingClass) {
        todElement.classList.remove(previousGreetingClass);
        todElement.classList.add(greetingClass);

        previousGreetingClass = greetingClass;
    }
}

function handleKeydown(event) {
    if (event.key === "ArrowRight") {
        currentHour = (currentHour + 1) % 24;
        updateGreeting();
    } else if (event.key === "ArrowLeft") {
        currentHour = (currentHour - 1 + 24) % 24;
        updateGreeting();
    }
}

initializeGreeting();
document.addEventListener("keydown", handleKeydown);
