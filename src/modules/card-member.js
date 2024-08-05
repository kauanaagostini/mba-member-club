const cardMemberId = document.getElementById("card-member-id");
const cardMemberCards = document.querySelector("div.card-member-wrapper")

export function createMemberCardId({ userId }){
  cardMemberId.innerHTML="";
  const memberId = document.createElement("p");
  memberId.textContent = `ID: ${userId}`;
  cardMemberId.append(memberId);
}

export function createMemberCards({ loyaltyCard }) {
  cardMemberCards.innerHTML="";
  for(let card = 1; card <= loyaltyCard.cutsNeeded; card ++) {
    const memberCard = document.createElement("div");
    memberCard.classList.add("card-member-inner");
    cardMemberCards.append(memberCard);
    if(card <= loyaltyCard.totalCuts){
      memberCard.classList.add("checked");
    };
    if(card == loyaltyCard.cutsNeeded) {
      memberCard.classList.add("last-card");
    }
  }
}