const userId = document.getElementById("user-info");

export function createUserInfo({ userName, clientSince }) {
  userId.innerHTML="";
  const userNameElement = document.createElement("h1");
  userNameElement.textContent = userName;
  const clientSinceElement = document.createElement("p");
  clientSinceElement.textContent = `Cliente desde ${clientSince}`
  userId.append(userNameElement);
  userId.append(clientSinceElement);
}