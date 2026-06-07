const Header = () => {
    return (
        <header>
            <h1>Dashboard Sistem</h1>
            <hr/>
        </header>
    );
}

const StatusServer =  ()=> {
    const namaServer = "Odoo Utama";
    const status = "Online";

    return (
        <div>
            <h3>{namaServer}</h3>
            {'/*   */'}
            <p>Status : {status}</p>
        </div>
    );
}

const App= ()=>{
    return (
        <>
        <Header>
            <main>
                <h2>Monitoring Server</h2>
                <div>
                    <StatusServer />
                    <StatusServer/>
                </div>
            </main>
        </Header>
        </>
    );
}

export default App;