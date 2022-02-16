/** ----------------- Constants ----------------------- */
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
const player = 1
const dealer = -1
const cardValues = {
  "dA": 1, "dQ": 10, "dK": 10, "dJ": 10,"d10": 10, "d09": 9, "d08": 8, "d07":7,"d06": 6, "d05": 5,"d04": 4,"d03": 3, "d02": 2, "hA": 1, "hQ": 10, "hK": 10, "hJ": 10, "h10": 10, "h09": 9, "h08": 8, "h07": 7, "h06": 6, "h05": 5, "h04": 4, "h03": 3, "h02": 2, "cA": 1, "cQ": 10, "cK": 10, "cJ": 10, "c10": 10, "c09": 9, "c08": 8, "c07": 7, "c06": 6, "c05": 5, "c04": 4, "c03": 3, "c02": 2, "sA": 1, "sQ": 10, "sK": 10, "sJ": 10, "s10": 10, "s09": 9, "s08": 8, "s07": 7, "s06": 6,"s05": 5, "s04": 4, "s03": 3, "s02": 2
}
/** ----------------- Variables ------------------------*/
let discardPile, turn, isWinner, playerHand, dealerHand, newDealerCard, newCard, playerTotal, dealerTotal   
let shuffledDeck = []
let deck1 = []
/** ------------- Cached Element References --------- */
let yesBtn = document.querySelector("#yes-button")
let noBtn = document.querySelector("#no-button")
let playArea = document.querySelector("body")
let welcomeScreen = document.getElementById("opening-screen")
let footer = document.querySelector("footer")
let hitBtn = document.querySelector("#hit-button")
let stayBtn = document.querySelector("#stay-button")
let table = document.querySelector("#game-table")
let message1 = document.querySelector("#message-1")
let message2 = document.querySelector("#message-2")
let dealerCard1 = document.querySelector("#dealer-card-1")
let dealerCard2 = document.querySelector("#dealer-card-2")
let playerCard1 = document.querySelector("#player-card-1")
let playerCard2 = document.querySelector("#player-card-2")
let dealerArea = document.querySelector(".dealer")
let playerArea = document.querySelector(".player")
let resetBtn = document.querySelector("#reset-button")

/** -------------- Event Listeners ------------------ */
yesBtn.addEventListener("click", letsPlay)
hitBtn.addEventListener("click", playerPicks)
stayBtn.addEventListener("click", clickStayBtn)
resetBtn.addEventListener("click", replay)


/** --------------- Functions ----------------------- */
function letsPlay() {
  welcomeScreen.hidden = true
  playArea.hidden = false
  playArea.style.backgroundImage = "linear-gradient(319deg, rgba(2,0,36,1) 0%, rgba(0,2,4,0.900462962962963) 55%, rgba(231,230,219,1) 100%)"
  table.hidden = false
  footer.hidden = false
  message1.hidden = false
  message2.hidden = false
  init()
}

function init() {
  deck1 = [...deck]
  isWinner = null  
  shuffle()  
  initialRender()
  findHandValue()
  message1.textContent = `Player hand is ${playerTotal}`
} 
function shuffle() {
  for (let i = 0; i = deck1.length; i++) {
    let randIdx = Math.floor(Math.random() * deck1.length)
    randCard = deck1.splice(randIdx, 1)[0]
    shuffledDeck.push(randCard)
  }
} 
function initialRender() {
  playerHand = shuffledDeck.splice(0, 2)
  console.log(playerHand)
  for (let i = 0; i < playerHand.length; i++) {
    playerCard1.classList.remove("outline")
    playerCard1.classList.add(playerHand[0])
    playerCard2.classList.remove("outline")
    playerCard2.classList.add(playerHand[1])
  }
  dealerHand = shuffledDeck.splice(0, 2)
  console.log(dealerHand)
  for (let i = 0; i < playerHand.length; i++) {
    dealerCard1.classList.remove("outline")
    dealerCard1.classList.add("back-red")
    dealerCard2.classList.remove("outline")
    dealerCard2.classList.add(dealerHand[1])
  }
}

function playerPicks() {
  const cardPicked = shuffledDeck.splice(0, 1)
  newCard = cardPicked.join()
  console.log("newCard: ", newCard)
  playerHand.push(newCard)
  findHandValue()
  message1.textContent = `Player hand is ${playerTotal}`
  render()
}
function render() {
  const playerDiv = document.createElement("div")
  playerDiv.classList.add("card", "large", newCard)
  console.log("playDiv: ", playerDiv)
  playerArea.appendChild(playerDiv)
  console.log("playerArea: ", playerArea)
}

