// lib / module setting
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const axios = require("axios");
const cherrio = require("cheerio");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const mongose = require("mongoose");
const DTstroeBasic = require("./models/DTstoreBasic");

// mongodb+srv://dlwogur0712:vmfleja1215@maincluster.lwlrke2.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster

mongose.connect(
  "mongodb+srv://dlwogur0712:vmfleja1215@maincluster.lwlrke2.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster"
);

// app setting
const app = express();

// cors , cookie , token , secret code setting
const secret = "bongpalscookieiswoomai";
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

const callDruwaDataFile = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/jaehyuk-lee-0712/druwa_datas/main/storeInfo-2024-07-07.json"
    );
    const dataList = response.data;

    if (dataList.length > 0) {
    }
  } catch (error) {
    console.error("Error Call Data : ", error);
    throw error;
  }
};

// 위도 , 경도 API
const getRotateInfo = () => {};

// port setting.
app.listen(9000, () => {
  console.log("서버 다음 포트에서 실행 중 :  9000");
});

// druwa__datas github json data call -> naver map api use for x, y by add in json file ->
// dtname , add , x, ,y to insert in mongo
