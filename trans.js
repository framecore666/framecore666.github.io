window.onload = () => {
    const transiiton_el = document.querySelector('.transiiton')
    setTimeout(() => {
      transiiton_el.classList.remove('is-active');
    },200);
}