export default () => ({
  port: process.env.MAIN_PORT,
  postgresHost: process.env.POSTGRES_HOST,
  postgresUser: process.env.POSTGRES_USER,
  postgresDB: process.env.POSTGRES_DB,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  postgresPort: process.env.POSTGRES_PORT,
  secret: process.env.JWT_ACCESS_SECRET,
})