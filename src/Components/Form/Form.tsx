import React from 'react';
import { DateRangeType } from 'react-tailwindcss-datepicker';
import DatePicker from 'react-tailwindcss-datepicker';
import './Form.css';

const Form: React.FC = () => {
  const [date, setDate] = React.useState<DateRangeType | null>({
    startDate: null,
    endDate: new Date(),
  });
  return (
    <div className="form-conatiner shadow-md sm:rounded-lg">
      <div>
        <form action="" className="max-w-sm mx-auto">
          {/* Company Code  */}
          <div className="text-start ml-2 mr-2 pr-2 pl-2 pt-4 mb-0">
            <label htmlFor="company_code" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
              Company Code
            </label>
            <select
              id="company_code"
              className="bg-white-50 text-gray-400 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a company code</option>
              <option value="BR">Barclays</option>
              <option value="DB">Deutsche Boerse</option>
            </select>
          </div>
          {/* Product */}
          <div className="text-start ml-2 mr-2 p-2">
            <label htmlFor="product" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
              Product
            </label>
            <select
              id="product"
              className="bg-white-50 text-gray-400 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a Product</option>
              <option value="US">Barclays</option>
              <option value="CA">Deutsche Boerse</option>
            </select>
          </div>
          {/* ISIN */}
          <div className="text-start ml-2 mr-2 p-2">
            <label htmlFor="ISIN" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
              ISIN
            </label>
            <select
              id="ISIN"
              className="bg-white-50  text-gray-400 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose an ISIN</option>
              <option value="US">1234567</option>
              <option value="CA">1234567</option>
            </select>
          </div>
          {/* Collater Basket */}

          <div className="text-start ml-2 mr-2 p-2">
            <label htmlFor="collateral_basket" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
              Collateral Basket
            </label>
            <select
              id="collateral_basket"
              className="bg-white-50  text-gray-400 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose an collateral basket</option>
              <option value="US">1234567</option>
              <option value="CA">1234567</option>
            </select>
          </div>
          {/* Counterparties */}

          <div className="text-start ml-2 mr-2 p-2">
            <label htmlFor="counterparties" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
              Counterparty
            </label>
            <select
              id="counterparties"
              className="bg-white-50 text-gray-400 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a counterparty</option>
              <option value="US">BARC/LDN</option>
              <option value="CA">DB/FFM</option>
            </select>
          </div>

          {/* Amount */}
          <div className="text-start ml-2 mr-2 p-2">
            <label htmlFor="payment_amount" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
              Payment Amount
            </label>
            <input
              type="text"
              id="payment_amount"
              className="bg-white-50  text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Amount"
              required
            />
          </div>
          {/* Date */}
          <div className="text-start ml-2 mr-2 p-2">
            <label htmlFor="payment_amount" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
              Start and End Date
            </label>
            <div className="datepicker">
              <DatePicker value={date} onChange={(newValue) => setDate(newValue)} showShortcuts={true} />
            </div>
          </div>

          {/* Submit button */}

          <div className="flex justify-center">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              type="button"
              className="focus:outline-none text-white text-xs bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-0.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              favourites
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
