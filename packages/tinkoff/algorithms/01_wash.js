// Есть прачечная с N стиральными машинами.
// На входе в прачечную в очереди стоят М человек для того,
// чтобы постирать свои вещи.
// Про каждого человека известно, сколько времени он будет стирать свои вещи.
// Каждый человек использует первую освободившуюся машину.
// Сколько времени займёт стирка всех вещей?

const washer = 5;
const washTime = [10, 15, 5, 30, 22, 40, 18, 31]; // 46

function asc(a, b) {
  return a - b
}

function allWash(washMachine, queueTime) {
  const washQueue = washTime.slice(0, washMachine).sort(asc);

  for (let i = washMachine; i < queueTime.length; i++) {
    washQueue[0] += queueTime[i]
    washQueue.sort(asc)
  }

  return washQueue.at(-1)
}

console.log(allWash(washer, washTime))
