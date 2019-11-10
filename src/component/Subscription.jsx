import React from "react";
import { createSubscription } from "create-subscription";

// Start with a simple component.
function LoadingComponent({ loadingStatus }) {
  if (loadingStatus === undefined) {
    // Loading
  } else if (loadingStatus === null) {
    // Error
  } else {
    // Success
  }
}

// Wrap the function component with a subscriber HOC.
// This HOC will manage subscriptions and pass values to the decorated component.
// It will add and remove subscriptions in an async-safe way when props change.
const PromiseSubscription = createSubscription({
  getCurrentValue: promise => {
    // There is no way to synchronously read a Promise's value,
    // So this method should return undefined.
    return undefined;
  },
  subscribe: (promise, callback) => {
    promise.then(
      // Success
      value => callback(value),
      // Failure
      () => callback(null)
    );

    // There is no way to "unsubscribe" from a Promise.
    // create-subscription will still prevent stale values from rendering.
    return () => {};
  }
});

// Your component can now be used as shown below.
{/* <PromiseSubscription source={loadingPromise}>
  {loadingStatus => <LoadingComponent loadingStatus={loadingStatus} />}
</PromiseSubscription> */}

export default PromiseSubscription;