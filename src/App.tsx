import ESLogo from './data/icons/logo.png'
import GlobalStyle from './style/global'

function App() {
  return (
    <>
      <div>
        <a href="http://eaportfolio.carrd.co" target="_blank">
          <img src={ESLogo} className="logo" alt="ES logo" />
        </a>
      </div>
      <h1>ES Acessórios</h1>
      <GlobalStyle/>
    </>
  )
}

export default App
