import React, { useEffect, useState } from "react";

type QuoteProps = {
  clicked: boolean;
};

const Quote = ({ clicked }: QuoteProps) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote">
      {!clicked && (
        <>
          <div>
            <p className="quote__text">{quote}</p>
            <p className="quote__author">{author}</p>
          </div>
          <button
            className="quote__refresh"
            type="button"
            aria-label="Get new quote"
            onClick={() => fetchQuote()}
          ></button>
        </>
      )}
    </div>
  );
};

export default Quote;
