/** ----------------- Constants ----------------------- */
deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
/** ----------------- Variables ------------------------*/
let discardPile, turn, isWinner, cardsPicked, cardsToRemove 
let playerHand = []
let dealerHand = []
let deck1 = [...deck]
let shuffledDeck = []


/** ------------- Cached Element References --------- */
let yesBtn = document.querySelector("#yes-button")
let noBtn = document.querySelector("#no-button")
let playArea = document.querySelector("#game-table")
let welcomeScreen = document.querySelector("#opening-screen")
let playerCards = document.querySelectorAll(".player hand > div")
let dealerCards = document.querySelectorAll(".dealer hand > div")
onePlayerCard = document.getElementById("player-card-1")

/** -------------- Event Listeners ------------------ */
yesBtn.addEventListener("click", letsPlay)


/** --------------- Functions ----------------------- */
function letsPlay() {
  welcomeScreen.hidden = true
  playArea.hidden = false
  playArea.style.backgroundColor = "#1A5E4A"
  init()
}

function init() {
  shuffle()    
  initializePlayerHand()
  initializeDealerHand()
  playerRender()
  dealerRender()
}
function shuffle() {
  for (let i = 0; i < deck1.length; i++) {
    shuffledDeck = deck1.splice(Math.random() * deck1.length, 1)
    deck1.push({"faceUp": `${shuffledDeck}`})
  }
  // shuffle deck1
    // Use for loop to iterate over game cards
      // randomly select a card to push into a new array for the length of deck1
      // push shuffled cards into array 
} 

function pickRandCard() {
  let randCard = Math.floor(Math.random() * deck1.length, 1)
  cardsPicked = deck1.splice(randCard, 2)
}
function initializePlayerHand() {
  pickRandCard()
  playerHand.push(cardsPicked)
  console.log(playerHand)
  
}
function initializeDealerHand() {
  pickRandCard()
  dealerHand.push(cardsPicked)
  console.log(dealerHand)
}

function playerRender() {
  console.log("flip these cards")
}

function dealerRender() {
  console.log("flip these cards")
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

