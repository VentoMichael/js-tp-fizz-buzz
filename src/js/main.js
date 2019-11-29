(function fizzBuzz() {
  const Fizz = {
    init() {
      document.documentElement.classList.add('js-enabled');
      this.ol = document.getElementById('fizzbuzz');
      this.createLiElm();
    },
    createLiElm() {
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i < 101; i++) {
        if (i % 15 === 0) {
          this.ol.insertAdjacentHTML(
            'beforeend',
            `<li class="fizzbuzz">fi<i>zz</i>bu<i>zz</i></li>`
          );
        } else if (i % 5 === 0) {
          this.ol.insertAdjacentHTML(
            'beforeend',
            `<li class="buzz">bu<i>zz</i></li>`
          );
        } else if (i % 3 === 0) {
          this.ol.insertAdjacentHTML(
            'beforeend',
            `<li class="fizz">fi<i>zz</i></li>`
          );
        } else {
          this.ol.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
        }
      }
    },
  };
  Fizz.init();
})();
