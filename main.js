let mode = document.getElementById('switch');
mode.addEventListener('click', function () {
  if (mode.style.justifyContent == 'flex-end') {
    mode.style.justifyContent = 'flex-start';
    document.querySelector('body').style.backgroundColor = '#1E202A';
    document.querySelector('h1').style.color = 'white';
    document.querySelectorAll('.box').forEach(function (item) {
      item.style.backgroundColor = '#252A41';
    });
    document.querySelectorAll('.year').forEach(function (item) {
      item.style.color = 'white';
    });
    document.querySelectorAll('.name').forEach(function (item) {
      item.style.color = '#8B97C6';
    });
    document.querySelectorAll('.Followers').forEach(function (item) {
      item.style.color = '#8B97C6';
    });
    document.querySelector('h3').style.color = 'white';
    document.querySelectorAll('.box1').forEach(function (item) {
      item.style.backgroundColor = '#252A41';
    });
    document.querySelectorAll('.name1').forEach(function (item) {
      item.style.color = '#8B97C6';
    });
    document.querySelectorAll('.number').forEach(function (item) {
      item.style.color = 'white';
    });
  }
  else {
    mode.style.justifyContent = 'flex-end';
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('h1').style.color = 'black';
    document.querySelectorAll('.box').forEach(function (item) {
      item.style.backgroundColor = '#F0F2FA';
    });
    document.querySelectorAll('.year').forEach(function (item) {
      item.style.color = 'black';
    });
    document.querySelectorAll('.name').forEach(function (item) {
      item.style.color = 'black';
    });
    document.querySelectorAll('.Followers').forEach(function (item) {
      item.style.color = '#63687E';
    });
    document.querySelector('h3').style.color = '#63687E';
    document.querySelectorAll('.box1').forEach(function (item) {
      item.style.backgroundColor = '#F0F2FA';
    });
    document.querySelectorAll('.name1').forEach(function (item) {
      item.style.color = '#63687E';
    });
    document.querySelectorAll('.number').forEach(function (item) {
      item.style.color = 'black';
    });
  }
});