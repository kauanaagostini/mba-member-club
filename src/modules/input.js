import { userFetchById } from "../services/user-fetch-by-id.js";
import { createMemberCardId, createMemberCards } from "./card-member.js";
import { createUserInfo } from "./user-info.js";

const inputId = document.getElementById("user-id");
const inputButton = document.querySelector("button");

inputId.addEventListener("keyup", () => {
  if(inputId.value.length == 3 || inputId.value.length == 7 || inputId.value.length == 11) {
    inputId.value += "-"
  }
})

inputButton.addEventListener("click", async (event) => {
  event.preventDefault();
  if(inputId.value.length != 15){
    inputId.value = "";
    alert("Por favor digite um ID válido");
    return;
  };
  const userId = inputId.value;
  const userInfo = await userFetchById({userId});
  if(userInfo.status != undefined) {
    alert("Por favor digite um ID válido");
    inputId.value="";
    return;
  };
  
  createUserInfo({ userName:userInfo.name, clientSince:userInfo.clientSince });
  createMemberCardId({ userId:userInfo.id});
  createMemberCards({ loyaltyCard:userInfo.loyaltyCard});
  inputId.value = "";

})