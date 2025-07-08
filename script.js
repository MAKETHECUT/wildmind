


function phoneRotate() {
    // Check if the device is a mobile device and screen width is under 767px
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth <= 767;
  
    if (!isMobile || !isSmallScreen) {
      return; // Exit the function if not a mobile device or if the screen width is greater than 767px
    }
  
    // Create the warning div
    const rotateWarning = document.createElement('div');
    rotateWarning.id = 'rotate-warning';
    rotateWarning.innerText = 'Please rotate your phone for a better experience.';
    document.body.appendChild(rotateWarning);
  
    // Apply styles using JavaScript
    Object.assign(rotateWarning.style, {
      position: 'fixed',
      zIndex: '99999',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100dvh',
      backgroundColor: '#000',
      color: '#fff',
      fontSize: '13px',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    });
  
    // Function to disable scrolling
    function disableScroll() {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100dvh';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100dvh';
    }
  
    // Function to enable scrolling
    function enableScroll() {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    }
  
    // Function to check device orientation
    function checkOrientation() {
      if (window.innerWidth > window.innerHeight) {
        rotateWarning.style.display = 'flex';
        disableScroll();
      } else {
        rotateWarning.style.display = 'none';
        enableScroll();
      }
    }
  
    // Check orientation on load and resize
    window.addEventListener('load', checkOrientation);
    window.addEventListener('resize', checkOrientation);
  }
  
  // Run the phoneRotate function
  phoneRotate();
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
      // Select all YouTube iframes on the page
      var iframes = document.querySelectorAll('iframe');
  
      // Loop through each iframe and handle mouse events
      iframes.forEach(function(iframe) {
        // Disable pointer events when scrolling
        iframe.addEventListener('mouseenter', function() {
          this.style.pointerEvents = 'none';
        });
  
        // Re-enable pointer events on click
        iframe.addEventListener('click', function() {
          this.style.pointerEvents = 'auto';
        });
  
        // Re-enable pointer events when the mouse leaves the iframe
        iframe.addEventListener('mouseleave', function() {
          this.style.pointerEvents = 'auto';
        });
      });
    });
  
  
  
  
    
  
  
  
  window.onload = function () {
  
  
    
  
  /* ==============================================
     GSAP Animations (ScrollTrigger + Clipping)
  ============================================== */
  
  
  
  gsap.registerPlugin(SplitText, ScrollTrigger);
  
  function animateHeadings() {
    const elements = document.querySelectorAll(".logo, h1, h2, h3, h4, h5, h6, p, li");
  
    elements.forEach((element) => {
      // Split the element into lines
      const splitText = new SplitText(element, { type: "lines", linesClass: "line" });
  
      // Ensure lines preserve spacing
      splitText.lines.forEach((line) => {
        line.style.display = "inline-block"; // Prevent block-level wrappers
        line.style.lineHeight = "inherit"; // Preserve the line-height of the parent
        line.style.width = "100%"; // Ensure full width
      });
  
      // Set initial clipping and animation
      gsap.set(splitText.lines, {
        yPercent: 150,
        clipPath: "inset(0% 0% 100% 0%)", // Initial clipping
        opacity: 1, // Hide lines initially
        rotate: 3,
  
      });
  
      gsap.to(splitText.lines, {
        yPercent: 0,
        clipPath: "inset(0% 0% 0% 0%)", // Reveal animation
        opacity: 1, // Fade in
        stagger: 0.15,
        duration: 1.5,
        rotate: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        },
      });
    });
  }
  
  // Delay the animation by 1 second
  setTimeout(() => {
    animateHeadings();
  }, 600);
  
  
    /* ==============================================
    Logo Symbol Rotation
   ============================================== */
    
    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      let rotation;
  
      if (scrollY >= maxScroll) {
        rotation = 360; // If at the bottom of the page, set rotation to 360 degrees
      } else {
        rotation = (scrollY / maxScroll) * 360; // Calculate rotation based on scroll position
      }
  
      gsap.to('.logo img', { rotation: rotation, duration: 1, ease: "power4.out" }); // Use GSAP for smooth easing
    });
    
    
      
    /* ==============================================
    Extra Animations
   ============================================== */
    
  
  
    gsap.from(".expertise-one .section-image", {
      yPercent:40, 
      rotation: -4,
      ease: "none",
      scrollTrigger: {
        trigger: ".expertise-one",
        start: "top 100%",
        end: "top 50%",
   scrub: 1.8
      }
    });
    
    gsap.from(".expertise-two .section-image", {
      yPercent:40, 
      rotation: 4,
      ease: "none",
      scrollTrigger: {
        trigger: ".expertise-two",
        start: "top 100%",
        end: "top 50%",
   scrub: 1.8
      }
    });
  
    
    gsap.from(".our-services-box", {
      yPercent: 50,
      opacity: 0,
      duration: 3,
      ease:"power1.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".our-services-row",
        start: "top 100%",
        end: "top 50%",
   scrub: 2
      }
    });
    
    
    
      
    gsap.from(".our-approach-row .our-approach-box", {
      yPercent: 20,
      stagger: 0.2,
      opacity:0,
      scrollTrigger: {
        trigger: ".our-approach-box",
        start: "top bottom",
        end: "top 70%",
   scrub: 1.6
      }
    });
    
   
     gsap.from(".about-solution .about-solution-right .solution-box", {
      yPercent: 20,
      stagger: 0.2,
      opacity:0,
           duration: 3,
      ease:"power1.out",
      scrollTrigger: {
        trigger: ".solution-box",
        start: "top bottom",
        end: "top 70%",
   scrub: 1.6
      }
    });
    
     
    
    gsap.from(".case-study-box", {
      yPercent: 30,
      duration: 3,
      ease:"power1.out",
      stagger:1,
      scrollTrigger: {
        trigger: ".case-study-box",
        start: "top 100%",
        end: "top 100%",
   scrub: 1.5
      }
    });
    
  
  
    gsap.to(".about-big-hero img", 
      { yPercent: -20, ease: "none", 
        scrollTrigger: {
          trigger: ".about-big-hero img",
        start: "top bottom",
        end: "bottom center",
          scrub: 1
        }
      }
    );
    
    
    
    
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
  
  /* ==============================================
    Interactive Cursor
   ============================================== */
      const cursor = document.querySelector('#cursor');
      const mouse = { x: -100, y: -100 };
      let isMoving = false;
  
      // Set initial cursor position
      gsap.set(cursor, { xPercent: -50, yPercent: -50 });
  
      // Track mouse movement
      window.addEventListener('mousemove', (e) => {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
          isMoving = true;
      });
  
      animateCursor();
  
      // Animate cursor position
      function animateCursor() {
          if (isMoving) {
              gsap.to(cursor, {
                  duration: 0.5,
                  x: mouse.x,
                  y: mouse.y,
                  ease: 'power2.out',
              });
          }
          requestAnimationFrame(animateCursor);
      }
  
      const links = document.querySelectorAll('.btn-submit, .btn, .slider, .menu-toggle, a:not(.recent-work-links a)');
  
      links.forEach((link) => {
          link.addEventListener('mouseenter', () => {
              cursor.classList.add('change');
              cursor.classList.remove('explore-change');
          });
  
          link.addEventListener('mouseleave', () => {
              cursor.classList.remove('change');
          });
      });
  
  
  
      
      /* ==============================================
      Responsive Behavior on Screen Resize
      ============================================== */
    
  /*
    
      let lastWidth = window.innerWidth;
      window.addEventListener("resize", () => {
          const currentWidth = window.innerWidth;
          if ((lastWidth > 767 && currentWidth <= 767) || (lastWidth <= 767 && currentWidth > 650)) {
              window.location.reload();
          }
          lastWidth = currentWidth;
      });
      
      */
      
  
      /* ==============================================
      Navbar Show/Hide Logic
      ============================================== */
  const nav = document.querySelector(".header");
  let lastScrollTop = 0;
  
  window.addEventListener("scroll", function () {
      const st = window.pageYOffset || document.documentElement.scrollTop;
  
      // Prevent navbar changes if the mobile menu is open
      if (document.querySelector(".mobile-menu.open")) {
          return;
      }
  
      if (st > 20) {
          nav.classList.add("fixed");
      } else {
          nav.classList.remove("fixed");
          nav.classList.remove("scroll");
      }
  
      if (Math.abs(st - lastScrollTop) > 20) {
          if (st > 100 && st > lastScrollTop) {
              nav.classList.add("scroll");
          } else if (st > 100 && st < lastScrollTop) {
              nav.classList.remove("scroll");
          }
          lastScrollTop = st;
      }
  });
  
  
    
    
    
    /* ==============================================
     Slider Dragging Logic (Multiple Instances)
     ============================================== */
    
    
  class DragScroll {
      constructor(obj) {
          this.el = obj.el;
          this.wrap = this.el.querySelector(obj.wrap);
          this.items = this.el.querySelectorAll(obj.item);
          if (!this.wrap || !this.items.length) return;
  
          this.dragThreshold = 5;
          this.isDragging = false;
          this.isMouseDown = false;
          this.startX = 0;
          this.startY = 0;
          this.isHorizontalDrag = false;
          this.startTime = 0;
          this.progress = 0;
          this.x = 0;
  
          this.init();
      }
  
      init() {
          this.calculate();
          this.bindEvents();
          this.raf();
      }
  
      bindEvents() {
          window.addEventListener("resize", () => this.calculate());
          this.el.addEventListener("mousedown", (e) => this.handleStart(e));
          window.addEventListener("mousemove", (e) => this.handleMove(e));
          window.addEventListener("mouseup", (e) => this.handleEnd(e));
          this.el.addEventListener("touchstart", (e) => this.handleStart(e));
          window.addEventListener("touchmove", (e) => this.handleMove(e));
          window.addEventListener("touchend", (e) => this.handleEnd(e));
          this.el.addEventListener("dragstart", (e) => this.preventDragOnLinks(e));
      }
  
      calculate() {
          this.wrapWidth = this.wrap.scrollWidth;
          this.containerWidth = this.el.clientWidth;
          const lastItem = this.items[this.items.length - 1];
          if (!lastItem) return;
          const lastItemRight = lastItem.offsetLeft + lastItem.offsetWidth;
          this.maxScroll = lastItemRight - this.el.clientWidth;
      }
  
      handleStart(e) {
          this.isDragging = false;
          this.isMouseDown = true;
          this.isHorizontalDrag = false;
          this.startX = e.clientX || e.touches[0].clientX;
          this.startY = e.clientY || e.touches[0].clientY;
          this.startTime = Date.now();
      }
  
      handleMove(e) {
          if (!this.isMouseDown) return;
  
          const currentX = e.clientX || e.touches[0].clientX;
          const currentY = e.clientY || e.touches[0].clientY;
          const deltaX = currentX - this.startX;
          const deltaY = currentY - this.startY;
  
          if (!this.isHorizontalDrag) {
              if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > this.dragThreshold) {
                  this.isHorizontalDrag = true;
              } else if (Math.abs(deltaY) > this.dragThreshold) {
                  return;
              }
          }
  
          if (this.isHorizontalDrag) {
              e.preventDefault();
              this.isDragging = true;
              this.progress += -deltaX * 2.5;
              this.startX = currentX;
              this.startY = currentY;
              this.move();
          }
      }
  
      handleEnd() {
          this.isMouseDown = false;
          this.isDragging = false;
      }
  
      preventDragOnLinks(e) {
          if (e.target.tagName === "A") {
              e.preventDefault();
          }
      }
  
      move() {
          this.progress = Math.max(0, Math.min(this.progress, this.maxScroll));
      }
  
      raf() {
          this.x += (this.progress - this.x) * 0.1;
          this.wrap.style.transform = `translateX(${-this.x}px)`;
          requestAnimationFrame(() => this.raf());
      }
  }
  
  // Initialize for multiple sliders
  document.querySelectorAll(".slider").forEach((sliderEl) => {
      new DragScroll({
          el: sliderEl,
          wrap: ".slider-wrapper",
          item: ".slider-item",
      });
  });
  
    
    
    
  };
  
  
  
  
  
  
  
  
  
  
  /* ==============================================
    Custom Smooth Scrolling
  ============================================== */
  
  window.addEventListener("load", () => {
    const lerp = (start, end, t) => start * (1 - t) + end * t;
    const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
  
    let isSliderDragging = false; // Flag to track active horizontal dragging on slider
  
    class CustomSmoothScroll {
      constructor() {
        this.targetScroll = 0;
        this.currentScroll = 0;
        this.smoothness = window.innerWidth < 750 ? 0.03 : 0.056; // Apply lower smoothness for mobile
        this.scrollEnabled = true;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.dragMultiplier = window.innerWidth < 750 ? 5 : 2;
        this.touchMultiplier = window.innerWidth < 750 ? 2.9 : 2.2;
        this.lastFrameTime = performance.now();
        this.bindedFunctions = {};
        this.init();
      }
  
      init() {
        this.applyStyles();
        this.updateBodyHeight();
        this.bindEvents();
  
        setTimeout(() => {
          this.scrollEnabled = true;
          this.forceScrollUpdate();
          this.smoothScrollLoop();
        }, 10);
      }
  
      applyStyles() {
        document.body.style.overflow = "hidden";
        document.documentElement.style.scrollBehavior = "auto";
      }
  
      bindEvents() {
        // Mouse Wheel Scroll
        window.addEventListener("wheel", (e) => this.onScroll(e.deltaY), { passive: false });
  
        // Touch Dragging
        window.addEventListener("touchstart", (e) => this.startTouchDrag(e), { passive: true });
        window.addEventListener("touchmove", (e) => this.onTouchDrag(e), { passive: false });
        window.addEventListener("touchend", () => this.endTouchDrag());
  
        // Mouse Dragging
        window.addEventListener("mousedown", (e) => this.startMouseDrag(e));
        window.addEventListener("mousemove", (e) => this.onMouseDrag(e));
        window.addEventListener("mouseup", () => this.endMouseDrag());
  
        // Resize Event
        window.addEventListener("resize", () => this.updateBodyHeight());
  
        // Detect slider dragging (ONLY on mobile < 767px, and only when dragging sideways)
        if (window.innerWidth < 767) {
          document.querySelectorAll(".slider").forEach((slider) => {
            slider.addEventListener("touchstart", (e) => this.startSliderDrag(e), { passive: true });
            slider.addEventListener("touchmove", (e) => this.detectSliderDrag(e), { passive: false });
            slider.addEventListener("touchend", () => this.endSliderDrag());
            slider.addEventListener("touchcancel", () => this.endSliderDrag());
          });
        }
      }
  
  updateBodyHeight() {
      const scrollableContent = document.querySelector(".wrapper");
      if (scrollableContent) {
          document.body.style.height = `${scrollableContent.clientHeight}px`;
      }
  
  }
      
      
  
      onScroll(delta) {
        if (!this.scrollEnabled || isSliderDragging) return; // Prevent scroll when dragging slider sideways
        this.targetScroll = clamp(
          this.targetScroll + delta,
          0,
          document.body.scrollHeight - window.innerHeight
        );
      }
  
      startTouchDrag(e) {
        if (!this.scrollEnabled || isSliderDragging) return;
        this.isDragging = true;
        this.startY = e.touches[0].clientY;
      }
  
  onTouchDrag(e) {
    if (!this.isDragging || !this.scrollEnabled) return;
  
    const currentY = e.touches[0].clientY;
    const delta = (this.startY - currentY) * this.touchMultiplier;
  
    const atTop = Math.round(this.currentScroll) <= 0;
    const pullingDown = delta < 0;
  
    if (atTop && pullingDown) return; // Allow browser to handle pull-to-refresh
  
    this.onScroll(delta);
    this.startY = currentY;
    e.preventDefault(); // Prevent only when not at top
  }
  
  
      endTouchDrag() {
        this.isDragging = false;
      }
  
      startMouseDrag(e) {
        if (!this.scrollEnabled) return;
        this.isDragging = true;
        this.startY = e.clientY;
      }
  
      onMouseDrag(e) {
        if (!this.isDragging || !this.scrollEnabled) return;
        const delta = (this.startY - e.clientY) * this.dragMultiplier;
        this.onScroll(delta);
        this.startY = e.clientY;
      }
  
      endMouseDrag() {
        this.isDragging = false;
        document.body.style.cursor = "";
      }
  
      startSliderDrag(e) {
        this.startX = e.touches[0].clientX; // Store X position to detect horizontal movement
        this.startY = e.touches[0].clientY; // Store Y position for vertical movement check
        isSliderDragging = false; // Reset flag initially
      }
  
      detectSliderDrag(e) {
        const deltaX = Math.abs(e.touches[0].clientX - this.startX);
        const deltaY = Math.abs(e.touches[0].clientY - this.startY);
  
        if (deltaX > deltaY && deltaX > 10) {
          // Horizontal drag detected
          isSliderDragging = true;
          e.preventDefault(); // Prevent page scroll when dragging the slider sideways
        }
      }
  
      endSliderDrag() {
        isSliderDragging = false; // Allow scrolling again after horizontal drag ends
      }
  
      forceScrollUpdate() {
        this.targetScroll = window.scrollY;
        this.currentScroll = this.targetScroll;
        window.scrollTo(0, this.targetScroll);
      }
  
      smoothScrollLoop() {
        const now = performance.now();
        const deltaTime = (now - this.lastFrameTime) / 1000;
        this.lastFrameTime = now;
  
        if (this.scrollEnabled) {
          const smoothingFactor = 1 - Math.pow(1 - this.smoothness, deltaTime * 120);
          this.currentScroll = lerp(this.currentScroll, this.targetScroll, smoothingFactor);
          window.scrollTo(0, this.currentScroll);
        }
  
        requestAnimationFrame(() => this.smoothScrollLoop());
      }
  
      setEnableScroll(value) {
        this.scrollEnabled = value;
      }
  
      restart(position = 0) {
        this.targetScroll = position;
        this.currentScroll = position;
        window.scrollTo(0, position);
      }
  
      destroy() {
        this.scrollEnabled = false;
        document.body.style.overflow = "";
        document.body.style.height = "";
        document.documentElement.style.scrollBehavior = "";
        window.removeEventListener("wheel", this.onScroll);
        window.removeEventListener("touchstart", this.startTouchDrag);
        window.removeEventListener("touchmove", this.onTouchDrag);
        window.removeEventListener("touchend", this.endTouchDrag);
        window.removeEventListener("mousedown", this.startMouseDrag);
        window.removeEventListener("mousemove", this.onMouseDrag);
        window.removeEventListener("mouseup", this.endMouseDrag);
        window.removeEventListener("resize", this.updateBodyHeight);
      }
    }
  
    new CustomSmoothScroll();
  });
  
  
  
  
          window.addEventListener("load", () => {
              document.body.style.display = "block"; // Show content
              document.body.style.opacity = "0"; // Start hidden
              document.body.style.transition = "opacity 0.1s ease"; // Smooth fade-in
  
              setTimeout(() => {
                  document.body.style.opacity = "1"; // Fade in
              }, 50); // Short delay to ensure transition applies
          });
  
  
  
  /* ==============================================
    Mega Menu Script
  ============================================== */
  
  
  const menuToggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('.header');
  const mobileMenu = document.querySelector('.mobile-menu');
  const cta = document.querySelector('.cta');
  const pageContainer = document.querySelector('.page-container');
  
  let gifURL = "https://cdn.prod.website-files.com/677bcc54b22ed32ad332c1cf/67b2071e0649fa2a90a998a1_new-menu-clip-mask.gif";
  let isMenuAnimating = false;
  
  menuToggle.addEventListener('click', function () {
      if (isMenuAnimating) return;
      isMenuAnimating = true;
  
      this.classList.toggle('active');
      header.classList.toggle('header-mobile');
      menuToggle.classList.toggle('clicked');
      let isOpen = mobileMenu.classList.toggle('open');
  
      menuOpen = isOpen;
  
      // Set transform origin to viewport center
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const viewportCenter = scrollY + (viewportHeight / 2);
      
      gsap.set(pageContainer, {
          transformOrigin: `50% ${viewportCenter}px`
      });
  
      if (isOpen) {
          mobileMenu.style.display = 'flex';
  
          let newGifURL = `${gifURL}?t=${Date.now()}`;
          mobileMenu.style.maskImage = `url('${newGifURL}')`;
          mobileMenu.style.webkitMaskImage = `url('${newGifURL}')`;
  
          Object.assign(mobileMenu.style, {
              height: "100vh",
              maskSize: "cover",
              webkitMaskSize: "cover",
              maskPosition: "center",
              webkitMaskPosition: "center",
              maskRepeat: "no-repeat",
              webkitMaskRepeat: "no-repeat",
              clipPath: "inset(0 0 0% 0)",
              webkitClipPath: "inset(0 0 0% 0)",
              transition: "clip-path 0.8s cubic-bezier(.61,.01,0,.99), -webkit-clip-path 0.8s cubic-bezier(.61,.01,0,.99)",
          });
  
          gsap.to(pageContainer, { 
              opacity: 0.5, 
              duration: 1.1, 
              rotate: 5, 
              yPercent: -10,
              scale: 1.3,
              ease: "power4.inOut",
              onComplete: () => {
                  isMenuAnimating = false;
              }
          });
          gsap.to(cta, { opacity: 0, duration: 0.5, ease: "power2.out" });
  
      } else {
          mobileMenu.style.clipPath = "inset(0 0 100% 0)";
          mobileMenu.style.webkitClipPath = "inset(0 0 100% 0)";
  
          gsap.to(pageContainer, { 
              opacity: 1, 
              duration: 1.1, 
              rotate: 0, 
              yPercent: 0,
              scale: 1,
              ease: "power4.out",
              onComplete: () => {
                  // Reset page height and refresh ScrollTrigger
                  document.documentElement.style.height = "auto";
                  document.body.style.height = "auto";
                  if (ScrollTrigger) {
                      ScrollTrigger.refresh(true);
                  }
                  window.dispatchEvent(new Event('resize'));
                  isMenuAnimating = false;
              }
          });
          gsap.to(cta, { opacity: 1, duration: 0.5, ease: "power2.out" });
  
          setTimeout(() => {
              mobileMenu.style.display = 'none';
              menuOpen = false;
          }, 800);
      }
  });
  
  
  
  /* ==============================================
    Dropbox Videos
  ============================================== */
  
  
  function initVideos() {
      function convertDropboxLink(url) {
          return url.replace("www.dropbox.com", "dl.dropboxusercontent.com")
                    .replace(/(\?dl=0|&dl=0|&st=.*|&rlkey=.*)/g, ""); // מסיר פרמטרים מיותרים
      }
  
      function updateVideoSources() {
          document.querySelectorAll("video source.video-src").forEach(source => {
              let directLink = convertDropboxLink(source.src);
              source.src = directLink;
              source.closest("video").load(); // טוען מחדש את הוידאו
          });
      }
  
      updateVideoSources();
  }
  
  document.addEventListener("DOMContentLoaded", initVideos);
  
  
  
  /* ==============================================
    Show Hide Menu Burger
  ============================================== */
  
  document.addEventListener("DOMContentLoaded", function () {
      const menuToggle = document.querySelector(".menu-toggle");
      const mobileMenu = document.querySelector(".mobile-menu");
  
      function checkScreenSize() {
          if (window.innerWidth <= 767) {
              // Remove event listener and do nothing on mobile
              window.removeEventListener("scroll", handleScroll);
              return;
          }
  
          let lastScrollY = window.scrollY;
          gsap.set(menuToggle, { opacity: 0, pointerEvents: "none" });
  
          function handleScroll() {
              const currentScrollY = window.scrollY;
  
              // Prevent hiding/showing the menu toggle if the mobile menu is open
              if (mobileMenu.classList.contains("open")) {
                  return;
              }
  
              // Only trigger if scroll difference is greater than 20px (momentum effect)
              if (Math.abs(currentScrollY - lastScrollY) > 20) {
                  if (currentScrollY > 200 && currentScrollY > lastScrollY) {
                      // Show when scrolling down past 200px
                      gsap.to(menuToggle, { opacity: 1, pointerEvents: "auto", duration: 0.1, ease: "power4.out" });
                  } else {
                      // Instantly hide on scroll up
                      gsap.set(menuToggle, { opacity: 0, pointerEvents: "none", duration: 1, ease: "power4.out"  });
                  }
                  lastScrollY = currentScrollY;
              }
          }
  
          window.addEventListener("scroll", handleScroll);
      }
  
      checkScreenSize(); // Run on load
      window.addEventListener("resize", checkScreenSize); // Recheck on resize
  });
  
  
  
  
  
  
  /* ==============================================
    Page Transition Logic
   ============================================== */
  
  const lottieContainer = document.getElementById('lottie-container');
  let currentAnimation = null;
  let isAnimating = false;
  
  // Function to play Lottie animations with independent timing
  const playLottie = (path, duration = 0.9, speed = 1, easing = "expo.out") => {
    return new Promise((resolve) => {
      if (currentAnimation) {
        currentAnimation.stop();
        currentAnimation.destroy();
      }
  
      lottieContainer.innerHTML = '';
      currentAnimation = lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: path,
        rendererSettings: { preserveAspectRatio: 'none' },
      });
  
      lottieContainer.style.display = 'block';
  
      currentAnimation.addEventListener("DOMLoaded", () => {
        const totalFrames = currentAnimation.totalFrames;
        const stopFrame = Math.floor(totalFrames * 0.9); // Stop at 90% of frames
  
        currentAnimation.setSpeed(speed);
        currentAnimation.play();
  
        gsap.to(currentAnimation, {
          duration: duration,
          progress: 0.8, // Animate Lottie progress to 80%
          ease: easing,
          onComplete: () => {
            currentAnimation.goToAndStop(stopFrame, true);
            resolve();
          }
        });
      });
    });
  };
  
  // Create overlay elements
  const overlaySecond = document.createElement("div");
  overlaySecond.className = "page-overlay-second";
  document.body.appendChild(overlaySecond);
  
  // Create black overlay
  const blackOverlay = document.createElement("div");
  blackOverlay.className = "black-overlay";
  document.body.appendChild(blackOverlay);
  
  // Add CSS styles for overlay
  const style = document.createElement('style');
  style.textContent = `
    .page-overlay-second {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0);
      z-index: 999999999;
      pointer-events: none;
    }
    
    /* Black overlay to prevent flicker */
    .black-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 9999999999999999999;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
  
  let lastUrl = "";
  let preloadedPages = {};
  
    // Page Transition Function with Lottie
  async function pageTransition(url) {
    if (isAnimating) return;
    isAnimating = true;
    
    // Play exit Lottie animation
    const lottieExit = playLottie(
      'https://cdn.prod.website-files.com/677bcc54b22ed32ad332c1cf/677be1141a59428b8bde6cb1_pt-exit.json',
      1, 1.5, "power2.out"
    );
   
    const gsapCursor = gsap.to("#cursor", {
      opacity: 0, duration: 1, scale: 0, ease: "expo.inOut"
    });

    const gsapPageContainer = gsap.to(".page-container", {
      scale: 1.5, opacity: 1, rotate: 15, yPercent: -30, xPercent: 50, duration: 1.2, ease: "power4.inOut"
    });
    
    // Wait for Lottie animation to complete
    await lottieExit;
    
    // Reduced timeout for faster transitions
    const timeout = window.innerWidth <= 650 ? 600 : 500;
  
    setTimeout(() => {
      window.location.href = url;
      isAnimating = false;
    }, timeout);
  }
  
  // Prefetch function
  function prefetchPage(href) {
    if (!preloadedPages[href]) {
      fetch(href, { method: "GET" })
        .then(() => preloadedPages[href] = true)
        .catch(() => console.warn(`Prefetch failed for: ${href}`));
    }
  }
  
  // Navigate with Animation
  function navigateWithAnimation(event) {
    const url = this.getAttribute("href");
    const target = this.getAttribute("target");
  
    if (target === "_blank" || url.startsWith("#") || url.startsWith("mailto:") || url.startsWith("https://wa.me") || url.includes("=") || url.includes("?")) return;
  
    event.preventDefault();
  
    if (url === lastUrl) return;
    lastUrl = url;
  
    setTimeout(() => lastUrl = "", 500);
  
    history.pushState({}, "", url);
    pageTransition(url);
  }
  
  // Add prefetching and navigation logic to links
  const links = document.querySelectorAll("a[href]");
  links.forEach((link) => {
    const href = link.getAttribute("href");
  
    if (href && !href.startsWith("http") && !href.startsWith("#") && href !== "") {
      // Prefetch on hover/touch
      link.addEventListener("mouseenter", () => prefetchPage(href));
      link.addEventListener("touchstart", () => prefetchPage(href));
  
      // Click event for navigation
      link.addEventListener("click", navigateWithAnimation);
    }
  });
  
  // Handle back/forward navigation
  window.addEventListener("popstate", () => {
    const currentURL = document.location.pathname;
    pageTransition(currentURL);
  });
  
  // Enter animation with Lottie
  async function playEnterAnimation() {
    // Play enter Lottie animation
    const lottieEnter = playLottie(
      'https://cdn.prod.website-files.com/677bcc54b22ed32ad332c1cf/677be1b8067de99bde70f19b_pt-enter.json',
      1, 1, "expo.in"
    );
    
    // GSAP overlay exit animation
    gsap.to(".page-overlay-first", { 
      height: "0dvh", 
      duration: 1.1,
      delay: 0.1,
      ease: "expo.inOut" 
    });
    
    // Fade out black overlay after 0.3 seconds
    setTimeout(() => {
      gsap.to(".black-overlay", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          // Remove black overlay after fade
          const blackOverlay = document.querySelector(".black-overlay");
          if (blackOverlay) {
            blackOverlay.remove();
          }
        }
      });
    }, 300);
    
    const gsapCursor = gsap.fromTo("#cursor",
      { scale: 0, opacity: 0 },
      { scale: 1, delay: 0.3, opacity: 1, duration: 1, ease: "expo.out" }
    );

    const gsapPageContainer = gsap.fromTo(".page-container",
      { scale: 2, opacity: 0, yPercent: -50, xPercent: -50, rotate: -15 },
      {
        scale: 1,
        opacity: 1,
        yPercent: 0,
        xPercent: 0,
        rotate: 0,
        duration: 1,
        delay: 0.1,
        ease: "power4.out",
        onComplete: () => {
          // Re-enable scrolling after animation completes
          document.body.style.overflow = '';
          document.documentElement.style.height = "auto";
          document.body.style.height = "auto";
          window.dispatchEvent(new Event("resize"));
          if (ScrollTrigger) ScrollTrigger.refresh(true);
        }
      }
    );
    
    // Wait for all animations to complete
    await Promise.all([lottieEnter, gsapCursor, gsapPageContainer]);
  }
  
  // Play enter animation on load
  window.addEventListener("load", () => {
    playEnterAnimation();
  });
