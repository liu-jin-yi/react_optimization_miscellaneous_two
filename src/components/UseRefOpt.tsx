import React, { useState, ChangeEvent, useEffect, useRef } from "react";

// 保存 之前输入的inputValue
// Save the previously entered inputValue
let pervValue: string = "";
const UseRefOpt = () => {
  const [inputValue, setInputValue] = useState<string>("hello");
  const handelInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((oldValue: string) => {
      pervValue = oldValue;
      return e.target.value;
    });
  };
  useEffect(() => {
    console.log("🚀 inputValue:", inputValue, "🚀 pervValue:", pervValue);
  }, [inputValue]);
  return (
    <div>
      {/* <h1>UseRef multifunctional use</h1> */}
      <h1>UseRef 多种情况使用</h1>
      <input type="text" value={inputValue} onChange={handelInputChange} />
    </div>
  );
};

const UseRefOpt2 = () => {
  const [inputValue, setInputValue] = useState<string>("hello");
  const pervValueRef = useRef<string>("");
  const handelInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((oldValue: string) => {
      pervValueRef.current = oldValue;
      return e.target.value;
    });
  };
  useEffect(() => {
    console.log("🚀 inputValue:", inputValue, "🚀 pervValueRef:", pervValueRef);
  }, [inputValue, pervValueRef]);
  return (
    <div>
      {/* <h1>UseRef multifunctional use</h1> */}
      <h1>UseRef 多种情况使用</h1>
      <input type="text" value={inputValue} onChange={handelInputChange} />
    </div>
  );
};

export { UseRefOpt, UseRefOpt2 };
