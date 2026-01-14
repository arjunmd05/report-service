import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  getUsersReport() {
    return [{ id: 1, name: 'Mock User', email: 'mock@test.com' }];
  }

  getSummary() {
    return {
      generatedAt: new Date(),
      totalUsers: 1,
    };
  }
}
