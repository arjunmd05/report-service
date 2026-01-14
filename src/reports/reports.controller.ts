import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('users')
  getUsers() {
    return this.reportsService.getUsersReport();
  }

  @Get('summary')
  getSummary() {
    return this.reportsService.getSummary();
  }
}
