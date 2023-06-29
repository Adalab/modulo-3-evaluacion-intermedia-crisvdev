
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
  
  const renderQuotesList = () => {
    /*const filteredQuotes = quotesList.filter((eachQuote)=> eachQuote.name.toLowerCase().includes(quotesSearch.toLowerCase())
    );*/
    return quotesList.map((eachQuote)=>(
      <ul key={eachQuote.quote} className='quotes'>
        {eachQuote.quote}<p className='name'>-{eachQuote.character}</p>
      </ul>
    
  ));
  };
  return(
  <body>
  <h1>Frases de Friends</h1>
  <form>
  <label>Filtrar por frase</label>
  <input type= 'text' name ='' placeholder='' value='' onInput=''/>
  <label>Filtrar por personaje</label>
  <input type= 'text' name ='' placeholder='' value={quotesSearch} onChange={handleQuotesSearch}/>
  </form>
  <ul>{renderQuotesList()}
  </ul>
  </body>
);
}


export default App;
