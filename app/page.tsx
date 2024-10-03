"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [display, setDisplay] = useState<string>("0");
  const [operation, setOperation] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<string | null>(null);

  const handleNumberClick = (number: string) => {
    setDisplay(display === "0" ? number : display + number);
  };

  const handleOperationClick = (op: string) => {
    setOperation(op);
    setPreviousValue(display);
    setDisplay("0");
  };

  const handleEqualsClick = () => {
    const current = parseFloat(display);
    const previous = parseFloat(previousValue || "0");
    let result;

    switch (operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "×":
        result = previous * current;
        break;
      case "÷":
        result = previous / current;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setOperation(null);
    setPreviousValue(null);
  };

  const handleClearClick = () => {
    setDisplay("0");
    setOperation(null);
    setPreviousValue(null);
  };

  const buttonStyle = "w-16 h-16 rounded-full text-2xl font-semibold";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-black p-4 rounded-3xl shadow-xl">
        <div className="text-right text-6xl font-light mb-4 h-24 flex items-end justify-end">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-3">
          <Button
            onClick={handleClearClick}
            className={`${buttonStyle} bg-gray-400 text-black hover:bg-gray-300`}
          >
            AC
          </Button>
          <Button
            onClick={() => handleOperationClick("±")}
            className={`${buttonStyle} bg-gray-400 text-black hover:bg-gray-300`}
          >
            ±
          </Button>
          <Button
            onClick={() => handleOperationClick("%")}
            className={`${buttonStyle} bg-gray-400 text-black hover:bg-gray-300`}
          >
            %
          </Button>
          <Button
            onClick={() => handleOperationClick("÷")}
            className={`${buttonStyle} bg-orange-500 hover:bg-orange-400`}
          >
            ÷
          </Button>
          <Button
            onClick={() => handleNumberClick("7")}
            className={`${buttonStyle} bg-gray-700 hover:bg-gray-600`}
          >
            7
          </Button>
          <Button
            onClick={() => handleNumberClick("8")}
            className={`${buttonStyle} bg-gray-700 hover:bg-gray-600`}
          >
            8
          </Button>
          <Button
            onClick={() => handleNumberClick("9")}
            className={`${buttonStyle} bg-gray-700 hover:bg-gray-600`}
          >
            9
          </Button>
          <Button
            onClick={() => handleOperationClick("×")}
            className={`${buttonStyle} bg-orange-500 hover:bg-orange-400`}
          >
            ×
          </Button>
          <Button
            onClick={() => handleNumberClick("4")}
            className={`${buttonStyle} bg-gray-700 hover:bg-gray-600`}
          >
            4
          </Button>
          <Button
            onClick={() => handleNumberClick("5")}
            className={`${buttonStyle} bg-gray-700 hover:bg-gray-600`}
          >
            5
          </Button>
          <Button
            onClick={() => handleNumberClick("6")}
            className={`${buttonStyle} bg-gray-700 hover:bg-gray-600`}
          >
            6
          </Button>
          <Button
            onClick={() => handleOperationClick("-")}
            className={`${buttonStyle} bg-orange-500 hover:bg-orange-400`}
          >
            -
          </Button>
          <Button
            onClick={() => handleNumberClick("1")}
            className={`${buttonStyle} bg-gray-700 hover:bg-gray-600`}
          >
            1
          </Button>
          <Button
            onClick={() => handleNumberClick("2")}
            className={`${buttonStyle} bg-gray-700 hover:bg-gray-600`}
          >
            2
          </Button>
          <Button
            onClick={() => handleNumberClick("3")}
            className={`${buttonStyle} bg-gray-700 hover:bg-gray-600`}
          >
            3
          </Button>
          <Button
            onClick={() => handleOperationClick("+")}
            className={`${buttonStyle} bg-orange-500 hover:bg-orange-400`}
          >
            +
          </Button>
          <Button
            onClick={() => handleNumberClick("0")}
            className={`${buttonStyle} col-span-2 w-36 px-6 justify-start bg-gray-700 hover:bg-gray-600`}
          >
            0
          </Button>
          <Button
            onClick={() => handleNumberClick(".")}
            className={`${buttonStyle} bg-gray-700 hover:bg-gray-600`}
          >
            .
          </Button>
          <Button
            onClick={handleEqualsClick}
            className={`${buttonStyle} bg-orange-500 hover:bg-orange-400`}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
}
