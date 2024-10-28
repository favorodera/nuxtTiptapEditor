# Nuxt Tiptap Editor (Template)

A Nuxt 3 template for Tiptap Markdown Editor with all the free tiptap nodes and marks with no need for markdown preview or compiling libraries as the the inputted markdown is converted or previewed on instance in the editor textarea 

# Technologies
- Nuxt 3
- Unocss
- Nuxt UI
- Scss
- Icons (Iconify)
  - Material Design Icons (mdi)
  - Material Symbols (material-symbols)

# Components (Local)
- Editor : The main editor component
- EditorOptionsButton : A button component for each of the editor options
- Footer : The footer component
- Header : The header component

# Components (Nuxt UI)
- UDropdown : A dropdown component
- UDivider : A divider component
- UInput : Input component for the modals
- UModal : Modal component for the link,image and youtube videos form
- UTooltip : A tooltip component for the options buttons
- UButton : A button component wrapping the **mainly** the EditorOptionsButton component

# Integration
1. UI Library : The template is built with Nuxt but built with few components and in a way you easily integrate it with any UI library of your choice without much task. The editor options button can be integrated to your ui library by just editing the EditorOptionsButton component to your ui library syntax.
2. Styles : The template uses Scss and Unocss for the styling. The Unocss utilities are written in same way as tailwind so no need to rewrite if you prefer to use tailwindcss.
3. Icon : The template uses Iconify for the icons. The icons are written in Iconify format **i-{collection}-{name}**.
4. Unwanted Components : You can easily remove any part of the template by just removing the components from the components folder and the imports from the Editor.vue file.

# Usage
1. Clone the repository:
```bash
git clone https://github.com/favorodera/nuxtTiptapEditor.git
```
2. Install the dependencies:
```bash
cd nuxtTiptapEditor
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. You can also visit the [Live Site](https://nuxt-tiptap-editor-template.vercel.app/)

# License
MIT License

For More information and docs visit [Tiptap](https://tiptap.dev/)