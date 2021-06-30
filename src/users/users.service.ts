import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import{EntityNotFoundError, Repository} from "typeorm"
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}
  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto)
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(+id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateResult = await this.userRepository.update(id, updateUserDto)
    if(!updateResult.affected){
      throw new EntityNotFoundError(User,id)
    }
    return this.userRepository.findOne(id)
  }

  async remove(id: number) {
    const deleteResult = await this.userRepository.delete(id)
    if(!deleteResult.affected){
      throw new EntityNotFoundError(User,id)
    }
  }
}
