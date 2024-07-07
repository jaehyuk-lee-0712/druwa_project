// lib / module setting
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const axios = require("axios");
const cherrio = require("cheerio");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const puppeteer = require("puppeteer");

// app setting
const app = express();

// cors , cookie , token , secret code setting
const secret = "bongpalscookieiswoomai";
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

// apis
// 크롤링 테스트
const getStarBucksBasicInfoFromNaver = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.bro;
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );
    await page.goto(
      "https://map.naver.com/p/search/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4%20dt%EC%A0%90?c=15.00,0,0,0,dh",
      { waitUntil: "networkidle2" } // 네트워크 요청이 완료될 때까지 대기
    );

    await page.waitForSelector("#searchIframe", { timeout: 60000 });

    // iframe 태그의 src 속성 값 추출
    const iframeSrc = await page.$eval("#searchIframe", (iframe) => iframe.src);

    if (iframeSrc !== "") {
      await page.goto(iframeSrc, { waitUntil: "networkidle2" });
      await page.waitForSelector(".TYaxT", { timeout: 60000 });

      const starbucksList = await page.$$eval(".TYaxT", (elements) =>
        elements.map((el) => el.textContent.trim())
      );

      if (starbucksList.length > 0) {
        let originalOffSetWidth = 0;
        while (true) {
          await page.evaluate("window.scrollBy(0, document.body.scrollHeight)");
          await new Promise((page) => setTimeout(page, 500));
          let newOffset = await page.evaluate("window.pageYOffset");
          if (originalOffSetWidth === newOffset) {
            break;
          }
          originalOffSetWidth = newOffset;
        }
      }
    }

    await browser.close();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getStarBucksBasicInfoFromNaver();

// port setting.

app.listen(9000, () => {
  console.log("서버 다음 포트에서 실행 중 :  9000");
});
