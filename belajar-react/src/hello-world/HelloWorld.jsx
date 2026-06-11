

export function HeaderHelloWorld() {
    return (
        <h1>hello world</h1>
    )
}

export function ParagraphHelloWorld() {
    return (
        <p>Selamat Datang di Hello World</p>
    )
}

function HelloWorld() {
    return <div>
        <HeaderHelloWorld />
        <ParagraphHelloWorld />
    </div>
}

export default HelloWorld;