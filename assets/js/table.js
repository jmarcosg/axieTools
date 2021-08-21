function uncheckAll() {
    document.querySelectorAll('input[type="checkbox"]')
      .forEach(el => el.checked = false);
  }
  
  document.querySelector('button').addEventListener('click', uncheckAll);