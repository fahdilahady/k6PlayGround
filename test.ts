import chai, { describe, expect } from 'k6Chai';
import { sleep } from 'k6';
import http from 'k6/http';

chai.config.logFailures = true;

export default function() {
  describe('Goto test k6', () => {
    let resp = http.get('http://test.k6.io');
    sleep(1);
    expect(resp.status).to.equal(200);
  });
}