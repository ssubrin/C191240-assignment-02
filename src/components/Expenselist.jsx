

const ExpenseList = () => {
    return (
        <div>
        <h2 className="border-b pb-2 font-medium text-red-600">Expense</h2>

       

        <ul id="expense-list" className="divide-y">
          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Groceries 1</span>
              <div>
                <span className="text-red-600">-2,500.00</span>
                <button id="myBtn"
                  className="delete-button ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
              </button>
              </div>
            </div>
          </li>


    
        </ul>
      </div>
    );
};

export default ExpenseList;