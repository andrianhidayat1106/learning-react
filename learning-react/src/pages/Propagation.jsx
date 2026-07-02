

export default function Propagation({ handleOnClick }) {
    return <div>
        <div onClick={handleOnClick}>
            <button onClick={handleOnClick}>One</button>
            <button onClick={handleOnClick}>Two</button>
        </div>


        <form >
            <input type="text" />
            <button onClick={(e) => {

                e.preventDefault();
                handleOnClick(e)
            }}>Kirim</button>
        </form>
    </div >
}