function clickStayBtn() {
  // flip over first dealer card
  dealerCard1.classList.remove("back-red")
  dealerCard1.classList.add(dealerHand[0])
  message2.textContent = `The dealer's hand is: ${dealerTotal}`
  findHandValue()
  if(dealerTotal < 17) {
    dealerRender()
  }
  getWinner()
  message2.hidden = false
  message2.textContent=`Dealer hand: ${dealerTotal}`
}
    
function dealerRender() {
  const cardPicked = shuffledDeck.splice(0, 1)
  const dealerDiv = document.createElement("div")
  newDealerCard = cardPicked
  dealerHand.push(newDealerCard)
  newDealerCard = dealerDiv.classList.add("card", "large", newDealerCard) 
  dealerArea.appendChild(dealerDiv)
  findHandValue()
  } 
function findHandValue() {
  playerTotal = 0
  dealerTotal = 0
  for (let i = 0; i < playerHand.length; i++) {
    for (let key in cardValues) {
    }
    playerTotal = playerTotal + cardValues[playerHand[i]]
  }
  for (let i = 0; i < dealerHand.length; i++) {
    for (let key in cardValues) {
    }
    dealerTotal = dealerTotal + cardValues[dealerHand[i]]
  }
  console.log("Dealers's total: ", dealerTotal)
}
function getWinner() {
  console.log("get winner invoked")
  if (playerTotal === 21 && dealerTotal !== 21) {
    console.log("Player wins")
    isWinner = 1
    message1.textContent = "Winner winner chicken dinner! You won"
    return
  } else if(dealerTotal === 21 && playerTotal !== 21) {
    console.log("Dealer wins")
    isWinner = -1
    message1.textContent = "Always bet on the house. Better luck next time"
    return
  } else if (dealerTotal < 17) {
    console.log("more cards for the deal. Dealer total: ", dealerTotal )
    isWinner = null
    dealerRender()
  } else if (dealerTotal > 16 && dealerTotal < 21) {
    console.log("let's compare")
    findHandValue()
    if(playerTotal < 21 && playerTotal > dealerTotal) {
      console.log("Player wins")
      isWinner = 1
    } else if (playerTotal < 21 && playerTotal < dealerTotal) {
      console.log("Dealer wins")
      isWinner = 1
    }
  } else if (dealerTotal > 21 && playerTotal > 21) {
    console.log("both busted")
    isWinner = "T"
    message1.textContent = "BUSTED"
  } else if (dealerTotal > 21) {
    isWinner = 1
    message1.textContent = "It's a bust. You win!"
    console.log("It's a bust. You win!")
  } else if (playerTotal > 21) {
    isWinner = -1
    console.log("Player busted")
    message1.textContent = "It's a bust! The house wins"
  }
    }
function replay() {
  if(isWinner !== null) {
    console.log("play again?")
    hitBtn.hidden = true
    stayBtn.hidden = true
    resetBtn.hidden = false
    init()
      }
}


/** ------------------ Psuedo Code ------------------ */
/** Start game function 
*    1. Upon opening the game, the player should only see h1, h2, and the yes/no buttons
 *     2. Define state variables: deck1 (deck of cards), deck2 (discarded cards), turn, isWinner
 *     3. Define constants: card values => assign values to all cards in deck    
 *     3. Define letsPlay function that includes a handleClick
 *          if player selects yes: 
 *            invoke init() 
 *            hide h1, h2, and yes/no buttons
 *     4. Define init function to initialize game:
 *          - set deck variable to an array containing all cards (suit, number/face)
 *          - unhide all game-related elements
 *          - invoke function to shuffle cards
 *             - include setTimer function to simulate card shuffling with text informing the player that the cards are being shuffles
 *          - invoke render function
 *      5. Define render function:
 *          - removes dotted outline
 *          - places card in player/dealer section
 *          - removes previous card from the deck
 *          - Store card to be removed next iteration
 *            - define variable cardToRemove which should be set equal to the card that was just picked
 *            - write conditional statement:
 *                if > 1, remove cardToRemove
 *      6. Define initalDeal function
 *          - Ensures there are cards in the deck
 *          - Randomly selects number from the remaining cards in the deck
 *          - define variable set to the card that is picked
 *          - push that card to deck2, if discarded
 *        
 * set a variable score
loop through the hand
set a variable number equal to the card value
if number is greater than 10 set equal to 10
add new number to total score
Check for an ace
set a variable for isThereAnAce to false
loop through the deck and check to see if any cards are an ace if there is at least one set isThereAnAce to true
Perform the logic
if isThereAnAce equals true and the current score is less than 12 add 10 to the score   */

