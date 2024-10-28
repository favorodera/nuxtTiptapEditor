<template>
  <template v-if="editor">
    <div class="w-full flex flex-col gap-4">
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(2rem,1fr))] gap-2"
      >
        <!-- FORMATTERS -->

        <!-- Bold -->
        <EditorOptionsButton
          tooltip="Bold"
          :disabled-binding="!editor.can().chain().focus().toggleBold().run()"
          :class-binding="{ 'dark:bg-gray-700/50': editor.isActive('bold') }"
          icon="i-material-symbols-format-bold-rounded"
          @click="editor.chain().focus().toggleBold().run()"
        />

        <!-- Italic -->
        <EditorOptionsButton
          tooltip="Italic"
          :disabled-binding="!editor.can().chain().focus().toggleItalic().run()"
          :class-binding="{ 'dark:bg-gray-700/50': editor.isActive('italic') }"
          icon="i-material-symbols-format-italic-rounded"
          @click="editor.chain().focus().toggleItalic().run()"
        />

        <!-- Strikethrough -->
        <EditorOptionsButton
          tooltip="Strikethrough"
          :disabled-binding="!editor.can().chain().focus().toggleStrike().run()"
          :class-binding="{ 'dark:bg-gray-700/50': editor.isActive('strike') }"
          icon="i-material-symbols-format-strikethrough-rounded"
          @click="editor.chain().focus().toggleStrike().run()"
        />

        <!-- Code -->
        <EditorOptionsButton
          tooltip="Code"
          :disabled-binding="!editor.can().chain().focus().toggleCode().run()"
          :class-binding="{ 'dark:bg-gray-700/50': editor.isActive('code') }"
          icon="i-material-symbols-code"
          @click="editor.chain().focus().toggleCode().run()"
        />

        <!-- Clear Marks -->
        <EditorOptionsButton
          tooltip="Clear Marks"
          icon="i-material-symbols-format-clear-rounded"
          @click="editor.chain().focus().unsetAllMarks().run()"
        />

        <!-- Clear Nodes -->
        <EditorOptionsButton
          tooltip="Clear Nodes"
          icon="i-material-symbols-layers-clear-rounded"
          @click="editor.chain().focus().clearNodes().run()"
        />
        <EditorOptionsButton
          tooltip="Paragraph"
          :class-binding="{ 'dark:bg-gray-700/50': editor.isActive('paragraph') }"
          icon="i-material-symbols-format-paragraph"
          @click="editor.chain().focus().setParagraph().run()"
        />

        <!-- Headings Dropdown -->
        <UDropdown
          :ui="{
            width: 'w-max',
            base: 'flex items-center',
            height: 'h-[2rem]',
            divide: 'divide-x-2 divide-y-0',
            padding: 'p-0',
            background: 'dark:bg-black',
            item: { padding: 'px-0 py-0 ' },
          }"
          :popper="{ arrow: true, placement: 'right-start' }"
          :items="[
            [{ slot: 'h1', label: '' }],
            [{ slot: 'h2', label: '' }],
            [{ slot: 'h3', label: '' }],
            [{ slot: 'h4', label: '' }],
            [{ slot: 'h5', label: '' }],
            [{ slot: 'h6', label: '' }],
          ]"
        >
          <EditorOptionsButton
            tooltip="Heading"
            :class-binding="{
              'dark:bg-gray-700/50': editor.isActive('heading'),
            }"
            icon="i-material-symbols-h-mobiledata-rounded"
          />
          <template #h1>
            <EditorOptionsButton
              tooltip="Heading 1"
              :class-binding="{
                'dark:bg-gray-700/50': editor.isActive('heading', { level: 1 }),
              }"
              icon="i-material-symbols-format-h1-rounded"
              @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            />
          </template>
          <template #h2>
            <EditorOptionsButton
              tooltip="Heading 2"
              :class-binding="{
                'dark:bg-gray-700/50': editor.isActive('heading', { level: 2 }),
              }"
              icon="i-material-symbols-format-h2-rounded"
              @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            />
          </template>
          <template #h3>
            <EditorOptionsButton
              tooltip="Heading 3"
              :class-binding="{
                'dark:bg-gray-700/50': editor.isActive('heading', { level: 3 }),
              }"
              icon="i-material-symbols-format-h3-rounded"
              @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            />
          </template>
          <template #h4>
            <EditorOptionsButton
              tooltip="Heading 4"
              :class-binding="{
                'dark:bg-gray-700/50': editor.isActive('heading', { level: 4 }),
              }"
              icon="i-material-symbols-format-h4-rounded"
              @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            />
          </template>
          <template #h5>
            <EditorOptionsButton
              tooltip="Heading 5"
              :class-binding="{
                'dark:bg-gray-700/50': editor.isActive('heading', { level: 5 }),
              }"
              icon="i-material-symbols-format-h5-rounded"
              @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            />
          </template>
          <template #h6>
            <EditorOptionsButton
              tooltip="Heading 6"
              :class-binding="{
                'dark:bg-gray-700/50': editor.isActive('heading', { level: 6 }),
              }"
              icon="i-material-symbols-format-h6-rounded"
              @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
            />
          </template>
        </UDropdown>

        <!-- LISTS -->

        <!-- Bullet List -->
        <EditorOptionsButton
          tooltip="Bullet List"
          icon="i-material-symbols-format-list-bulleted-rounded"
          :class-binding="{ 'dark:bg-gray-700/50': editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        />

        <!-- Ordered List -->
        <EditorOptionsButton
          tooltip="Ordered List"
          icon="i-material-symbols-format-list-numbered-rounded"
          :class-binding="{ 'dark:bg-gray-700/50': editor.isActive('orderedList') }"
          @click="editor.chain().focus().toggleOrderedList().run()"
        />

        <!-- Check List / Box  -->
        <EditorOptionsButton
          tooltip="Check List"
          icon="i-material-symbols-checklist-rounded"
          :class-binding="{
            'dark:bg-gray-700/50': editor.isActive('taskList'),
          }"
          @click="editor.chain().focus().toggleTaskList().run()"
        />

        <!-- STYLING -->

        <!-- Code Block -->
        <EditorOptionsButton
          tooltip="Code Block"
          icon="i-material-symbols-code-blocks-rounded"
          :class-binding="{ 'dark:bg-gray-700/50': editor.isActive('codeBlock') }"
          @click="editor.chain().focus().toggleCodeBlock().run()"
        />

        <!-- Blockquote -->
        <EditorOptionsButton
          tooltip="Blockquote"
          icon="i-material-symbols-format-quote-rounded"
          :class-binding="{ 'dark:bg-gray-700/50': editor.isActive('blockquote') }"
          @click="editor.chain().focus().toggleBlockquote().run()"
        />

        <!-- Horizontal Rule -->
        <EditorOptionsButton
          tooltip="Horizontal Rule"
          icon="i-material-symbols-horizontal-rule-rounded"
          @click="editor.chain().focus().setHorizontalRule().run()"
        />

        <!-- Hard Break -->
        <EditorOptionsButton
          tooltip="Hard Break"
          icon="i-material-symbols-format-line-spacing-rounded"
          @click="editor.chain().focus().setHardBreak().run()"
        />

        <!-- Highlight -->
        <EditorOptionsButton
          tooltip="Highlight"
          :class-binding="{
            'dark:bg-gray-700/50': editor.isActive('highlight'),
          }"
          icon="i-material-symbols-highlighter-size-5"
          @click="editor.chain().focus().toggleHighlight().run()"
        />

        <!-- Subscript -->
        <EditorOptionsButton
          tooltip="Subscript"
          :class-binding="{
            'dark:bg-gray-700/50': editor.isActive('subscript'),
          }"
          icon="i-material-symbols-subscript-rounded"
          @click="editor.chain().focus().toggleSubscript().run()"
        />

        <!-- Superscript -->
        <EditorOptionsButton
          tooltip="Superscript"
          :class-binding="{
            'dark:bg-gray-700/50': editor.isActive('superscript'),
          }"
          icon="i-material-symbols-superscript-rounded"
          @click="editor.chain().focus().toggleSuperscript().run()"
        />

        <!-- Underline -->
        <EditorOptionsButton
          tooltip="Underline"
          :class-binding="{
            'dark:bg-gray-700/50': editor.isActive('underline'),
          }"
          icon="i-material-symbols-format-underlined-rounded"
          @click="editor.chain().focus().toggleUnderline().run()"
        />

        <!-- HISTORY / MEMORY -->

        <!-- Undo -->
        <EditorOptionsButton
          tooltip="Undo"
          icon="i-material-symbols-undo-rounded"
          :disabled-binding="!editor.can().chain().focus().undo().run()"
          @click="editor.chain().focus().undo().run()"
        />

        <!-- Redo -->
        <EditorOptionsButton
          tooltip="Redo"
          icon="i-material-symbols-redo-rounded"
          :disabled-binding="!editor.can().chain().focus().redo().run()"
          @click="editor.chain().focus().redo().run()"
        />

        <!-- ALIGNMENT -->

        <!-- Align Left -->
        <EditorOptionsButton
          tooltip="Text Align Left"
          icon="i-material-symbols-format-align-left-rounded"
          :class-binding="{
            'dark:bg-gray-700/50': editor.isActive({ textAlign: 'left' }),
          }"
          @click="editor.chain().focus().setTextAlign('left').run()"
        />

        <!-- Align Center -->
        <EditorOptionsButton
          tooltip="Text Align Center"
          icon="i-material-symbols-format-align-center-rounded"
          :class-binding="{
            'dark:bg-gray-700/50': editor.isActive({ textAlign: 'center' }),
          }"
          @click="editor.chain().focus().setTextAlign('center').run()"
        />

        <!-- Align Right -->
        <EditorOptionsButton
          tooltip="Text Align Right"
          icon="i-material-symbols-format-align-right-rounded"
          :class-binding="{
            'dark:bg-gray-700/50': editor.isActive({ textAlign: 'right' }),
          }"
          @click="editor.chain().focus().setTextAlign('right').run()"
        />

        <!-- MEDIA AND ATTACHMENTS -->

        <!-- Image -->
        <EditorOptionsButton
          tooltip="Image"
          icon="i-material-symbols-photo-camera-back-rounded"
          @click="imageFormIsOpen = true"
        />

        <!-- Youtube Video -->
        <EditorOptionsButton
          tooltip="Youtube Video"
          icon="i-mdi-youtube"
          @click="youtubeFormIsOpen = true"
        />

        <!-- Link -->
        <EditorOptionsButton
          tooltip="Link"
          icon="i-material-symbols-attachment-rounded"
          :class-binding="{
            'dark:bg-gray-700/50': editor.isActive('link'),
          }"
          @click="linkFormIsOpen = true"
        />

        <!-- TABLE -->

        <!-- Table Dropdown -->
        <UDropdown
          :ui="{
            width: 'w-max',
            base: 'flex items-center',
            height: 'h-[2rem]',
            divide: 'divide-x-2 divide-y-0',
            padding: 'p-0',
            background: 'dark:bg-black',
            item: { padding: 'px-0 py-0 ' },
          }"
          :popper="{ arrow: true, placement: 'right-start' }"
          :items="[
            [{ slot: 'insert-table', label: '' }],
            [{ slot: 'fix-tables', label: '' }],
            [{ slot: 'delete-table', label: '' }],
            [{ slot: 'add-column-before', label: '' }],
            [{ slot: 'add-column-after', label: '' }],
            [{ slot: 'delete-column', label: '' }],
            [{ slot: 'add-row-before', label: '' }],
            [{ slot: 'add-row-after', label: '' }],
            [{ slot: 'delete-row', label: '' }],
            [{ slot: 'toggle-header-row', label: '' }],
            [{ slot: 'toggle-header-column', label: '' }],
            [{ slot: 'toggle-header-cell', label: '' }],
            [{ slot: 'merge-cells', label: '' }],
            [{ slot: 'split-cell', label: '' }],
          ]"
        >
          <EditorOptionsButton
            tooltip="Table"
            icon="i-material-symbols-table-chart"
            :class-binding="{ 'dark:bg-gray-700/50': editor.isActive('table') }"
          />
          <template #insert-table>
            <EditorOptionsButton
              tooltip="Insert Table"
              icon="i-mdi-table-plus"
              @click="
                editor
                  .chain()
                  .focus()
                  .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                  .run()
              "
            />
          </template>
          <template #delete-table>
            <EditorOptionsButton
              tooltip="Delete Table"
              icon="i-mdi-table-remove"
              @click="editor.chain().focus().deleteTable().run()"
            />
          </template>
          <template #fix-tables>
            <EditorOptionsButton
              tooltip="Fix Tables"
              icon="i-mdi-table-check"
              @click="editor.chain().focus().fixTables().run()"
            />
          </template>
          <template #add-column-before>
            <EditorOptionsButton
              tooltip="Add Column Before"
              icon="i-material-symbols-add-column-left-rounded"
              @click="editor.chain().focus().addColumnBefore().run()"
            />
          </template>
          <template #add-column-after>
            <EditorOptionsButton
              tooltip="Add Column After"
              icon="i-material-symbols-add-column-right-rounded"
              @click="editor.chain().focus().addColumnAfter().run()"
            />
          </template>
          <template #delete-column>
            <EditorOptionsButton
              tooltip="Delete Column"
              icon="i-mdi-table-column-remove"
              @click="editor.chain().focus().deleteColumn().run()"
            />
          </template>
          <template #add-row-before>
            <EditorOptionsButton
              tooltip="Add Row Before"
              icon="i-material-symbols-add-row-above-rounded"
              @click="editor.chain().focus().addRowBefore().run()"
            />
          </template>
          <template #add-row-after>
            <EditorOptionsButton
              tooltip="Add Row After"
              icon="i-material-symbols-add-row-below-rounded"
              @click="editor.chain().focus().addRowAfter().run()"
            />
          </template>
          <template #delete-row>
            <EditorOptionsButton
              tooltip="Delete Row"
              icon="i-mdi-table-row-remove"
              @click="editor.chain().focus().deleteRow().run()"
            />
          </template>
          <template #toggle-header-row>
            <EditorOptionsButton
              tooltip="Toggle Header Row"
              icon="i-material-symbols-table-rows-rounded"
              @click="editor.chain().focus().toggleHeaderRow().run()"
            />
          </template>
          <template #toggle-header-column>
            <EditorOptionsButton
              tooltip="Toggle Header Column"
              icon="i-material-symbols-view-column-rounded"
              @click="editor.chain().focus().toggleHeaderColumn().run()"
            />
          </template>
          <template #toggle-header-cell>
            <EditorOptionsButton
              tooltip="Toggle Header Cell"
              icon="i-material-symbols-square-rounded"
              @click="editor.chain().focus().toggleHeaderCell().run()"
            />
          </template>
          <template #merge-cells>
            <EditorOptionsButton
              tooltip="Merge Cells"
              icon=" i-mdi-table-merge-cells size-[1.25rem]"
              @click="editor.chain().focus().mergeCells().run()"
            />
          </template>

          <template #split-cell>
            <EditorOptionsButton
              tooltip="Split Cells "
              icon=" i-mdi-table-split-cell size-[1.25rem]"
              @click="editor.chain().focus().splitCell().run()"
            />
          </template>
        </UDropdown>

        <!-- MODALS -->

        <!-- Image Modal -->
        <UModal
          v-model="imageFormIsOpen"
          :ui="{
            width: 'max-w-lg',
            container: 'items-center',
            background: 'dark:bg-black',
            overlay: { background: 'dark:bg-black/50' },
          }"
        >
          <UForm
            :state="imageFormState"
            class="grid max-w-lg w-full gap-8 b b-gray/30 rounded-2 px-2 py-5 sm:p-6"
            @submit="
              addImage(
                imageFormState.source,
                imageFormState.alt,
                imageFormState.title,
              )
            "
          >
            <header class="grid place-items-center gap-1">
              <i
                class="i-material-symbols-add-a-photo-rounded h-8 w-8 text-white"
              />
              <h2 class="text-center text-2xl text-white font-700">
                Add Image
              </h2>
            </header>

            <UFormGroup
              label="Image Source"
              name="image-source"
              required
              hint="Url or Base64"
            >
              <UInput
                v-model="imageFormState.source"
                variant="outline"
                color="gray"
                size="md"
                placeholder="https://imagesource.com/image.png"
                type="text"
                :ui="{
                  color: { gray: { outline: 'dark:bg-transparent' } },
                }"
              />
            </UFormGroup>

            <UFormGroup
              label="Alternative Text"
              name="alternative-text"
              required
            >
              <UInput
                v-model="imageFormState.alt"
                variant="outline"
                color="gray"
                size="md"
                placeholder="Image Alternative Text"
                type="text"
                :ui="{
                  color: { gray: { outline: 'dark:bg-transparent' } },
                }"
              />
            </UFormGroup>

            <UFormGroup
              label="Image Title"
              name="image-title"
              hint="Optional"
            >
              <UInput
                v-model="imageFormState.title"
                variant="outline"
                color="gray"
                size="md"
                placeholder="Image Title"
                type="text"
                :ui="{
                  color: { gray: { outline: 'dark:bg-transparent' } },
                }"
              />
            </UFormGroup>

            <UButton
              type="submit"
              :disabled="imageFormState.source === '' || imageFormState.alt === ''"
              square
              padded
              label="Add Image"
              size="sm"
              color="gray"
              variant="ghost"
              :ui="{
                base: 'justify-self-center w-max dark:ring-0 self-end property-all duration-500 ',
                color: { gray: { ghost: 'dark:dark:bg-gray-700/50' } },
              }"
            />
          </UForm>
        </UModal>

        <!-- Youtube Modal -->
        <UModal
          v-model="youtubeFormIsOpen"
          :ui="{
            width: 'max-w-lg',
            container: 'items-center',
            background: 'dark:bg-black',
            overlay: { background: 'dark:bg-black/50' },
          }"
        >
          <UForm
            :state="youtubeFormState"
            class="grid max-w-lg w-full gap-8 b b-gray/30 rounded-2 px-2 py-5 sm:p-6"
            @submit="
              addYoutubeVideo(
                youtubeFormState.source,
                youtubeFormState.width,
                youtubeFormState.height,
              )
            "
          >
            <header class="grid place-items-center gap-1">
              <i
                class="i-material-symbols-youtube-activity-rounded h-8 w-8 text-white"
              />
              <h2 class="text-center text-2xl text-white font-700">
                Add Image
              </h2>
            </header>

            <UFormGroup
              label="Youtube Video Url"
              name="youtube-video-url"
              required
            >
              <UInput
                v-model="youtubeFormState.source"
                variant="outline"
                color="gray"
                size="md"
                placeholder="https://www.youtube.com/watch?v=video"
                type="text"
                :ui="{
                  color: { gray: { outline: 'dark:bg-transparent' } },
                }"
              />
            </UFormGroup>

            <UFormGroup
              label="Youtube Video Height"
              name="youtube-video-height"
              hint="Optional"
            >
              <UInput
                v-model="youtubeFormState.height"
                variant="outline"
                color="gray"
                size="md"
                placeholder="480"
                type="number"
                min="320"
                max="1024"
                :ui="{
                  color: { gray: { outline: 'dark:bg-transparent' } },
                }"
              />
            </UFormGroup>

            <UFormGroup
              label="Youtube Video Width"
              name="youtube-video-width"
              hint="Optional"
            >
              <UInput
                v-model="youtubeFormState.width"
                variant="outline"
                color="gray"
                size="md"
                min="180"
                max="720"
                placeholder="320"
                type="number"
                :ui="{
                  color: { gray: { outline: 'dark:bg-transparent' } },
                }"
              />
            </UFormGroup>

            <UButton
              type="submit"
              :disabled="youtubeFormState.source === ''"
              square
              padded
              label="Embed Youtube Video"
              size="sm"
              color="gray"
              variant="ghost"
              :ui="{
                base: 'justify-self-center w-max dark:ring-0 self-end property-all duration-500 ',
                color: { gray: { ghost: 'dark:dark:bg-gray-700/50' } },
              }"
            />
          </UForm>
        </UModal>

        <!-- Link Modal -->
        <UModal
          v-model="linkFormIsOpen"
          :ui="{
            width: 'max-w-lg',
            container: 'items-center',
            background: 'dark:bg-black',
            overlay: { background: 'dark:bg-black/50' },
          }"
        >
          <UForm
            :state="linkFormState"
            class="grid max-w-lg w-full gap-8 b b-gray/30 rounded-2 px-2 py-5 sm:p-6"
            @submit="
              addLink(
                linkFormState.url,
              )
            "
          >
            <header class="grid place-items-center gap-1">
              <i class="i-material-symbols-add-link-rounded h-8 w-8 text-white" />
              <h2 class="text-center text-2xl text-white font-700">
                Add Link
              </h2>
            </header>

            <UFormGroup
              label="Url"
              name="url"
              required
            >
              <UInput
                v-model="linkFormState.url"
                variant="outline"
                color="gray"
                size="md"
                placeholder="https://www.example.com"
                type="text"
                :ui="{
                  color: { gray: { outline: 'dark:bg-transparent' } },
                }"
              />
            </UFormGroup>

            <UButton
              type="submit"
              :disabled="linkFormState.url === ''"
              square
              padded
              label="Add Link"
              size="sm"
              color="gray"
              variant="ghost"
              :ui="{
                base: 'justify-self-center w-max dark:ring-0 self-end property-all duration-500 ',
                color: { gray: { ghost: 'dark:dark:bg-gray-700/50' } },
              }"
            />
          </UForm>
        </UModal>
      </div>

      <!-- Editor Textarea -->
      <EditorContent :editor="editor" />

      <!-- Word and Character Counter -->
      <UProgress
        :value="percentage"
        size="sm"
        :color="percentage >= 50 && percentage <75 ? 'orange' : percentage >= 75 ? 'rose' : 'indigo'"
        :ui="{
          wrapper: 'w-[12.5rem] self-end',
        }"
      >
        <template #indicator>
          <div class="flex flex-col text-right text-sm">
            <span>{{ editor?.storage.characterCount.characters() }} / {{ limit }} characters</span>
            <small class="text-gray">
              {{ editor?.storage.characterCount.words() }} words
            </small>
          </div>
        </template>
      </UProgress>
    </div>
  </template>

  <template v-else>
    <p>LOADING EDITOR...</p>
  </template>
