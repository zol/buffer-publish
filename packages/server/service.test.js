/* eslint-disable import/first */
jest.unmock('request-promise');
import fs from 'fs';
import { join } from 'path';
import micro from 'micro';
import listen from 'test-listen';
import request from 'request-promise';
import service from './service';
import webpackConfig from './webpack.config.dev';

describe('service', () => {
  let microService;
  beforeEach(() => {
    microService = micro(service);
  });

  afterEach(() => {
    microService.close();
  });

  it('should serve development index.html', async () => {
    const url = await listen(microService);
    const body = await request(url);
    const webpackBundleLocation = join(
      webpackConfig.output.publicPath,
      webpackConfig.output.filename,
    );
    const html = fs.readFileSync(join(__dirname, 'index.html'), 'utf8').replace('{{{bundle}}}', webpackBundleLocation);
    expect(body)
      .toBe(html);
  });

  it('should return 404 - GET', async () => {
    const url = await listen(microService);
    return request(`${url}/not-found`)
      .catch((err) => {
        expect(err.statusCode)
          .toBe(404);
        expect(err.error)
          .toBe('not found');
      });
  });
  it('should return 404 - POST', async () => {
    const url = await listen(microService);
    return request({
      method: 'POST',
      uri: `${url}/not-found`,
    })
      .catch((err) => {
        expect(err.statusCode)
          .toBe(404);
        expect(err.error)
          .toBe('not found');
      })
      .then(() => microService.close());
  });
  it('should return methods on rpc', async () => {
    const url = await listen(microService);
    return request({
      method: 'POST',
      uri: `${url}/rpc`,
      body: {
        name: 'methods',
      },
      json: true,
    })
      .then((res) => {
        expect(res.result)
          .toBeDefined();
      });
  });
});
