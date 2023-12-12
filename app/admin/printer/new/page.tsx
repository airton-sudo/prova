import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";


export const revalidate = 0

export default function NewPrinter(){ 
  


  async function savePrinter(formData: FormData){
    "use server"
    const brand = formData.get("brand") as string;
    const model = formData.get("model") as string;
    console.log("brand, model")

    await sql`INSERT INTO printer (brand, model) VALUES(${brand}, ${model})`
    console.log("Acessou função")


  }
  return (
    <div>
      <h1 className="text-black text-center text-4xl">Cadastrar Impressora</h1>
      <form>
        <input type="text" name="brand" placeholder="Marca da impressora" /><br /><br />
        <input type="text" name="model" placeholder="Modelo da impressora" /> <br /><br />
        <button formAction={savePrinter} className="text-black">Salvar</button>
        <br />
      </form>
    </div>

  )
}