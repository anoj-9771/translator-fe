const baseUrl = 'http://13.211.160.11:6000/translate';

document.getElementById('btn-translateToEnglish').addEventListener('click', (e) => {
  const newariWord = document.getElementById('newariInput').value;
  console.log(newariWord);
  if (newariWord && newariWord.trim().length) {
    const postData = { text: newariWord.trim() };
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // document.getElementById('englishInput').value = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
});

document.getElementById("btn-translateToNewari").addEventListener("click", (e) => {
  const englishWord = document.getElementById("englishInput").value;
  console.log(englishWord);
  // BE needs an identifier for translation from and to
  if (englishWord && englishWord.trim().length) {
    const word = englishWord.trim();
    const to = 'NW';
    const url = `${baseUrl}?word=${word}?to={to}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // document.getElementById('newariInput').value = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
});