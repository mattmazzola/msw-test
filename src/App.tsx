import React from 'react';

function App() {

  const [response, setResponse] = React.useState('');

  const onClickSend = async () => {

    const response = await fetch('/api/results', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello World'
      })
    });

    if (response.ok) {
      const json = await response.json();
      setResponse(json);
    }
    else {
      const responseText = `${response.status} ${response.statusText}`;
      setResponse(responseText)
    }
  };

  return (
    <div>
      <header>
        <h1>MSW Tester</h1>
      </header>
      <main>
        <p>
        Click to send a request and display the response
        </p>
        <button onClick={onClickSend}>Send</button>
        <pre>{JSON.stringify(response, null, 2)}</pre>
      </main>
    </div>
  );
}

export default App;
