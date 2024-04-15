import { Controller, Get } from '@nestjs/common';

@Controller('')
export class RootController {
  @Get()
  async root() {
    return 'Kangjae Choi Blog - API';
  }
}
