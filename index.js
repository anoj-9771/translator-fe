const baseUrl = 'https://hhxgkiy54l.execute-api.ap-southeast-2.amazonaws.com/stg/translations';
document.getElementById('btn-translateToEnglish').addEventListener('click', (e) => {
  const newariWord = document.getElementById('newariInput').value;
  if (newariWord && newariWord.trim().length) {
    const word = newariWord.trim();
    const to = 'english';
    const url = `${baseUrl}?newariword=${word}`;
    fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('englishInput').value = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
});

document.getElementById("btn-translateToNewari").addEventListener("click", (e) => {
  const englishWord = document.getElementById("englishInput").value;
  if (englishWord && englishWord.trim().length) {
    const word = englishWord.trim();
    const to = 'newari';
    const url = `${baseUrl}?engword=${word}`;
    fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('newariInput').value = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
});