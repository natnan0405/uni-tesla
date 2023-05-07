import {
	defineConfig
} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		uni(),
	],
	transpileDependencies: ['@dcloudio/uni-ui'],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})