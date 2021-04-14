import React, { useEffect } from 'react'
import Quill from 'quill'
import * as Y from 'yjs'
import { QuillBinding } from 'y-quill'
import QuillCursors from 'quill-cursors'
import { WebrtcProvider } from 'y-webrtc'

function App() {
  useEffect(() => {
    
    Quill.register('modules/cursors', QuillCursors)

    // A Yjs document holds the shared data
    const ydoc = new Y.Doc()

    const provider = new WebrtcProvider('cindy-demo-room', ydoc)

    // Define a shared text type on the document
    const ytext = ydoc.getText('quill')

    const editor = new Quill(document.querySelector('#root'), {
      modules: {
        cursors: true,
        toolbar: [
          [{ header: [1, 2, false]}],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ],
        history: {
          // Local undo shouldn't undo changes
          // from remote users
          userOnly: true
        }
      },
      placeholder: 'Start collaborating...',
      theme: 'snow' 
    })

    // Create an editor-binding which
    // "binds" the quill editor to a Y.Text type.
    const binding = new QuillBinding(ytext, editor, provider.awareness)

  }, [])

  return (
    <div>

    </div>
  )
}

export default App
