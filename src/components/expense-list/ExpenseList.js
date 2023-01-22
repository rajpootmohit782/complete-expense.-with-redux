import "./expenselist.css";
import Card from "./Card";
import { useSelector } from "react-redux";
const ExpenseList = () => {
  // const list = [
  //   {
  //     title: "made in india",
  //     amount: "200",
  //     des: "kuch new",
  //     createdAt: Date.now()
  //   },
  //   {
  //     title: "made in india",
  //     amount: "200",
  //     des: "kuch new",
  //     createdAt: Date.now()
  //   }
  // ];

  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filterList = list.filter((item) => item.title.includes(query));
  console.log(list);
  return (
    <div className="expense-list">
      {filterList.length ? (
        filterList.map((item) => <Card item={item} />)
      ) : (
        <div className="empty-state">
          <img
            src={require("../../photos/empty.png").default}
            alt="Empty list"
            className="empty-image"
          />
          <label>Uh Oh! Your expense list is empty</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
