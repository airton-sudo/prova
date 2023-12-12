import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
export const revalidate =0

export default async function ListPrinter() {
    async function deletePrinter(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from printer where id=${id}`
        revalidatePath("/admin/printer/new")
    }
    const { rows } = await sql`SELECT * from printer`;
    return (
        <div>
            <h1 className="text-center text-black">Lista de impressoras</h1>

            <table>
                <thead>
                    <tr> <td>Marca da impressora</td> <td>Modelo da impressora</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((printer) => {
                            return (
                                <tr key={printer.id}><td>{printer.brand}</td> <td>{printer.model}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={printer.id}/>   
                                    <button formAction={deletePrinter}>Excluir</button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}