/** ----------------- Constants ----------------------- */


/** ----------------- Variables ------------------------*/
let deck, discardPile, turn, isWinner 

/** ------------- Cached Element References --------- */
let yesBtn = document.querySelector("#yes-button")
let noBtn = document.querySelector("#no-button")
let playArea = document.querySelector("#game-table")
let welcomeScreen = document.querySelector(#opening-screen)


/** -------------- Event Listeners ------------------ */
yesBtn.addEventListener("click", letsPlay)


/** --------------- Functions ----------------------- */
function letsPlay() {
  console.log("Yes is clicked")
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
 *          - set deck variable to an array containing all cards (suit,           number/face)
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

