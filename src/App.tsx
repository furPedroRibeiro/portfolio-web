
import { Header } from './components/Header'
import { Body } from './components/Body'


import './styles/App.css'

function App() {
  
  return (
    <div>
      <div className='flex flex-col items-center justify-center mx-6 gap-10 mt-6'>
        <Header></Header>
        <Body></Body>
      </div>
      <section className="
                  flex flex-col items-center justify-center 
                  h-auto w-full py-10
                  bg-terciary
              ">
        <address
            className="
              flex flex-col items-center justify-center text-center
            "
        >
          <p className='font-medium text-lg'>
            By: Pedro Ribeiro <br />
            <strong>pedrocodejob@gmail.com</strong> <br />
            <a target='_blank' href='https://www.linkedin.com/in/pedro-ribeiro-abaa0b293' className='underline font-bold'>Linkedin</a> <br />
            <a target='_blank' href='https://www.github.com/furPedroRibeiro' className='underline font-bold'>Github</a> <br />
            Idade: 17 <br />
            Peruíbe, SP
          </p>
        </address>
      </section>
    </div>
  )
}

export default App
