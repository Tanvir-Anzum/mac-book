let previous = 1299
let charge = 0
let updated = 0
const memory = document.getElementsByClassName('memory')
const storage = document.getElementsByClassName('storage')
const bonusTotal = document.getElementById('bonus-total')
const delivery = document.getElementsByClassName('delivery')

const noCostMemory = document.getElementById('8GB-memory')
const highCostMemory = document.getElementById('16GB-memory')
let extraMemoryCost = document.getElementById('extra-memory-cost')
let totalPrice = document.getElementById('total-price')
// variables for calculating storage charge in diffferent cases
let extraStorageCost = document.getElementById('extra-storage-cost')
const smallStorage = document.getElementById('small-storage')
const mediumStorage = document.getElementById('medium-storage')
const largeStorage = document.getElementById('large-storage')
// variables for calculating delivery charge in diffferent cases
const fastDelivery = document.getElementById('fast-delivery')
const lateDelivery = document.getElementById('late-delivery')
let deliveryCharge = document.getElementById('delivery-charge')
// fuction for updating diffenent charges when specific input buttons are clicked
function updateIndividualPrices(updatableElement, cost) {
  if (updatableElement == extraMemoryCost) {
    if (cost == 'high') {
      updatableElement.innerText = '180'
    }
    if (cost == 'low') updatableElement.innerText = '0'
    updated = parseInt(updatableElement.innerText)
    return updated
  }
  if (updatableElement == extraStorageCost) {
    if (cost == 'small') updatableElement.innerText = '0'
    if (cost == 'medium') updatableElement.innerText = '100'
    if (cost == 'large') updatableElement.innerText = '180'
    updated = parseInt(updatableElement.innerText)
    return updated
  }
  if (updatableElement == deliveryCharge) {
    if (cost == 'fast') {
      updatableElement.innerText = '20'
    }
    if (cost == 'late') {
      updatableElement.innerText = '0'
    }
    updated = parseInt(updatableElement.innerText)
    return updated
  }
}
//function for assigning total price
let i = 0
let total = 0
let currentI = -5
let currentJ = -5
let currentK = -5
let realValueI = false
let realValueJ = false
let realValueK = false

function totalCost(due, nameOfClass, index) {
  if (nameOfClass == 'memory' && realValueI == true) {
    if (currentI == 1) total = total - 180
  }
  if (nameOfClass == 'storage' && realValueJ == true) {
    if (currentJ == 1) total = total - 100
    if (currentJ == 2) total = total - 180
  }
  if (nameOfClass == 'delivery' && realValueK == true) {
    if (currentK == 1) total = total - 20
  }
  if (i == 0) {
    total = previous + due
  } else {
    total = total + due
  }
  totalPrice.innerText = total
  bonusTotal.innerText = total
  i++
  if (nameOfClass == 'memory') {
    currentI = index
    realValueI = true
  }
  if (nameOfClass == 'storage') {
    currentJ = index
    realValueJ = true
  }
  if (nameOfClass == 'delivery') {
    currentK = index
    realValueK = true
  }
}

// promo - code matching function
let promoCode = document.getElementById('promo-code')
let val = ''
let valueForMatching = 0
let reducedValue = 0
function verifyCode() {
  if (promoCode.value == 'stevekaku') {
    console.log('its working')
    val = totalPrice.innerText
    console.log(val)
    valueForMatching = parseInt(val)
    reducedValue = valueForMatching - valueForMatching / 5
    bonusTotal.innerText = reducedValue
  }
}
// extraMemoryCost.innerText = "180"
// calling function inside "addEventListener"

highCostMemory.addEventListener('click', function () {
  charge = updateIndividualPrices(extraMemoryCost, 'high')
  totalCost(charge, 'memory', 1)
})
noCostMemory.addEventListener('click', function () {
  charge = updateIndividualPrices(extraMemoryCost, 'low')
  totalCost(charge, 'memory', 0)
})
smallStorage.addEventListener('click', function () {
  charge = updateIndividualPrices(extraStorageCost, 'small')
  totalCost(charge, 'storage', 0)
})
mediumStorage.addEventListener('click', function () {
  charge = updateIndividualPrices(extraStorageCost, 'medium')
  totalCost(charge, 'storage', 1)
})
largeStorage.addEventListener('click', function () {
  charge = updateIndividualPrices(extraStorageCost, 'large')
  totalCost(charge, 'storage', 2)
})
fastDelivery.addEventListener('click', function () {
  charge = updateIndividualPrices(deliveryCharge, 'fast')
  totalCost(charge, 'delivery', 1)
})
lateDelivery.addEventListener('click', function () {
  charge = updateIndividualPrices(deliveryCharge, 'late')
  totalCost(charge, 'delivery', 0)
})
let apply = document.getElementById('apply')
apply.addEventListener('click', function () {
  verifyCode()
})
