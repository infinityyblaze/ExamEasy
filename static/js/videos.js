// Function to toggle play/pause for the video
function togglePlayPause(video) {
    const iframe = video.querySelector('iframe');
    const iframeSrc = iframe.src;
    // Check if the video is currently playing
    if (iframeSrc.includes("autoplay=1")) {
        // Pause the video by removing the autoplay parameter
        iframe.src = iframeSrc.replace("autoplay=1", "");
    } else {
        // Play the video by adding the autoplay parameter
        iframe.src = iframeSrc + "&autoplay=1";
    }
}

// Function to generate HTML for each video
function generateVideoHTML(video) {
    return `
        <div class="video-item">
            <h2>${video.title}</h2>
            <div class="video-wrapper">
                <iframe width="500" height="300" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
                <button class="play-pause-btn" onclick="togglePlayPause(this.parentElement)">Play/Pause</button>
            </div>
        </div>
    `;
}

// Function to inject the generated HTML into the document
function renderVideos() {
    const videoList = document.querySelector('.video-list');
    if (videoList) {
        videos.forEach(video => {
            const videoHTML = generateVideoHTML(video);
            videoList.innerHTML += videoHTML;
        });
    }
}

// Call the renderVideos function when the page loads
window.addEventListener('load', renderVideos);
// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth' // Smooth scrolling behavior
            });
        }
    });
});
// Example JavaScript to trigger CSS transition
document.querySelector('.element').addEventListener('click', function() {
    this.classList.toggle('animate');
});
// JavaScript to trigger CSS transition
document.querySelector('.element').addEventListener('click', function() {
    this.classList.toggle('animate');
});
