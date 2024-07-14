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

app.get("/test", (req, res) => {
  console.log("Test Running");
});

const callDruwaDataFile = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/jaehyuk-lee-0712/druwa_datas/main/storeInfo-2024-07-07.json"
    );
    const dataList = response.data;

    if (dataList.length > 0) {
      console.log("DataList Length : " + dataList.length);

      // for (let i = 0; i < dataList.lenth; i++) {
      console.log("insert is run");
      for (let i = 0; i < dataList.length; i++) {
        const rotateInfo = await getAddressCoordinates(
          dataList[i].storeAddress
        );

        const dtName = dataList[i].storeName;
        const dtAddress = dataList[i].storeAddress;
        const dtLat = rotateInfo.latitude;
        const dtLon = rotateInfo.longitude;
        const deleteYn = false;
        const dtlCategory = "starbucks";

        console.log(dtLat, dtLon);

        const newStroe = await DTstroeBasic.create({
          dtName,
          dtAddress,
          dtLat,
          dtLon,
          dtlCategory,
          deleteYn,
        });

        console.log(newStroe);
      }
    }
  } catch (error) {
    console.error("Error Call Data : ", error);
    throw error;
  }
};

// callDruwaDataFile();

// 위도 , 경도 API
// API 키 설정
const CLIENT_ID = "n3baurqzz3";
const CLIENT_SECRET = "huvYHl0HzBfJARxNAmYsq7ZbvEa7Bmcq1AQ4kFEw";

// 헤더 설정
const headers = {
  "X-NCP-APIGW-API-KEY-ID": CLIENT_ID,
  "X-NCP-APIGW-API-KEY": CLIENT_SECRET,
};

// API URL 설정
const apiUrl = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode";

async function getAddressCoordinates(address) {
  try {
    // 요청 파라미터 설정
    const params = {
      query: address,
    };

    // API 요청
    const response = await axios.get(apiUrl, { params, headers });

    // 응답 처리
    if (response.data.status === "OK" && response.data.meta.totalCount > 0) {
      const { x, y } = response.data.addresses[0];
      return { latitude: y, longitude: x };
    } else {
      console.log("주소에 해당하는 결과를 찾을 수 없습니다.");
      return { latitude: 0, longitude: 0 };
    }
  } catch (error) {
    console.error(`API 요청 중 오류 발생: ${error}`);
  }
}

// 매장을 등록하는 API
app.post("/admin/register", async (req, res) => {
  const newStores = req.body;

  try {
    // 데이터를 반복하며 MongoDB에 저장
    for (const store of newStores) {
      const rotateInfo = await getAddressCoordinates(store.dtAddress);

      const newStore = new DTstoreBasic({
        dtName: store.dtName,
        dtAddress: store.dtAddress,
        dtLat: rotateInfo.latitude,
        dtLon: rotateInfo.longitude,
        dtlCategory: store.dtlCategory,
        deleteYn: false,
      });

      await newStore.save();
    }

    res.status(200).json({ message: 'Stores registered successfully' });
  } catch (error) {
    console.error("Error saving stores to database", error);
    res.status(500).send("Error saving stores to database");
  }
});

// git 데이터 DB 등록 API 
app.post("/admin/register" , (req , res) => {
  const newStores = req. body;

  console.log(newStores);

  res.status(200).json({ message: 'Stores registered successfully'});
})

// port setting.
app.listen(9000, () => {
  console.log("서버 다음 포트에서 실행 중 :  9000");
});

// druwa__datas github json data call -> naver map api use for x, y by add in json file ->
// dtname , add , x, ,y to insert in mongo
