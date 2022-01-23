import { useState } from "react";

function FeedbackItem({ item }) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of a feedback item");

  const handleClick = () => {
    setRating(10);

    /*  
    setRating((prev) => {
      return prev + 1;
    }) 
    
    You might want to to call a function this way if you want to access the previous value the component´s state had
    */
  };

  return (
    <div className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </div>
  );
}
export default FeedbackItem;
