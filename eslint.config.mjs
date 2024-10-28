import unocss from '@unocss/eslint-config/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(

  unocss,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
)
