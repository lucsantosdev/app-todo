import REact from 'react'
import TodoApp from './components/TodoApp'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}

export default App
