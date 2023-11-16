// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['@fortawesome/fontawesome-svg-core/styles.css'],
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		baseURL: '/taxi-template/', // baseURL: '/<repository>/'
		buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
	},
})
