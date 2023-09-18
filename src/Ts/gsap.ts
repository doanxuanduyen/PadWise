export const animateSlideContent = (e: Element, delay: number) => {
  const tl = gsap.timeline({ delay, defaults: { duration: 1, ease: 'power1.inOut' } });
  const eGsap = e.querySelectorAll('.gsap');
  const old = gsap.getTweensOf(eGsap);
  if (old.length > 0) {
    old.forEach((item: any) => item.kill());
    return true;
  }
  eGsap.forEach((item) => {
    if (item.classList.contains('left')) tl.from(item, { x: '10%', scale: '+=0.15', opacity: '-=1' }, '<0.25');
  });
};
