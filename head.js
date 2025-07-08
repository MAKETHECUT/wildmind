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
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "var(--secondary-font)",
        fontWeight: "normal",
        mixBlendMode: "differnece",
        fontSize: "2vw",
        zIndex: "999999",
        pointerEVents: "none",
        transition: "opacity 0.5s ease",
        opacity: "1",
    });

    const counterText = document.createElement("div");
    counterText.style.opacity = "0";
    counterText.style.transition = "opacity 2s ease";
    counterText.textContent = "0%";

    loader.appendChild(counterText);
    document.documentElement.appendChild(loader);

    let counter = 0;
    let loadingComplete = false;

    // Fade in the counter text
    setTimeout(() => {
        counterText.style.opacity = "1";
    }, 100); // short delay to trigger the CSS transition

    const interval = setInterval(() => {
        counter += Math.floor(Math.random() * 5) + 1;
        if (counter >= 100) {
            counter = 100;
            clearInterval(interval);
            loadingComplete = true;
        }
        counterText.textContent = counter + "%";
    }, 90);

    window.addEventListener("load", () => {
        const ensureDuration = 20; // at least one second loading

        const checkLoaderComplete = setInterval(() => {
            if (loadingComplete) {
                clearInterval(checkLoaderComplete);
                setTimeout(() => {
                    loader.style.opacity = "0";
                    document.dispatchEvent(new CustomEvent("loadingFinished"));
                    loader.addEventListener("transitionend", () => {
                        loader.remove();
                    }, { once: true });
                }, ensureDuration);
            }
        }, 50);
    });

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