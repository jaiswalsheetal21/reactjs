import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  function changeColor(color){
    setColor(color)
  }

return (

<div className='w-full h-screen duration-200' style=

{{backgroundColor: color}}>

<div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
   <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

<button
onClick={() => changeColor('skyblue')}

className='outline-none px-4 py-1 rounded-full

shadow-lg text-black'
style={{backgroundColor: 'skyblue'}}
>Blue</button>
<button
onClick={() => changeColor('purple')}
className='outline-none px-4 py-1 rounded-full

shadow-lg text-black'
style={{backgroundColor: 'purple'}}
>Purple</button>

<button
onClick={() => changeColor('pink')}

className='outline-none px-4 py-1 rounded-full

shadow-lg text-black'
style={{backgroundColor: 'pink'}}
>Pink</button>

<button
onClick={() => changeColor('Red')}

className='outline-none px-4 py-1 rounded-full

shadow-lg text-black'
style={{backgroundColor: 'Red'}}
>Red</button>

<button
onClick={() => changeColor('yellow')}

className='outline-none px-4 py-1 rounded-full

shadow-lg text-black'
style={{backgroundColor: 'yellow'}}
>Yellow</button>

</div>
</div>
</div>
)
}
export default App
