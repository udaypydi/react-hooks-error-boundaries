import React, { useState } from "react";
import { useErrorBoundary } from "react-use-error-boundary";

const ThrowError = () => {
  throw new Error("Bombs away 💣");
};

function TestErrorComponent() {
  const [shouldThrow, setShouldThrow] = useState(false);

  const [error, resetError] = useErrorBoundary(
    // You can optionally log the error to an error reporting service
    (error, errorInfo) => {
      console.log(errorInfo, error);
    }
  );

  if (error) {
    return (
      <div>
        <p>Error triggered</p>
        <button onClick={resetError}>Try again</button>
      </div>
    );
  }

  if (shouldThrow) {
    return <ThrowError />;
  }
  return (
    <div>
      <p>Demo Component</p>
      {shouldThrow && <ThrowError />}
      <button
        onClick={() => {
          setShouldThrow(true);
        }}
      >
        Trigger Error
      </button>
    </div>
  );
}

export default TestErrorComponent;
