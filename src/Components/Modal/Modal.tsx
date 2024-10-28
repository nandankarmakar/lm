/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { CompanyCode, ISIN, ProductType } from './model';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  content?: CompanyCode[] | ProductType[] | ISIN[];
  onSelect: (value: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, onSelect }) => {
  console.log(content);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white shadow-md sm:rounded-lg z-50 h-9/12 w-8/12 ml-60">
        <div className="flex justify-between items-center w-full h-full p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          {/* SearchBar */}
          <form className="max-w-md mx-auto">
            <label htmlFor="default-search" className=" text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-2 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={`Search ${title}`}
                required
              />
            </div>
          </form>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            X
          </button>
        </div>
        {/* For companyCode */}
        {title === 'CompanyCode' ? (
          <div className="relative overflow-x-auto overflow-y-auto h-96 pl-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-2">
                    companyCode
                  </th>
                  <th scope="col" className="px-2 py-2">
                    companyName
                  </th>
                  <th scope="col" className="px-2 py-2">
                    countryCode
                  </th>
                  <th scope="col" className="px-2 py-2">
                    currency
                  </th>
                </tr>
              </thead>
              <tbody>
                {content?.map((item) => {
                  if ('companyCode' in item) {
                    const company = item as CompanyCode;
                    return (
                      <tr
                        key={Math.random() * 10000}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {company.companyCode}
                        </td>
                        <td className="px-2 py-2">{company.companyName}</td>
                        <td className="px-2 py-2">{company.country}</td>
                        <td className="px-2 py-2">{company.currency}</td>
                        <td>
                          <button
                            className="focus:outline-none text-white text-xs bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-1 py-0.5 me-2 mb-2 dark:focus:ring-yellow-900"
                            onClick={() => onSelect && onSelect(company.companyCode)}
                          >
                            select
                          </button>
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
        ) : null}
        {title === 'Product' ? (
          <div className="relative overflow-x-auto overflow-y-auto h-96 pl-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-2">
                    productType
                  </th>
                  <th scope="col" className="px-2 py-2">
                    productText
                  </th>
                  <th scope="col" className="px-2 py-2">
                    companyCode
                  </th>
                </tr>
              </thead>
              <tbody>
                {content?.map((item) => {
                  if ('productType' in item) {
                    const product = item as ProductType;
                    return (
                      <tr
                        key={Math.random() * 10000}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.productType}
                        </td>
                        <td className="px-2 py-2">{product.productText}</td>
                        <td className="px-2 py-2">{product.companyCode}</td>
                        <td>
                          <button
                            className="focus:outline-none text-white text-xs bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-1 py-0.5 me-2 mb-2 dark:focus:ring-yellow-900"
                            onClick={() => onSelect && onSelect(product.productType)}
                          >
                            select
                          </button>
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
        ) : null}
        {title === 'ISIN' ? (
          <div className="relative overflow-x-auto overflow-y-auto h-96 pl-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-2">
                    secClassId
                  </th>
                  <th scope="col" className="px-2 py-2">
                    productType
                  </th>
                  <th scope="col" className="px-2 py-2">
                    longName
                  </th>
                  <th scope="col" className="px-2 py-2">
                    issuer
                  </th>
                  <th scope="col" className="px-2 py-2">
                    secClassification
                  </th>
                </tr>
              </thead>
              <tbody>
                {content?.map((item) => {
                  if ('secClassId' in item) {
                    const product = item as ISIN;
                    return (
                      <tr
                        key={Math.random() * 10000}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.secClassId}
                        </td>
                        <td className="px-2 py-2">{product.productType}</td>
                        <td className="px-2 py-2">{product.longName}</td>
                        <td className="px-2 py-2">{product.issuer}</td>
                        <td className="px-2 py-2">{product.secClassification}</td>
                        <td>
                          <button
                            className="focus:outline-none text-white text-xs bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-1 py-0.5 me-2 mb-2 dark:focus:ring-yellow-900"
                            onClick={() => onSelect && onSelect(product.secClassId)}
                          >
                            select
                          </button>
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
