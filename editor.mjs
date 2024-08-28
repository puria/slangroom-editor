import { EditorView, basicSetup } from "codemirror"
import { Slangroom } from "codemirror-lang-slangroom"

let editor = new EditorView({
  extensions: [basicSetup, Slangroom()],
  parent: document.body
})

