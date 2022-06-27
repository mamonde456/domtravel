import fetch from "node-fetch";

export const home = async (req, res) => {
  const response = await fetch(
    "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?ServiceKey=qFOROn1VgG4zsynBhnP4uBPkZVbld8NV2Ab3zXAsjtebHBA8s8ah0FIvgnVXc6%2BfITKbYjKIFNqBrvHLXSu9Fw%3D%3D&MobileOS=ETC&MobileApp=App&_type=json"
  );
  const data = await response.json();
const {response:{body:{items:{item}}}} =data
const arr = item.map((n)=>n.name)
const showValue =(target)=>{console.log(target.value)};
 
  return res.render("home" ,{arr})
};

export const tour = (req, res) => {};