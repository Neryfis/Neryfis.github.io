function btn_menu() {
    const btn = document.getElementsByClassName('btn-menu')[0];
    const btnFunction = () => {
        alert('você e um cuzao');
    };
    btn.addEventListener('click', () => btnFunction());
}





window.onload = () => {
    btn_menu()
  };