import React from "react";

type PolymorphicComponentProps<C extends React.ElementType = "span"> = {
  as: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export const PolymorphicComponent = <C extends React.ElementType = "span">({
  as,
  children,
}: PolymorphicComponentProps<C>) => {
  const Component = as || "span";

  return <Component>{children}</Component>;
};

const App = () => {
  return (
    <div className="flex flex-col gap-2 items-center pt-52 h-screen">
      <PolymorphicComponent></PolymorphicComponent>
    </div>
  );
};

export default App;
