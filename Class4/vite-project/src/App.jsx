import GermanGreeting from './assets/components/typesOfGreetings/GermanGreeting'
import SpanishGretting from './assets/components/typesOfGreetings/SpanishGretting'
import Names from './assets/components/complementsOfGreetings/Names'
import Hello from './assets/components/Hello'
import EnglishGreeting from './assets/components/typesOfGreetings/EnglishGreeting'
import './App.css'

const App = () => (
  <>
  <Hello
  hello='Hello, Hola, Hallo'
  >
  </Hello>
  <EnglishGreeting
  hi='Hello!'
  >
  </EnglishGreeting>
  <Names
  name='Yonny'
  >
  </Names>

  <GermanGreeting
  hallo='Hallo'
  >  
  </GermanGreeting>
  <Names
  name='Frank'
  >
  </Names>
  
  <SpanishGretting
  hola='¡Hola!'
  >
  </SpanishGretting>
  <Names
  name='Pedro'
  >
  </Names>
  </>

)

export default App