</template>

<script setup lang="ts">
import CharacterCount from '@tiptap/extension-character-count'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Youtube from '@tiptap/extension-youtube'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import { all, createLowlight } from 'lowlight'

const lowlight = createLowlight(all)
const imageFormIsOpen = ref(false)
const youtubeFormIsOpen = ref(false)
const linkFormIsOpen = ref(false)
const limit = ref(10000) // Character limit (Edit to preference or remove) if removed also remove the limit configuration on the CharacterCount extension

const imageFormState = reactive({
  source: '',
  alt: '',
  title: '',
})
const youtubeFormState = reactive({
  source: '',
  width: 480,
  height: 320,
})
const linkFormState = reactive({
  url: '',
})

const editor = useEditor({
  content: '<h2 style="text-align:center">Hello Nuxt!</h2> <br> <p style="text-align:center">Click on the footer <strong>github</strong> icon for more info and docs.</p> ',
  extensions: [
    Subscript,
    Underline,
    Superscript,
    TableRow,
    TableHeader,
    TableCell,
    TaskList,
    Highlight,
    CharacterCount.configure({
      limit: limit.value,
    }),
    Link.configure({
      defaultProtocol: 'https',
      protocols: ['https', 'mailto', 'tel', 'http', 'ftp'],
      HTMLAttributes: {
        target: '_blank',
      },
    }),
    StarterKit.configure({
      codeBlock: false, // Disabled to accommodate CodeBlockLowlight which allows syntax highlighting for codes
    }),
    Youtube.configure({
      controls: false,
      nocookie: true,
      progressBarColor: 'white',
    }),
    Image.configure({ allowBase64: true }),
    CodeBlockLowlight.configure({ lowlight }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Table.configure({
      resizable: true,
    }),
    TaskItem.configure({
      nested: true,
    }),
  ],
})

const percentage = computed(() => {
  return Math.round((100 / limit.value) * editor.value?.storage.characterCount.characters())
})

const addImage = (source: string, alt: string, title?: string) => {
  if (!source && !alt) return

  editor.value?.chain().focus().setImage({ src: source, alt, title }).run()

  imageFormState.alt = ''
  imageFormState.source = ''
  imageFormState.title = ''
  imageFormIsOpen.value = false
}

const addLink = (url: string) => {
  if (!url) return

  editor.value
    ?.chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: url })
    .run()

  linkFormState.url = ''
  linkFormIsOpen.value = false
}

const addYoutubeVideo = (source: string, width: number, height: number) => {
  if (!source) return

  editor.value
    ?.chain()
    .focus()
    .setYoutubeVideo({ src: source, width, height })
    .run()

  youtubeFormState.source = ''
  youtubeFormIsOpen.value = false
}

// Clears the value of the on Unmount
onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>
