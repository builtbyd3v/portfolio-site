import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      // note: dev-only stand-in for the Vercel function, so localhost shows live data
      name: 'dev-github-contributions',
      configureServer(server) {
        server.middlewares.use('/api/github-contributions', async (_req, res) => {
          const { default: handler } = await server.ssrLoadModule(
            '/api/github-contributions.js',
          )
          const vercelRes = Object.assign(res, {
            status(code: number) {
              res.statusCode = code
              return vercelRes
            },
            json(body: unknown) {
              res.end(JSON.stringify(body))
            },
          })
          await handler({ query: {} }, vercelRes)
        })
      },
    },
  ],
})
