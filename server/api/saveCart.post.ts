import { randomUUID } from 'node:crypto'

async function clearOldCart() {
  const oneWeek = 604800000
  const cartsKeys = await useStorage('redis').getKeys('cart')

  cartsKeys.forEach(async (cartKey) => {
    const cart = await useStorage('redis').get(cartKey)

    if (Date.now() - cart.createdAt > oneWeek) {
      await useStorage('redis').del(cartKey)
    }
  })
}

export default defineEventHandler(async (event) => {
  const id = randomUUID()
  const body = await readBody(event)
  const { items, total } = body

  await useStorage('redis').set(`cart:${id}`, { id, items, total, createdAt: Date.now() })

  clearOldCart()

  return { id }
})
