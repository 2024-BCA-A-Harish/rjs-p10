const { useState } = React;

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>You clicked the button {count} of times</h2>
            <button onClick={() => setCount(count + 1)}>
                Click ME!!!
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <Counter />
);
