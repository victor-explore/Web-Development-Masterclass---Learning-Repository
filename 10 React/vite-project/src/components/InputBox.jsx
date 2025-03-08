import React from "react";

/**
 * InputBox component for currency conversion
 * Displays an input field for amount and a dropdown for currency selection
 * @param {Object} props - Component props
 */
const InputBox = ({
  label,
  icon,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], // Available currency options for dropdown
  selectCurrency = "usd", // Default selected currency
  amountDisable = false, // Flag to disable amount input
  currencyDisable = false, // Flag to disable currency selection
  className = "", // Additional CSS classes
}) => {
  return (
    <div
      className={`bg-white p-5 rounded-2xl text-sm flex shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      {/* Amount input section */}
      <div className="w-1/2 pr-4">
        <label className="text-black/70 mb-2 font-medium inline-block">
          {label}
        </label>
        <div className="relative mt-2">
          {icon && (
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              {icon}
            </span>
          )}{" "}
          {/* Display icon if provided */}
          <input
            type="number"
            className="outline-none w-full bg-transparent py-2 px-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-black" // Added text-black for visibility
            placeholder="Enter amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            } // Call onAmountChange if provided
          />
        </div>
      </div>

      {/* Currency selection section */}
      <div className="w-1/2 flex flex-col items-end">
        <p className="text-black/70 mb-2 font-medium">Currency</p>
        <select
          className="rounded-lg px-4 py-2 bg-blue-50 cursor-pointer outline-none border border-blue-100 w-32 text-center hover:bg-blue-100 transition-colors focus:ring-2 focus:ring-blue-300 text-black" // Added text-black for visibility
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // Call onCurrencyChange if provided
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="text-black">
              {currency}
            </option> // Generate options from currencyOptions array
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
