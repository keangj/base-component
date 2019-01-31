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
  it('maxLength', () => {
    let data = {
      email: '111222333444'
    }
    let rules = [
      {
        key: 'email',
        maxLength: 10
      }
    ]
    let errors = validate(data, rules)
    expect(errors.email.maxLength).to.eq('长度过长')
  })
  it('不存在的校验器抛出错误', () => {
    let data = {
      email: '111222333444'
    }
    let rules = [
      {
        key: 'email',
        maxLength: 10,
        hasDot: true,
        hasNumber: true
      }
    ]
    // let errors = validate(data, rules)
    let fn = () => {
      validate(data, rules)
    }
    expect(fn).to.throw()
  })
  it('自定义校验器', () => {
    let data = {
      email: 'abc'
    }
    let rules = [
      {
        key: 'email',
        maxLength: 10,
        required: true,
        hasNumber: true
      }
    ]

    validate.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '须包含数字'
      }
    }

    let errors = {}
    let fn = () => {
      errors = validate(data, rules)
    }
    expect(fn).to.not.throw()
    expect(errors.email.hasNumber).to.eq('须包含数字')
  })
})