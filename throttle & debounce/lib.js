const debounce = (func, delay) => {
    let inDebounce
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
};

const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
};

document.querySelector('.debounce').addEventListener('click', debounce(function() {
  console.info('Hey! It is', new Date().toUTCString());
}, 3000));

document.querySelector('.throttle').addEventListener('click', throttle(function() {
  return console.log('Hey! It is', new Date().toUTCString());
}, 1000));



  