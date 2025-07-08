import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(() => {
  const { redisHost, redisPort, redisPass } = useRuntimeConfig()
  const storage = useStorage()

  // Dynamically pass in credentials from runtime configuration, or other sources
  const driver = redisDriver({
    host: redisHost,
    port: redisPort,
    password : redisPass,
    base: 'hg',
  })

  // Mount driver
  storage.mount('redis', driver)
})
