import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalsRepository: Repository<Animal>,
  ) {}

  async create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const animal = this.animalsRepository.create(createAnimalDto);
    return this.animalsRepository.save(animal);
  }

  async findAll(): Promise<Animal[]> {
    return this.animalsRepository.find();
  }

  async findOne(id: number): Promise<Animal> {
    const animal = await this.animalsRepository.findOneBy({ id });

    if (!animal) {
      throw new NotFoundException(`Animal con id ${id} no encontrado`);
    }

    return animal;
  }

  async update(
    id: number,
    updateAnimalDto: UpdateAnimalDto,
  ): Promise<Animal> {
    const animal = await this.findOne(id);

    Object.assign(animal, updateAnimalDto);

    return this.animalsRepository.save(animal);
  }

  async remove(id: number): Promise<void> {
    const animal = await this.findOne(id);

    await this.animalsRepository.remove(animal);
  }
}