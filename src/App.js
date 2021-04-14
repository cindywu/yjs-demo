import Quill from 'quill'

function App() {
  var quill = new Quill(document.querySelector('#root'), {
    modules: {
      // cursors: true,
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
  
  return (
    <div>

    </div>
  )
}

export default App
