const data = {
  name: 'Luis'
}

const observedData = new Proxy(data, {
  set(target, key, value) {
    console.log(`Value of ${key} changed to ${value}`);
    target[key] = value
  }
})
observedData.name = 'John'
console.log(observedData.name)