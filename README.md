# druwa_project

## 소개    
일상의 여우 속으로. 라는 슬로건으로 기획한 드루와 프로젝트는 내 근처에 있는 드라이브 스루 매장을 바로 찾아주어 사용자들이 출/퇴근,   
바쁜 일상 속에서 잠깐의 여유를 찾을 수 있도록 서비스를 제공하기 위해 제작 된 프로젝트입니다.      
Node.js를 통해 Backend를 구현하였고 route분리를 통한 소스를 간결화 하였습니다.   
Pyyhon의 Selenium, Node.js의 Pupptear를 사용하여 웹 크롤링을 통한 데이터 자동화 수집을 구현하였고,   
Reatc.js를 사용하여 페이지 별 컴포넌트와 Context를 통한 로그인 세션관리 기능 또한 구현하였습니다.   
데이터 베이스는 MongoDb를 사용하여 데이터 관리를 간단하고도 용이하게 할 수 있었습니다.  
메인 기능인 사용자 접속 위치 기반 근처 드라이브 스루 매장 도출은 하버사인 공식을 사용하여 위도, 경도를   
계산하였고 네이버 Map API를 사용하여 각 매장의 위도 경도를 저장하였습니다.   
결과적으로 사용자들은 별도의 행위 없이 접속 후 바로 드라이브 스루 매장을 찾을 수 있습니다.



## client
````
cd /client/
npx create-react-app . 
npm i react-router-dom
npm i sass
npm i react-quill
npm install @emailjs/browser --save
npm i react-modal
````

## server
````
cd /server/
npm init -y 
npm i express (서버연결)
npm i mongoose (db연결)
npm i cors (cors에러)
npm i nodemon
npm i bcryptjs
npm i jsonwebtoken
npm i cookie-parser
npm i axios
npm i cheerio
````
