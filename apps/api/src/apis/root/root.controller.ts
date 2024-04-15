import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Root')
@Controller('')
export class RootController {
  @ApiOperation({
    summary: 'Root Test Endpoint',
    description: 'Returned default text',
  })
  @Get()
  async root() {
    return 'Kangjae Choi Blog - API';
  }
}
