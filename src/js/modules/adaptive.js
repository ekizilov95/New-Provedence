function adaptive() {
  const headerMenu = document.querySelectorAll(".header__menu");
  const burger = document.querySelector(".burger");
  const headerMenuBurger = document.querySelector(".header-menu");

  function adaptiveHeader() {
    const headerColumn = document.querySelectorAll(".header__column");

    let width = window.outerWidth;
    if (width < 767) {
      headerMenu.forEach(item => {
        headerMenuBurger.append(item);
      });
    } else {
      headerColumn.forEach(column => {
        if (column.classList.contains('header__column_right')) {
          column.prepend(document.querySelectorAll(".header__menu")[1]);
        } else {
          if (column.classList.contains('header__column_left')) {
            column.append(document.querySelectorAll(".header__menu")[0]);
          }
        }
      });
    }

  }
  adaptiveHeader();


  burger.addEventListener('click', () => {
    burger.classList.toggle("burger_active");
    headerMenuBurger.classList.toggle("header-menu_active");
  });

}

export default adaptive;