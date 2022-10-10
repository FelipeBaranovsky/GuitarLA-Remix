export async function getNosotros() {
    const respuesta = await fetch(`${process.env.production.API_URL}/nosotro?populate=imagen`)
    const resultado = await respuesta.json()
    return resultado
}