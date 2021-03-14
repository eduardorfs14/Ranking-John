const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();

app.use(cors());

app.get("/ranking", async (req, res) => {
  let ranking = await getRanking();
  while (ranking === undefined) {
    ranking = await getRanking();
  }
  res.json(ranking || "Erro encontrado, tente novamente");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

async function getRanking() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://johnpittertv.com/ranking");

  const ranking = await page.evaluate(() => {
    try {
      return [
        [document.querySelectorAll(".green")[0].innerText],
        [document.querySelectorAll(".green")[1].innerText],
        [document.querySelectorAll(".green")[2].innerText],
        [document.querySelectorAll(".green")[3].innerText],
        [document.querySelectorAll(".green")[4].innerText],
        [document.querySelectorAll(".green")[5].innerText],
        [document.querySelectorAll(".green")[6].innerText],
        [document.querySelectorAll(".green")[7].innerText],
        [document.querySelectorAll(".green")[8].innerText],
        [document.querySelectorAll(".green")[9].innerText],
        [document.querySelectorAll(".green")[10].innerText],
        [document.querySelectorAll(".green")[11].innerText],
        [document.querySelectorAll(".green")[12].innerText],
        [document.querySelectorAll(".green")[13].innerText],
        [document.querySelectorAll(".green")[14].innerText],
        [document.querySelectorAll(".green")[15].innerText],
        [document.querySelectorAll(".green")[16].innerText],
        [document.querySelectorAll(".green")[17].innerText],
        [document.querySelectorAll(".green")[18].innerText],
        [document.querySelectorAll(".green")[19].innerText],
        [document.querySelectorAll(".green")[20].innerText],
        [document.querySelectorAll(".green")[21].innerText],
        [document.querySelectorAll(".green")[22].innerText],
        [document.querySelectorAll(".green")[23].innerText],
        [document.querySelectorAll(".green")[24].innerText],
        [document.querySelectorAll(".green")[25].innerText],
        [document.querySelectorAll(".green")[26].innerText],
        [document.querySelectorAll(".green")[27].innerText],
        [document.querySelectorAll(".green")[28].innerText],
        [document.querySelectorAll(".green")[29].innerText],
        [document.querySelectorAll(".green")[30].innerText],
        [document.querySelectorAll(".green")[31].innerText],
        [document.querySelectorAll(".green")[32].innerText],
        [document.querySelectorAll(".green")[33].innerText],
        [document.querySelectorAll(".green")[34].innerText],
        [document.querySelectorAll(".green")[35].innerText],
        [document.querySelectorAll(".green")[36].innerText],
        [document.querySelectorAll(".green")[37].innerText],
        [document.querySelectorAll(".green")[38].innerText],
        [document.querySelectorAll(".green")[39].innerText],
        [document.querySelectorAll(".green")[40].innerText],
        [document.querySelectorAll(".green")[41].innerText],
        [document.querySelectorAll(".green")[42].innerText],
        [document.querySelectorAll(".green")[43].innerText],
        [document.querySelectorAll(".green")[44].innerText],
        [document.querySelectorAll(".green")[45].innerText],
        [document.querySelectorAll(".green")[46].innerText],
        [document.querySelectorAll(".green")[47].innerText],
        [document.querySelectorAll(".green")[48].innerText],
        [document.querySelectorAll(".green")[49].innerText],
        [document.querySelectorAll(".green")[50].innerText],
        [document.querySelectorAll(".green")[51].innerText],
        [document.querySelectorAll(".green")[52].innerText],
        [document.querySelectorAll(".green")[53].innerText],
        [document.querySelectorAll(".green")[54].innerText],
        [document.querySelectorAll(".green")[55].innerText],
        [document.querySelectorAll(".green")[56].innerText],
        [document.querySelectorAll(".green")[57].innerText],
        [document.querySelectorAll(".green")[58].innerText],
        [document.querySelectorAll(".green")[59].innerText],
        [document.querySelectorAll(".green")[60].innerText],
        [document.querySelectorAll(".green")[61].innerText],
        [document.querySelectorAll(".green")[62].innerText],
      ];
    } catch {
      return undefined;
    }
  });
  await browser.close();

  return ranking;
}
