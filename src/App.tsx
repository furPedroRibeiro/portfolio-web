import AOS from 'aos'
import 'aos/dist/aos.css'

import { Header } from './components/Header'
import { Body } from './components/Body'


import './styles/App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init()
  })
  return (
      <div className='flex flex-col items-center justify-center w-full overflow-hidden'>
        <Header></Header>
        <Body></Body>
        <section className="
                    flex flex-col items-center justify-center 
                    h-auto w-full py-10
                    bg-primary
                ">
            <address
                className="
                  flex flex-col items-center justify-center text-center
                "
            >
            <p className='font-medium text-lg text-[#1e1e1e]'>
              <strong>pedro-ribeiro@usp.br</strong> <br />
              <a target='_blank' href='https://www.linkedin.com/in/pedro-ribeiro-abaa0b293' className='underline font-bold'>Linkedin</a> <br />
              <a target='_blank' href='https://www.github.com/furPedroRibeiro' className='underline font-bold'>Github</a> <br />
              Idade: 18 <br />
              São Carlos, SP
            </p>
          </address>
        </section>
      </div>
  )
}

export default App
