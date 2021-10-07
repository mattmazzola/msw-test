import React from 'react';

function App() {

  const [response1, setResponse1] = React.useState('');

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
      setResponse1(json);
    }
    else {
      const responseText = `${response.status} ${response.statusText}`;
      setResponse1(responseText)
    }
  };

  const [response2, setResponse2] = React.useState('');
  const onClickSend2 = async () => {
    const response = await fetch('/api/unhandled', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (response.ok) {
      const json = await response.json();
      setResponse2(json);
    }
    else {
      const responseText = `${response.status} ${response.statusText}`;
      setResponse2(responseText)
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
        <pre>{JSON.stringify(response1, null, 2)}</pre>
        <button onClick={onClickSend2}>Send 2</button>
        <pre>{JSON.stringify(response2, null, 2)}</pre>
      </main>
    </div>
  );
}

export default App;
