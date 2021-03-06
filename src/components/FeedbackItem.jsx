import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  /*  
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of a feedback item");

  const handleClick = () => {
    setRating(10);

    
    setRating((prev) => {
      return prev + 1;
    }) 
    
    You might want to to call a function this way if you want to access the previous value the component´s state had
    */
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
