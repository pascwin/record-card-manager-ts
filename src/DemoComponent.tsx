import { useRef } from "react";

const DemoComponent = () => {
    const demoRef = useRef<HTMLInputElement>(null);

    const showDemoRefHandler = () => {
        console.log(demoRef.current?.value)
        if (demoRef.current) {
            demoRef.current.value = ''
        }
    }

    return (
        <div>
            <input name="Answer" ref={demoRef} />
            <button onClick={showDemoRefHandler}>Click me!</button>
        </div>
    );
};

export default DemoComponent;