import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
   
  const currencyInfo = useCurrencyInfo(from) 
  const options = Object.keys(currencyInfo)

const swap = () => {

setFrom(to)
setTo(from)
setConvertedAmount(amount)
setAmount (convertedAmount)

}

const convert = () =>  {
setConvertedAmount (amount * currencyInfo[to])

}
  

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' 
    style= {{backgroundImage: 'url(data:image/jpeg;base64,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)'}}>
      < div className= 'w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        
        }}>
          <div className='w-full mb-1'> 
          <InputBox
          label= "from"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}
          selectedCurrency={from}
          />
          </div>
          <div className='relative w-full h-0.5'> 
          <button className='absolute top-1/2 left-1/2 -translate-x-1/2
          -translate-y-1/2 border-2 border-white
          rounded-md bg-blue-600 text-white px-2 py-0.5'
          onClick={swap}
          >Swap</button></div>
          <div className='w-full mb-1'> 
          <InputBox
          label= "to"
          currencyOptions={options}
          amount={convertedAmount}
          onCurrencyChange={(currency) => setTo(currency)}
      
          selectedCurrency={to}
          amountDisabled
          />
          </div>
          <button 
          type='submit'
          className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
          >Convert {from} to {to}</button>
          
        </form>
         </div>
     
    </div>
  )
}

export default App
