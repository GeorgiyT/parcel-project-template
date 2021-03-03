function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => removeMenu());
  overlay.on('click', () => removeMenu());
  
  function toggleMenu() {
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'visible');
      }
     
  }
  function removeMenu() {
    menu.removeClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
        $('body').css('overflow', 'hidden');
      }
    }
}
  


burgerMenu('.burger-menu');