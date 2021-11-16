import React, { createContext } from "react";

const Context1 = createContext<string>("");
const Context2 = createContext<string>("");
const Context3 = createContext<string>("");
const Context4 = createContext<string>("");
const Context5 = createContext<string>("");

const ProvidersOpt = () => {
  return (
    <Context5.Provider value="Context5">
      <Context4.Provider value="Context4">
        <Context3.Provider value="Context3">
          <Context2.Provider value="Context2">
            <Context1.Provider value="Context1">
              <div>
                {/* <h1>Providers Optimization</h1> */}
                <h1>Providers 优化</h1>
              </div>
            </Context1.Provider>
          </Context2.Provider>
        </Context3.Provider>
      </Context4.Provider>
    </Context5.Provider>
  );
};

const OptProvider = providerOpt(
  Context1.Provider,
  Context2.Provider,
  Context3.Provider,
  Context4.Provider,
  Context5.Provider
);

const ProvidersOpt2 = () => {
  return (
    <OptProvider
      value={["Context1", "Context2", "Context3", "Context4", "Context5"]}
    >
      {/* <h1>Providers Optimization</h1> */}
      <h1>Providers 优化</h1>
    </OptProvider>
  );
};

function providerOpt(...providers: React.Provider<string>[]) {
  return ({ children, value }: { children: JSX.Element; value: string[] }) =>
    providers.reduce(
      (prev, Provider, index) => (
        <Provider value={value[index]}>{prev}</Provider>
      ),
      children
    );
}

export { ProvidersOpt, ProvidersOpt2 };
