import {http} from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log("Server is running on port 3333"))






/**
 * Pk primary key
 * FK foreign key
 * N pode ser nulo
 */

/**
 * GET = buscas
 * POST = Criação
 * PUT = Alteração
 * PATCH = Alterar uma informação especifica
 */

// app.get("/", (request, response) => {
//     return response.json({
//         menssege: "Olá, mundo!"
//     })
// })

// app.post("/users", (request, response) => {
//     return response.json({menssege: "usuário salvo com sucesso"})
// })
