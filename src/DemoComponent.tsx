import { useRef } from "react";

const DemoComponent = () => {
    // const demoRef = useRef<HTMLInputElement>(null);

    const deleteRecordCardHandler = async () => {
        const requestBody = {
            id: "-N8_Lug0znTe4QeefeT8"
        }
        const id = "-NApa2z-WOaDKbrUEdv1"
        try {
            const response = await fetch(`https://http-record-cards-default-rtdb.europe-west1.firebasedatabase.app/record-cards/${id}.json`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
            })
            if (!response.ok) {
                console.log(response)
                throw new Error("something went wrong");
            }
        } catch(err) {
            console.log(err)
        }

    }

    return (
        <div>
            <button onClick={deleteRecordCardHandler}>Click me!</button>
        </div>
    );
};

export default DemoComponent;