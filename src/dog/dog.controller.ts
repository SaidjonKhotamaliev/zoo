import { Controller, Get, Param, Query } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public introduce(@Param() param: any, @Query() query: any): string {
    console.log('params', param);
    console.log('query', query);
    return this.dogService.introduce();
  }
}
