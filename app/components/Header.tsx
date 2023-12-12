export default function Header() {
    return (
        <header className="text-center text-black py-8 border-b border-[#4d4d4d] md:flex itens-center justify-between">
            <h4>Admin</h4>
            <nav>
                <a className="hover:text-[#00e77f]" href="/admin/printer">
                    Listar impressora&nbsp;
                </a>
                <br />
                <a className="hover:text-[#00e77f]" href="/admin/printer/new">
                    Cadastrar &nbsp;
                </a>
            </nav>
        </header>
    )
}
