import { Test, TestingModule } from '@nestjs/testing';
import { PlayrsController } from './playrs.controller';

describe('PlayrsController', () => {
  let controller: PlayrsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayrsController],
    }).compile();

    controller = module.get<PlayrsController>(PlayrsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
