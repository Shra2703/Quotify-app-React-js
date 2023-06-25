// array to store value of name and quote field
const quotes = [];

let nameRef = React.createRef();
let quoteRef = React.createRef();

// clearing the input after enter is pressed
function clearInput() {
  nameRef.current.value = "";
  quoteRef.current.value = "";
}

// function when enter is press trigered
function handleKey(e) {
  let name = nameRef.current.value;
  let quote = quoteRef.current.value;
  console.log(e.key);
  if (!name || !quote) {
    return;
  }
  if (e.key != "Enter") {
    return;
  }
  //   pushing element in array

  quotes.unshift({ name, quote });
  // quotes.unshift(nameRef.current.value + "," +quoteRef.current.value);
  console.log(quotes);

  clearInput();
  rootElement.render(<App />);
}

const App = () => (
  <>
    <div className="App">
      <div>
        <h2>Quotify App</h2>

        {/* input field */}
        <input type="text" placeholder="Name" ref={nameRef} />
        <input
          type="text"
          placeholder="Your Quote"
          ref={quoteRef}
          onKeyPress={handleKey}
        />
      </div>

      {/* The  contanier which will appear after enter is press */}
      <div className="quotes">
        {quotes.map((res, index) => (
          <div key={index}>
            <i>"{res.quote}"</i>
            <b>~{res.name}</b>
          </div>
        ))}
      </div>
    </div>
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
