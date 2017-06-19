import fs from 'fs';
import micro from 'micro';
import listen from 'test-listen';
import request from 'request-promise';
import service from './service';


describe('server', () => {
  it('should serve index.html', async () => {
    const microService = micro(service);
    const url = await listen(microService);
    const body = await request(url);
    const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');

    await expect(body)
      .toBe(html);
  });
});
