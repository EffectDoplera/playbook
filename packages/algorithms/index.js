const washer = 5
const washTime = [10, 15, 5, 30, 22, 40, 18, 31]

const washMap = new Map()

for (let i = 1; i <= washer; i++) {
  washMap.set(i, washTime[i - 1])
}

for (let i = washer; i < washTime.length; i++) {
  const [minKey, minValue] = [...washMap.entries()].reduce((item, acc) => {
    if (item[1] < acc[1]) {
      return item
    }

    return acc
  }, [])

  washMap.set(minKey, minValue + washTime[i])
}

console.log(Math.max.apply(null, [...washMap.values()]))
