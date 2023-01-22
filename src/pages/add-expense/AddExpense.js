import Addform from "../../components/addform/Addform";
import Topfold from "../../components/topfold/Topfold";
import "./addexpense.css";

const AddExpense = () => {
  return (
    <div className="addexpense">
      <Topfold />
      <Addform />
    </div>
  );
};

export default AddExpense;
