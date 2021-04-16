import React from 'react';

export function withGreeting<P>(WrappedComponent: React.ComponentType<P & GreetingProp>) {

    const NewComponent = (props: P) => <WrappedComponent message="Hello from" {...props} />

    return NewComponent;
}