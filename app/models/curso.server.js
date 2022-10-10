export async function getCurso() {
    const respuesta = await fetch(`${process.env.production.API_URL}/curso?populate=imagen`)
    const resultado = await respuesta.json()
    return resultado
}