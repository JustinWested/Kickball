const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const svg = entry.target;
      const paths = svg.querySelectorAll('path');
      const lines = svg.querySelectorAll('line');
      const polylines = svg.querySelectorAll('polyline');
  
      if (entry.isIntersecting) {
        paths.forEach(path => path.classList.add('draw-animation'));
        lines.forEach(line => line.classList.add('draw-animation'));
        polylines.forEach(polyline => polyline.classList.add('draw-animation'));
        return; // if we added the class, exit the function
      }
    });
  }, {
    rootMargin: window.innerWidth <= 768 ? '-50px 0px -50% 0px' : '-40% 0px -60% 0px'  
});
  
  const svgs = document.querySelectorAll('.svg-wrapper svg');
  svgs.forEach(svg => observer.observe(svg));
  