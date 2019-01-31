import { expect } from 'chai'
import validate from '../../src/validate'


describe('validate', () => {
  it('存在.', () => {
    expect(validate).to.be.exist
  })
  it('required 为 true 报错', () => {
    let data = {
      email: ''
    }
    let rules = [
      {
        key: 'email',
        required: true
      }
    ]
    let errors = validate(data, rules)
    expect(errors.email.required).to.eq('必填')
  })
  it('required 为 true 通过', () => {
    let data = {
      email: 0
    }
    let rules = [
      {
        key: 'email',
        required: true
      }
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern 报错', () => {
    let data = {
      email: '@23.com'
    }
    let rules = [
      {
        key: 'email',
        required: true,
        pattern: /^.+@.+$/
      }
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.eq('格式错误')
  })
  it('pattern 通过', () => {
    let data = {
      email: '1@23.com'
    }
    let rules = [
      {
        key: 'email',
        required: true,
        pattern: /^.+@.+$/
      }
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern email 报错', () => {
    let data = {
      email: '@23.com'
    }
    let rules = [
      {
        key: 'email',
        required: true,
        pattern: 'email'
      }
    ]
    let errors = validate(data, rules)
    expect(errors.email.pattern).to.eq('格式错误')
  })
  it('pattern email 通过', () => {
    let data = {
      email: '1@23.com'
    }
    let rules = [
      {
        key: 'email',
        required: true,
        pattern: 'email'
      }
    ]
    let errors = validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern required', () => {
    let data = {
      email: ''
    }
    let rules = [
      {
        key: 'email',
        required: true,
        pattern: 'email'
      }
    ]
    let errors = validate(data, rules)
    expect(errors.email.required).to.exist
    expect(errors.email.pattern).to.not.exist
  })
  it('pattern minLength', () => {
    let data = {
      email: ''
    }
    let rules = [
      {
        key: 'email',
        minLength: 5,
        pattern: 'email'
      }
    ]
    let errors = validate(data, rules)
    expect(errors.email.minLength).to.eq('长度不够')
    expect(errors.email.pattern).to.eq('格式错误')
  })
})