export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { cartKey } = body

  return await useStorage('redis').get(cartKey)
})
