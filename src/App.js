import React, { useState } from "react";
import "./styles.css";

var foodEmojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangarine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍑": "Peach",
  "🍐": "Pear",
  "🍒": "Cherries",
  "🍅": "Tomato",
  "🥝": "Kiwi",
  "🍓": "Strawberry",
  "🥥": "Coconut",
  "🥑": "Avocado",

  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Corn",
  "🌶️": "Hot Pepper",
  "🥒": "Cucumber",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chesnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese",
  "🍖": "Meat on Bone",
  "🍗": "Leg Piece",
  "🥩": "Barbeque",
  "🥓": "Bacon",

  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥚": "Egg",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🧂": "Salt",
  "🍙": "Rice Ball",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🦪": "Oyester",

  "🍦": "Ice Cream",
  "🍩": "Donut",
  "🍪": "Cookie",
  "🎂": "Cake",
  "🍰": "Pastry",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "🍯": "Honey",
  "🥛": "Milk",
  "🍸": "Cocktail",
  "☕": "Tea",
  "🍷": "Wine",
  "🍺": "Beer"
};

var emojisInDictionary = Object.keys(foodEmojiDictionary);

export default function App() {
  var [foodEmoji, setFoodEmoji] = useState("Enter Some Food Emoji");

  function emojiInputHandler(event) {
    var userEmoji = event.target.value;
    var foodName = foodEmojiDictionary[userEmoji];

    if (foodName === undefined) {
      foodName = "We don't have this in our database!";
    }

    setFoodEmoji(foodName);
  }

  function emojiClickHandler(emoji) {
    var foodName = foodEmojiDictionary[emoji];
    setFoodEmoji(foodName);
  }

  return (
    <div className="App">
      <h1>Give Me Some Food...🍱</h1>
      <p className="info-text">Enter Food Emoji Here 👇</p>
      <input onChange={emojiInputHandler} />
      <h3>Food Name: {foodEmoji}</h3>
      <h2>Try clicking these emojis</h2>

      <div className="emoji">
        {emojisInDictionary.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
              style={{ fontSize: "35px", margin: "5px", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <div className="footer">
        Enter any food emoji and this app will tell you what food item it is!
      </div>
    </div>
  );
}
