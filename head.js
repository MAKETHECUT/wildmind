(function() {
    const loader = document.createElement("div");
    loader.id = "loader";
    Object.assign(loader.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100dvh",
        backgroundColor: "black",
        zIndex: "999999",
        opacity: "0",
        transition: "opacity 0.5s ease",
        pointerEvents: "none",
    });

    document.documentElement.appendChild(loader);

    // Function to show loader (for page transitions)
    window.showLoader = () => {
        loader.style.opacity = "1";
        loader.style.pointerEvents = "auto";
    };

    // Function to hide loader (for page transitions)
    window.hideLoader = () => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
    };

    // Dispatch event when loader is ready
    document.dispatchEvent(new CustomEvent("loaderReady"));
})();


document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 650) { // רק במסכים של מובייל
    const images = document.querySelectorAll('img');

    images.forEach(img => {
      if (!img.complete) {
        img.loading = 'lazy'; // טעינה עצלה
        const tempSrc = img.src;
        img.src = '';
        img.src = tempSrc;
      }
    });
  }
});

/*
const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = '#000000';
  overlay.style.zIndex = '999999999999999999999999';
  overlay.style.opacity = '1';
  overlay.style.transition = 'opacity 1s ease';

  document.body.appendChild(overlay);

  window.addEventListener('load', () => {
    overlay.style.opacity = '0'; 

    overlay.addEventListener('transitionend', () => {
      overlay.remove();
    });
  });
  */
