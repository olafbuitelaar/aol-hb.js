import utils from 'src/helpers/utils';

describe('Utils helper tests', () => {
  describe('resolveHttpProtocol()', () => {
    it('Shoud resolve http protocol type', () => {

      expect(utils.resolveHttpProtocol()).to.equal('http');
      expect(utils.resolveHttpProtocol(null)).to.equal('http');
      expect(utils.resolveHttpProtocol('testProtocol')).to.equal('http');
      expect(utils.resolveHttpProtocol('http')).to.equal('http');
      expect(utils.resolveHttpProtocol('https')).to.equal('http');
      expect(utils.resolveHttpProtocol('https:')).to.equal('https');
    });
  });

  describe('trimTemplateStringResult()', () => {
    it('Should not process empty values', () => {
      let templateStringTrimmed = utils.trimTemplateStringResult(null);
      expect(templateStringTrimmed).to.equal(null);

      templateStringTrimmed = utils.trimTemplateStringResult(undefined);
      expect(templateStringTrimmed).to.equal(null);
    });

    it('Should remove spaces from multiline template string result', () => {
      let firstPart = 'part-1';
      let secondPart = 'part-2';

      let multiLineTemplateString = `${firstPart}/
                                  ${secondPart}`;

      let templateStringTrimmed = utils.trimTemplateStringResult(multiLineTemplateString);
      expect(templateStringTrimmed).to.equal(firstPart + '/' + secondPart);
    });
  });
});
