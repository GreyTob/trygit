export function setupCounter(element) {
  let counter = 0

  const setCounter = (count) => {

    counter = count



    element.innerHTML = `counter is ${counter}`
  }


  element.addEventListener('click', () => setCounter(counter + 5))

  setCounter(0)
}
