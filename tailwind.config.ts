import type { Config } from 'tailwindcss'
import daisyui from "daisyui"

export default <Partial<Config>>{
    theme: {
        extend: {
            dropShadow: {
                'logo': '0 10px 10px rgba(0, 0, 0, 1)',
            }
        }
    },
    plugins: [
        daisyui,
    ],
}