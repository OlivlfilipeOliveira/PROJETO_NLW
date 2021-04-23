import { getCustomRepository, Repository } from "typeorm";
import {UsersRepository} from "../repositories/UsersRepository";
import {User} from "../entities/User";

class UsersService{
    private userRepository: Repository<User>;

    constructor(){
        this.userRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string){
        //veririfcar de usuário existe
        //senão existir salvar no banco de dados, se existir só retorna o user
        const userExists = await this.userRepository.findOne({
            email
        })

        if(userExists){
            return userExists;
        }

        const user = this.userRepository.create({
            email
        })

        await this.userRepository.save(user);

        return user;

    }

    async findByEmail(email: string){
        const userExist = await this.userRepository.findOne({email});
        
        return userExist;
    }
}

export{UsersService}