interface Parameter {
  key: string
  value: string
}

class UrlBuilder {
  private protocol: string
  private domain: string
  private port: number | null
  private path: string
  private queryParameters: Array<Parameter>
  private fragment: string

  constructor() {
    this.protocol = ''
    this.domain = ''
    this.port = null
    this.path = ''
    this.queryParameters = []
    this.fragment = ''
  }

  public setProtocol = (protocol: string): this => {
    this.protocol = protocol
    return this
  }

  public setDomain = (domain: string): this => {
    this.domain = domain
    return this
  }

  public setPort = (port: number): this => {
    this.port = port
    return this
  }

  public setPath = (path: string): this => {
    this.path = path
    return this
  }

  public addQueryParameter = (key: string, value: string): this => {
    this.queryParameters.push({key, value})
    return this
  }

  public removeQueryParameter = (key: string): this => {
    this.queryParameters = this.queryParameters.filter(parameter => parameter.key !== key)
    return this
  }

  public setFragment = (fragment: string): this => {
    this.fragment = fragment
    return this
  }

  public toString = (): string => {
    let s = ''

    if (this.protocol) s += this.protocol + '://'
    if (this.domain)   s += this.domain + '/'
    if (this.port)     s += this.port
    if (this.path)     s += this.path

    if (this.queryParameters.length > 0) {
      s += '?'
      this.queryParameters.forEach(parameter => {
        s += parameter.key + '=' + parameter.value + '&'
      })
      s = s.substring(0, s.length-1)
    }

    if (this.fragment) s += '#' + this.fragment

    return s
  }

  static create = () => new UrlBuilder()
}

export default UrlBuilder.create