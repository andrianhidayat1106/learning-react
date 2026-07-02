
export default function EventHandler() {
    return <>
        <EventButton name="rizky" sayHello={() => alert("Hello")}></EventButton>
    </>
}

function EventButton({ name, sayHello }) {
    return <>
        <button onClick={sayHello} >{name}</button>
    </>
}