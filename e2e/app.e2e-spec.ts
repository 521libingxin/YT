import { ZhengxiangaiPage } from './app.po';

describe('zhengxiangai App', function() {
  let page: ZhengxiangaiPage;

  beforeEach(() => {
    page = new ZhengxiangaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
