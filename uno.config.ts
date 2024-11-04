import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },

  },
  safelist: [
    'i-material-symbols-format-bold-rounded',
    'i-material-symbols-format-italic-rounded',
    'i-material-symbols-format-strikethrough-rounded',
    'i-material-symbols-code',
    'i-material-symbols-format-clear-rounded',
    'i-material-symbols-layers-clear-rounded',
    'i-material-symbols-format-paragraph',
    'i-material-symbols-h-mobiledata-rounded',
    'i-material-symbols-format-h1-rounded',
    'i-material-symbols-format-h2-rounded',
    'i-material-symbols-format-h3-rounded',
    'i-material-symbols-format-h4-rounded',
    'i-material-symbols-format-h5-rounded',
    'i-material-symbols-format-h6-rounded',
    'i-material-symbols-format-list-bulleted-rounded',
    'i-material-symbols-format-list-numbered-rounded',
    'i-material-symbols-checklist-rounded',
    'i-material-symbols-code-blocks-rounded',
    'i-material-symbols-format-quote-rounded',
    'i-material-symbols-horizontal-rule-rounded',
    'i-material-symbols-format-line-spacing-rounded',
    'i-material-symbols-highlighter-size-5',
    'i-material-symbols-subscript-rounded',
    'i-material-symbols-superscript-rounded',
    'i-material-symbols-format-underlined-rounded',
    'i-material-symbols-undo-rounded',
    'i-material-symbols-redo-rounded',
    'i-material-symbols-format-align-left-rounded',
    'i-material-symbols-format-align-center-rounded',
    'i-material-symbols-format-align-right-rounded',
    'i-material-symbols-photo-camera-back-rounded',
    'i-mdi-youtube',
    'i-material-symbols-attachment-rounded',
    'i-material-symbols-table-chart',
    'i-mdi-table-plus',
    'i-mdi-table-remove',
    'i-mdi-table-check',
    'i-material-symbols-add-column-left-rounded',
    'i-material-symbols-add-column-right-rounded',
    'i-mdi-table-column-remove',
    'i-material-symbols-add-row-above-rounded',
    'i-material-symbols-add-row-below-rounded',
    'i-mdi-table-row-remove',
    'i-material-symbols-table-rows-rounded',
    'i-material-symbols-view-column-rounded',
    'i-material-symbols-square-rounded',
    'i-mdi-table-merge-cells',
    'i-mdi-table-split-cell',
    'i-material-symbols-add-a-photo-rounded',
    'i-material-symbols-youtube-activity-rounded',
    'i-material-symbols-add-link-rounded',
  ],
  extendTheme: (theme) => {
    return {
      ...theme,
      breakpoints: {
        ...theme.breakpoints,
        tablet: '426px',
      },
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
