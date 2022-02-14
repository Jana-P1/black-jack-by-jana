/** ----------------- Constants ----------------------- */
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
const player = 1
const dealer = -1

/** ----------------- Variables ------------------------*/
let discardPile, turn, isWinner, initialCardsPicked, cardsToRemove,playerHand, dealerHand  
let shuffledDeck = []
let deck1 = []



/** ------------- Cached Element References --------- */
let yesBtn = document.querySelector("#yes-button")
let noBtn = document.querySelector("#no-button")
let playArea = document.querySelector("body")
let welcomeScreen = document.getElementById("opening-screen")
let hitStayBtns = document.querySelector(".buttons")
let table = document.querySelector("#game-table")
let message = document.querySelector("#message")
let playerContainer = document.querySelector(".player")
let playerCards = document.getElementsByClassName("card large outline player")
let dealerContainer = document.querySelector(".dealer")
let dealerCards = document.getElementsByClassName("card large outline dealer")
let playerCard1 = document.querySelector("#player-card-1")
let playerCard2 = document.querySelector("#player-card-2")



/** -------------- Event Listeners ------------------ */
yesBtn.addEventListener("click", letsPlay)


/** --------------- Functions ----------------------- */
function letsPlay() {
  welcomeScreen.hidden = true
  playArea.hidden = false
  playArea.style.backgroundColor = "#1A5E4A"
  table.hidden = false
  hitStayBtns.hidden = false
  init()
}

function init() {
  deck1 = [...deck]
  playerHand = [null, null, null, null, null]
  dealerHand = [null, null, null, null, null]
  shuffle()    
  initialRender()
} 
function shuffle() {
  for (let i = 0; i = deck1.length; i++) {
    let randIdx = Math.floor(Math.random() * deck1.length)
    randCard = deck1.splice(randIdx, 1)[0]
    shuffledDeck.push(randCard)
}
console.log(shuffledDeck)
} 

function initialRender() {
    let initialCardsPicked = shuffledDeck.splice(shuffledDeck.legnth - 1, 2)[0]
    for (let i = 0; i = playerHand.length; i++) {
      playerHand.unshift(initialCardsPicked)
      playerCard1.classList.remove("outline")
      playerCard1.classList.add(initialCardsPicked)
      playerCard2.classList.remove("outline")
      playerCard2.classList.add(initialCardsPicked)
  }
  console.log(playerHand)
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
 *           */

