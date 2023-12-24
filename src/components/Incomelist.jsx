

const IncomeList = () => {
    return (
        <div>
        <h2 className="border-b pb-2 font-medium text-green-600">Income</h2>

      

        <ul id="income-list" className="divide-y">
          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Website project</span>

              <div>
                <span className="text-green-600">+11,999.99</span>
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

export default IncomeList;