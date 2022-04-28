import './Quote.css';

const Quote = () => {
  const quote = '"A mathematician is a person who can find analogies between theorems; a better mathematician is one who can see analogies between proofs and the best mathematician can notice analogies between theories."';
  const author = '— Stefan Banach';

  return (
    <div className="quotes">
      <p>{quote}</p>
      <span>{author}</span>
    </div>
  );
};

export default Quote;
