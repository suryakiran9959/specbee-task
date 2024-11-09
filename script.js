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
    const sliderCards = document.querySelectorAll('.slider__card');
    const totalCards = speakers.length;

    // Calculate visible cards based on screen size
    const containerWidth = sliderContainer.offsetWidth;
    const cardWidth = sliderCards[0].offsetWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth);

    // Update the current index, considering visible cards
    currentIndex += direction;

    // Loop around if currentIndex is out of bounds
    if (currentIndex < 0) {
        currentIndex = totalCards - visibleCards;
    } else if (currentIndex > totalCards - visibleCards) {
        currentIndex = 0;
    }

    // Calculate translation
    const translateX = -(currentIndex * cardWidth);
    sliderContainer.style.transform = `translateX(${translateX}px)`;
}

// Handle window resize to recalculate visible cards and translation
window.addEventListener('resize', () => {
    moveSlider(0); // Reset translation on resize
});

// Function to open the popover and display the speaker details
function openPopover(index) {
    const speaker = speakers[index];
    document.getElementById('popover__name').innerText = speaker.name;
    document.getElementById('popover__title').innerText = speaker.title;
    document.getElementById('popover__company').innerText = speaker.company;
    document.getElementById('popover__bio').innerText = speaker.bio;
    document.getElementById('popover__img').src = speaker.img;

    const popover = document.getElementById("popover");
    popover.style.display = "block"; 
}


function closePopover() {
    const popover = document.getElementById("popover");
    popover.style.display = "none"; 
}

