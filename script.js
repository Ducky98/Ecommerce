let timeout;
let isBannerHovered = false;

// Function to hide all banners
function hideAllBanners() {
    const banners = document.querySelectorAll('.nav-banner');
    banners.forEach(banner => {
        banner.style.opacity = '0';
        banner.style.height = '0';
    });
}

// Function to show the corresponding banner on hover
function showBanner(bannerId) {
    clearTimeout(timeout);
    hideAllBanners();

    const banner = document.getElementById(bannerId);
    if (banner) {
        banner.style.opacity = '1';
        banner.style.height = 'auto';
    }
}

// Function to hide the banner when mouse leaves the element after a delay
function hideBanner(bannerId) {
    if (!isBannerHovered) {
        timeout = setTimeout(() => {
            const banner = document.getElementById(bannerId);
            if (banner) {
                banner.style.opacity = '0';
                banner.style.height = '0';
            }
        }, 300); 
    }
}

// IDs of elements and corresponding banner IDs
const elementBannerMap = {
    'woman-ethnic': 'woman-ethnic-banner',
    'woman-western': 'woman-western-banner',
    'men': 'men-banner',
    'kids': 'kids-banner',
    'home': 'home-banner',
    'beauty': 'beauty-banner',
    'jewellery': 'jewellery-banner',
    'bags': 'bags-banner',
    'electronics': 'electronics-banner'

};

// Event listeners for hover on different elements
Object.keys(elementBannerMap).forEach(elementId => {
    const bannerId = elementBannerMap[elementId];
    const element = document.getElementById(elementId);
    const banner = document.getElementById(bannerId);

    if (banner) {
        banner.addEventListener('mouseover', function() {
            isBannerHovered = true;
        });

        banner.addEventListener('mouseout', function() {
            isBannerHovered = false;
            hideBanner(bannerId);
        });
    }

    if (element) {
        element.addEventListener('mouseover', function() {
            isBannerHovered = true;
            showBanner(bannerId);
        });

        element.addEventListener('mouseout', function(e) {
            isBannerHovered = false;
            // Check if the mouse has actually left the element and its children
            const isMouseOutside = !e.relatedTarget || !element.contains(e.relatedTarget);
            if (isMouseOutside) {
                hideBanner(bannerId);
            }
        });
    }
});

// Hide all banners by default
hideAllBanners();
