let currentIndex = 0;

const speakers = [
    {
        name: "John Doe",
        title: "Chief Marketing Office",
        company: "Acme Corp",
        bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        img: "assets/Ellipse 24.png" // Replace with the actual image path
    },
    {
        name: "John Doe",
        title: "Chief Engagement Officer",
        company: "Acquia",
        bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        img: "assets/Ellipse 24 (1).png" // Replace with the actual image path
    },
    {
        name: "John Doe",
        title: "Chief Technical Developer",
        company: "Pantheon",
        bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        img: "assets/Ellipse 24 (2).png" // Replace with the actual image path
    },
    {
        name: "John Doe",
        title: "Chief Marketing Officer",
        company: "Specbee",
        bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        img: "assets/Ellipse 24 (3).png" // Replace with the actual image path
    },
    {
        name: "John Doe",
        title: "Chief Marketing Office",
        company: "Acme Corp",
        bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        img: "assets/Ellipse 24 (4).png" // Replace with the actual image path
    },
    {
        name: "John Doe",
        title: "Chief Engagement Officer",
        company: "Acquia",
        bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        img: "assets/Ellipse 24 (5).png" // Replace with the actual image path
    },
    {
        name: "John Doe",
        title: "Chief Technical Developer",
        company: "Pantheon",
        bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        img: "assets/Ellipse 24 (6).png" // Replace with the actual image path
    } ,
    {
        name: "John Doe",
        title: "Chief Marketing Officer",
        company: "Specbee",
        bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
        img: "assets/Ellipse 24 (7).png" // Replace with the actual image path
    } 
];

function moveSlider(direction) {
    const sliderContainer = document.querySelector('.slider__container');
    const totalCards = speakers.length;

    // Update the current index
    currentIndex += direction;

    // Loop around if currentIndex is out of bounds
    if (currentIndex < 0) {
        currentIndex = totalCards - 1; // Go to the last card
    } else if (currentIndex >= totalCards) {
        currentIndex = 0; // Go to the first card
    }

    // Calculate the translation distance
    const translateX = -currentIndex * (100 / totalCards);
    sliderContainer.style.transform = `translateX(${translateX}%)`;
}

// Function to open the popover and display the speaker details
function openPopover(index) {
    // Populate popover with speaker details
    const speaker = speakers[index];
    document.getElementById('popover__name').innerText = speaker.name;
    document.getElementById('popover__title').innerText = speaker.title;
    document.getElementById('popover__company').innerText = speaker.company;
    document.getElementById('popover__bio').innerText = speaker.bio;
    document.getElementById('popover__img').src = speaker.img;

    // Show the popover
    const popover = document.getElementById("popover");
    popover.style.display = "block"; // Show the popover
}

// Function to close the popover
function closePopover() {
    const popover = document.getElementById("popover");
    popover.style.display = "none"; // Hide the popover
}
