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
        // for(let i =0; i < dataList.length; i++) {
        for(let i =0; i < 10; i++) {

          const rotateInfo = await getAddressCoordinates(dataList[i].storeAddress);

          const dtName = dataList[i].storeName;
          const dtAddress = dataList[i].storeAddress;
          const dtLat = rotateInfo.latitude;
          const dtLon = rotateInfo.longitude;

          const newStroe = new DTstroeBasic({
            dtName , 
            dtAddress , 
            dtLat ,
            dtLon
          })
          
          const saveStore = await newStroe.save();

          console.log(saveStore);

        }
    }
  } catch (error) {
    console.error("Error Call Data : ", error);
    throw error;
  }
};

callDruwaDataFile();

// 위도 , 경도 API
// API 키 설정
const CLIENT_ID = 'n3baurqzz3';
const CLIENT_SECRET = 'huvYHl0HzBfJARxNAmYsq7ZbvEa7Bmcq1AQ4kFEw';

// 헤더 설정
const headers = {
  "X-NCP-APIGW-API-KEY-ID": CLIENT_ID,
  "X-NCP-APIGW-API-KEY": CLIENT_SECRET,
};

// API URL 설정
const apiUrl = 'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode';

async function getAddressCoordinates(address) {
  try {
    // 요청 파라미터 설정
    const params = {
      query: address
    };
    
    // API 요청
    const response = await axios.get(apiUrl, { params, headers });
    
    // 응답 처리
    if (response.data.status === "OK" && response.data.meta.totalCount > 0) {
      const { x, y } = response.data.addresses[0];
      return { latitude: y, longitude: x }; 
    } else {
      console.log("주소에 해당하는 결과를 찾을 수 없습니다.");
    }
  } catch (error) {
    console.error(`API 요청 중 오류 발생: ${error}`);
  }
}

// port setting.
app.listen(9000, () => {
  console.log("서버 다음 포트에서 실행 중 :  9000");
});

// druwa__datas github json data call -> naver map api use for x, y by add in json file ->
// dtname , add , x, ,y to insert in mongo
