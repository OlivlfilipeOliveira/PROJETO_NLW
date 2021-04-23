import { Router} from "express"
import { MessagesController } from "./controllers/MessageController";
import { SettingsController } from "./controllers/SettingsContoller";
import { UsersController } from "./controllers/UserController";
const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();
// / */
//  * tipos de parametros
//  * routes params = > Parametros de rotas
//  * query params => filtros e buscas
//  * body params => {
//  *  //repasse de objetoss
//  * }
//  */
routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export {routes}

//