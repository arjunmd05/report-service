import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as ExcelJS from 'exceljs';

@Injectable()
export class ReportsService {
  async generateAndSendUsersReport() {
    const usersResponse = await axios.get('http://localhost:3000/users');
    const users = usersResponse.data;

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Users');

    sheet.columns = [
      { header: 'ID', key: 'id' },
      { header: 'Name', key: 'name' },
      { header: 'Email', key: 'email' },
    ];

    users.forEach((user) => {
      sheet.addRow(user);
    });

    const buffer = await workbook.xlsx.writeBuffer();

    const base64File = Buffer.from(buffer as ArrayBuffer).toString('base64');

    await axios.post('http://localhost:3002/notifications/send-report', {
      email: 'mentor@example.com',
      file: base64File,
    });

    return { message: 'Report generated and email sent' };
  }
}
