import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Root')
@Controller('')
export class RootController {
  @ApiOperation({
    summary: 'Root Endpoint',
    description: 'Returned default text',
  })
  @Get()
  public root(): string {
    return 'Kangjae Choi Blog - API';
  }
}
