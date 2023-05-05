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
    rootMargin: window.innerWidth <= 768 ? '-55px 0px -45% 0px' : '-15% 0px -85% 0px'  
});
  
  const svgs = document.querySelectorAll('.svg-wrapper svg');
  svgs.forEach(svg => observer.observe(svg));
  