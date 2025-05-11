import React, { useState } from "react";

const categories = [
  "Things She Says",
  "Things She Loves",
  "Before She Was Mom",
  "Facts About Mom",
  "Mom Logic",
];

const clues = {
  "Things She Says": [
    { value: 100, clue: "This word means you better figure it out and try harder.", answer: "What is gumption?" },
    { value: 200, clue: "When she wants to stroll through plants and gift shops, she asks this.", answer: "What is 'Want to go to SunRiver Gardens?'" },
    { value: 300, clue: "Dinner’s early, so don’t be late!", answer: "What is 'Dinner is at 3:30'?" },
    { value: 400, clue: "She’s headed out for Asian food with Dad.", answer: "What is 'I’m going with Dad to Mama Chu’s'?" },
    { value: 500, clue: "She’s generous — and willing to cover your cravings.", answer: "What is 'You can order something from my DoorDash'?" },
  ],
  "Things She Loves": [
    { value: 100, clue: "Her all-time favorite fizzy drink.", answer: "What is Diet Coke?" },
    { value: 200, clue: "A delicious almond-based treat she adores.", answer: "What is marzipan?" },
    { value: 300, clue: "This game has her crushing it on her phone.", answer: "What is Candy Crush?" },
    { value: 400, clue: "Her go-to pie when it’s time to splurge.", answer: "What is coconut cream pie?" },
    { value: 500, clue: "Her favorite food.", answer: "What is ______?" },
  ],
  "Before She Was Mom": [
    { value: 100, clue: "The high school where it all began.", answer: "What is Woods Cross High?" },
    { value: 200, clue: "He made a splash saving her in college.", answer: "Who is Dad?" },
    { value: 300, clue: "He saw her walking while she was out… just not with him.", answer: "What is 'on other dates'?" },
    { value: 400, clue: "A fruity nickname from her youth.", answer: "What is Janna Banana?" },
    { value: 500, clue: "The place she waitressed as a teen.", answer: "What is Yankee Lunch?" },
  ],
  "Facts About Mom": [
    { value: 100, clue: "Who passed down her famous cookie recipe?", answer: "Who is Angela Stone?" },
    { value: 200, clue: "The first baby name she and Dad ever agreed on.", answer: "What is Bradley?" },
    { value: 300, clue: "Her age when she tied the knot.", answer: "What is 24 years old?" },
    { value: 400, clue: "The only shoes she’ll wear all day, every day.", answer: "What are Crocs?" },
    { value: 500, clue: "Her chill playlist for game nights.", answer: "What is Mellow 70’s Gold?" },
  ],
  "Mom Logic": [
    { value: 100, clue: "Don’t touch this car button — it’s dangerous!", answer: "What is 'It will only recirculate CO2'?" },
    { value: 200, clue: "Before shopping at Dillard’s, you better do this.", answer: "What is dress nicely?" },
    { value: 300, clue: "Don’t like how the game’s going? Do this.", answer: "What is change the rules?" },
    { value: 400, clue: "No bathroom is complete without one of these.", answer: "What is a basket?" },
    { value: 500, clue: "A drive is considered far if it’s further than this grocery store.", answer: "What is Smith’s?" },
  ],
};

function App() {
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Jeopardy: All About Mom</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        {categories.map((cat) => (
          <div key={cat} style={{ backgroundColor: '#007BFF', color: 'white', padding: '10px', textAlign: 'center' }}>{cat}</div>
        ))}
        {categories.map((cat) =>
          clues[cat].map((q) => (
            <button key={cat + q.value} style={{ height: '60px', fontSize: '20px' }} onClick={() => { setSelected(q); setShowAnswer(false); }}>
              ${q.value}
            </button>
          ))
        )}
      </div>
      {selected && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#FFF3CD', border: '1px solid #FFEEBA' }}>
          <p><strong>Clue:</strong></p>
          <p>{selected.clue}</p>
          {showAnswer ? (
            <>
              <p><strong>Answer:</strong></p>
              <p>{selected.answer}</p>
              <button onClick={() => setSelected(null)}>Close</button>
            </>
          ) : (
            <button onClick={() => setShowAnswer(true)}>Show Answer</button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
