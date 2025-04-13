const images = [
    {src: "images/img1.avif", alt: "Image 1", height:"200px", width:"300px"},
    {src: "images/img2.avif", alt: "Image 2", height:"200px", width:"300px"},
    {src: "images/img3.avif", alt: "Image 3", height:"200px", width:"300px"},
    {src: "images/img4.avif", alt: "Image 4", height:"200px", width:"300px"},
    {src: "images/img5.avif", alt: "Image 5", height:"200px", width:"300px"},
    {src: "images/img4.avif", alt: "Image 5", height:"200px", width:"300px"},
    {src: "images/img3.avif", alt: "Image 5", height:"200px", width:"300px"},
    {src: "images/img2.avif", alt: "Image 5", height:"200px", width:"300px"},
    {src: "images/img1.avif", alt: "Image 5", height:"200px", width:"300px"},
    {src: "images/img5.avif", alt: "Image 5", height:"200px", width:"300px"}
];

const createImageTrack = () => {
    const gallery = document.querySelector(".slider-container");
    const track = document.createElement("div");
    track.classList.add("slider-track", "row", "flex-nowrap", "mx-0");
    
    images.forEach((image) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "px-2");
        
        const card = document.createElement("div");
        card.classList.add("card", "border-0", "h-100");
        
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.classList.add("card-img-top");
        img.style.height = image.height;
        img.style.width = "100%";
        img.style.objectFit = "cover";
        
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        
        const p = document.createElement("p");
        p.textContent = image.alt;
        p.classList.add("card-text", "text-center");
        
        cardBody.appendChild(p);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        track.appendChild(col);
    });
    
    gallery.appendChild(track);
};

document.addEventListener('DOMContentLoaded', () => {
    createImageTrack();
    
    // Initialize slider functionality
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slider-track .col-md-4');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    
    const updateButtons = () => {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= slides.length - 3;
    };
    
    const moveToSlide = (index) => {
        currentIndex = index;
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateButtons();
    };
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 3) {
            moveToSlide(currentIndex + 1);
        }
    });
    
    updateButtons();
    
    // Make FAQ accordion work
    const faqItems = document.querySelectorAll('.accordion-button');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Bootstrap handles the rest
        });
    });
});