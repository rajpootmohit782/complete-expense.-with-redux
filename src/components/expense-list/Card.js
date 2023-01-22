import "./card.css";
import moment from "moment";
import { deleteExpense } from "../../redux/actions/expenses";
import { useDispatch } from "react-redux";
const Card = ({ item }) => {
  console.log(item);
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDelet = () => {
    dispatch(deleteExpense(item));
  };

  return (
    <div className="card">
      <div className="card-image-container"></div>
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">₹{item.amount}</label>
        </div>
        <div className="delet-icon" onClick={() => handleDelet()}>
          <i class="fi fi-sr-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
