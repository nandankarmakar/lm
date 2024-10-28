/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { DateRangeType } from 'react-tailwindcss-datepicker';
import DatePicker from 'react-tailwindcss-datepicker';
import './Form.css';
import Modal from '../Modal/Modal';
import { CompanyCode, ISIN, ProductType } from '../Modal/model';

const Form: React.FC = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [title, setTitle] = useState('');
  const [modalContent, setModalContent] = useState<CompanyCode[] | ProductType[] | ISIN[]>([]);

  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({
    companyCode: '',
    product: '',
    isin: '',
    collateralBasket: '',
  });

  const [activeInput, setActiveInput] = useState<string>('');

  const [date, setDate] = React.useState<DateRangeType | null>({
    startDate: null,
    endDate: new Date(),
  });

  const companyDetail: CompanyCode[] = [
    {
      companyName: 'ABC',
      companyCode: 'CDE',
      country: 'INDIA',
      currency: 'INR',
    },
  ];

  const productDetail: ProductType[] = [
    {
      productType: 'GFG',
      productText: 'GFG',
      companyCode: 'DE',
    },
  ];

  const isinDetail: ISIN[] = [
    {
      secClassId: '1234',
      productType: 'GFG',
      longName: 'GFG',
      issuer: 'GFG',
      secClassification: 'GFG',
    },
  ];

  const [companyDetails, setCompanyDetails] = useState<CompanyCode[]>(companyDetail);
  const [productDetails, setProductDetails] = useState<ProductType[]>(productDetail);
  const [isinDetails, setIsinDetails] = useState<ISIN[]>(isinDetail);

  const shouldOpenModal = (content: CompanyCode[] | ProductType[] | ISIN[], title: string, inputName: string): void => {
    setTitle(title);
    setModalContent(content);
    setActiveInput(inputName);
    setOpenModal(true);
  };

  const handleModalClosed = (): void => {
    setTitle('');
    setModalContent([]);
    setOpenModal(false);
  };

  const handleValueSelect = (value: string): void => {
    setInputValues((prev) => ({ ...prev, [activeInput]: value }));
    setOpenModal(false);
  };

  return (
    <div className="form-conatiner shadow-md sm:rounded-lg">
      <div>
        <form action="" className="max-w-sm mx-auto">
          {/* Company Code  */}
          <div className="text-start ml-2 mr-2 pr-2 pl-2 pt-4 mb-0">
            <label htmlFor="company_code" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
              Company Code
            </label>
            <input
              placeholder="Company Code"
              type="text"
              id="company_code"
              value={inputValues.companyCode}
              className="bg-white-50 text-gray-400 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onClick={() => shouldOpenModal(companyDetails, 'CompanyCode', 'companyCode')}
            />
          </div>
          {/* Product */}
          <div className="text-start ml-2 mr-2 p-2">
            <label htmlFor="product" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
              Product
            </label>
            <input
              placeholder="Product Code"
              type="text"
              id="product"
              value={inputValues.product}
              className="bg-white-50 text-gray-400 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onClick={() => shouldOpenModal(productDetails, 'Product', 'product')}
            />
          </div>
          {/* ISIN */}
          <div className="text-start ml-2 mr-2 p-2">
            <label htmlFor="product" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">
              ISIN
            </label>
            <input
              placeholder="ISIN"
              type="text"
              id="isin"
              value={inputValues.isin}
              className="bg-white-50 text-gray-400 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onClick={() => shouldOpenModal(isinDetails, 'ISIN', 'isin')}
            />
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
              <option selected>Choose a collateral basket</option>
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
              disabled
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
        {/* Modal */}
        <Modal
          isOpen={openModal}
          onClose={handleModalClosed}
          title={title}
          content={modalContent}
          onSelect={handleValueSelect}
        />
      </div>
    </div>
  );
};

export default Form;
