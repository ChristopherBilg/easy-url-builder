import UrlBuilder from './'

describe('UrlBuilder tests', () => {
  test('should return blank when nothing is set', () => {
    expect(UrlBuilder().toString()).toBe('')
  })

  test('should return a correct format with basic protocol', () => {
    const x = UrlBuilder()
      .setProtocol('https')
      .toString()
    const y = 'https://'
    expect(x).toBe(y)
  })

  test('should return a correct format with basic domain', () => {
    const x = UrlBuilder()
      .setProtocol('https')
      .setDomain('www.google.com')
      .toString()
    const y = 'https://www.google.com/'
    expect(x).toBe(y)
  })

  test('should return a correct format with basic parameter (1)', () => {
    const x = UrlBuilder()
      .setProtocol('https')
      .setDomain('www.google.com')
      .addQueryParameter('key1', 'value1')
      .toString()
    const y = 'https://www.google.com/?key1=value1'
    expect(x).toBe(y)
  })

  test('should return a correct format with basic parameter (3)', () => {
    const x = UrlBuilder()
      .setProtocol('https')
      .setDomain('www.google.com')
      .addQueryParameter('key1', 'value1')
      .addQueryParameter('key2', 'value2')
      .addQueryParameter('key3', 'value3')
      .toString()
    const y = 'https://www.google.com/?key1=value1&key2=value2&key3=value3'
    expect(x).toBe(y)
  })

  test('should return a correct format with basic parameter removed (2)', () => {
    const x = UrlBuilder()
      .setProtocol('https')
      .setDomain('www.google.com')
      .addQueryParameter('key1', 'value1')
      .addQueryParameter('key2', 'value2')
      .addQueryParameter('key3', 'value3')
      .removeQueryParameter('key2')
      .toString()
    const y = 'https://www.google.com/?key1=value1&key3=value3'
    expect(x).toBe(y)
  })

  test('should return a correct format with basic fragment', () => {
    const x = UrlBuilder()
      .setProtocol('https')
      .setDomain('www.google.com')
      .setFragment('fragment123')
      .toString()
    const y = 'https://www.google.com/#fragment123'
    expect(x).toBe(y)
  })
})