function delay(s) {
  return new Promise((res) => {
    return setTimeout(() => res('RES'), s)
  })
}


(async () => {
  console.log('start')
  await delay(1000)
  console.log('finish')
})()
