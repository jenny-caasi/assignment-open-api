import { Injectable, HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class ApiService {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(private readonly configService: ConfigService) {
    // Get the API key from environment variables
    this.apiKey = this.configService.get<string>('NEWSAPI_KEY');
    this.baseUrl = 'https://newsapi.org/v2';
  }

  // Fetch top headlines
  async getTopHeadlines(country: string = 'us'): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/top-headlines`, {
        params: {
          country,
          apiKey: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error.response?.data);
      throw new HttpException(
        error.response?.data || 'Error fetching news data',
        error.response?.status || 500,
      );
    }
  }
}
