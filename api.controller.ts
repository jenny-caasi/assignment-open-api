import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('news') // Define the route prefix as /news
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('headlines') // Define the GET route for top headlines
  async getHeadlines(@Query('country') country: string = 'us') {
    return this.apiService.getTopHeadlines(country); // Get headlines for the specified country
  }
}
