import React, { useEffect, useState } from "react";

const Quote = () => {
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
    <div className="flex justify-between bg-grey px-[26px] py-8">
      <div>
        <p className="pr-4 text-xs text-white">{quote}</p>
        <p className="mt-2 text-xs font-bold text-white">{author}</p>
      </div>
      <button
        className="bg-refresh bg-no-repeat p-3"
        type="button"
        aria-label="Get new quote"
        onClick={() => fetchQuote()}
      ></button>
    </div>
  );
};

export default Quote;
