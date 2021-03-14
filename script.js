const btnCalc = document.querySelectorAll("#btn-calculate")[0];
const showResults = document.querySelectorAll("#show-results")[0];

btnCalc.addEventListener("click", getRanking);

async function getRanking() {
  try {
    showResults.innerHTML = "";
    showResults.innerHTML = `<div class="spinner"><div>`;

    const response = await fetch(process.env.API_URL);
    const data = await response.json();

    showResultsOnScreen(data);
  } catch (error) {
    showResults.innerHTML = error;
  }
}

function showResultsOnScreen(data) {
  const pittersons = document.querySelectorAll("#pittersons")[0].value;
  const pontosRanking = pittersons * 30;

  for (let i = 0; i < 62; i++) {
      const waggered = parseInt(data[i][0].replace(/\./g, ""));
      const lastWaggered = parseInt(data[62][0].replace(/\./g, ""));

      if(pontosRanking < lastWaggered) {
          showResults.innerHTML = ""
          showResults.innerHTML = `<h1> Você não entraria no ranking`
      }

    if (pontosRanking > waggered) {
      showResults.innerHTML = "";
      showResults.innerHTML = `<h1>Você estaria no top ${i + 1} com ${pontosRanking} apostados caso fizesse <a target="blanc" href="https://www.youtube.com/watch?v=mGqpjwKVGuk&t=214s">essa</a> estrategia</h1>`;
      break;
    }
  }
}
