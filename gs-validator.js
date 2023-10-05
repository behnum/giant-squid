async function verifyFinalScore(finalScore, name) {
  const url = "https://foo-bar-baz/api/squid-game"; // !TODO Update url

  const body = {
    answer: finalScore,
    name: name,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const fetch = await import("node-fetch");
    const response = await fetch.default(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Replace 'yourFinalScore' and 'yourName' with the actual final score and your name.
const yourFinalScore = 5685;
const yourName = "Your name!";

verifyFinalScore(yourFinalScore, yourName);
