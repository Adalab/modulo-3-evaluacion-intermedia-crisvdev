
import '../styles/App.scss';
import { useEffect, useState } from 'react';

function App() {
  const [ quotesList, setQuotesList] =useState ([]);
  const [quotesSearch, setQuotesSearch] = useState('');
useEffect(() => {
  fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json')
  .then((response) => response.json())
      .then((data) => {
        const quotes = data.map((eachQuote)=>{
          return {
            quote : eachQuote.quote,
            character : eachQuote.character
          }
        });
        setQuotesList(quotes);
        });
          
      },[]);
 const handleQuotesSearch = (ev) => {
  setQuotesSearch(ev.target.value);
 };
  /* RETURN --> HTML */
  const renderQuoteList = () => {
    const filteredQuotes = quotesList.filter((eachQuote)=> eachQuote.name.toLowerCase().includes(quotesSearch.toLowerCase())
    );
    return filteredQuotes.map((eachQuote)=>(
      <li key={eachQuote.quote}>
        <div className='quotes'>
        <p>{eachQuote.quote}</p><p className='name'>-{eachQuote.character}</p></div>
      </li>
    
  ));
  };
  return(
  <body>
  <h1>Frases de Friends</h1>
  <form>
  <label>Filtrar por frase</label>
  <input type= 'text' name ='' placeholder='' value='' onInput=''/>
  <label>Filtrar por personaje</label>
  <input type= 'text' name ='' placeholder='' value={quotesSearch} onInput={handleQuotesSearch}/>
  </form>
  <ul>
    <li>
      <p>{renderQuoteList()}</p>
    </li>
  </ul>
  </body>
);
}


export default App;
