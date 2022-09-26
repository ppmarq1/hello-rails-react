import React from "react";
import { useSelector} from "react-redux";

const Greeting = () => {
    const greetings = useSelector((state) => state.greetingReducer);
    console.log(greetings);

    return(
        <div>
            {greetings.map((messag) => (
                <div key={messag.id}>
                    <h1>{messag.greeting}</h1>
                </div>
            ))}
        </div>

    );
}
export default Greeting;