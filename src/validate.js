export default function validate(data, rules) {
  let errors = {}
  rules.forEach(rule => {
    let value = data[rule.key]
    if (rule.required) {
      let error = validate.required(value)
      if (error) {
        ensureObject(errors, rule.key)
        errors[rule.key].required = error
        return
      }
    }
    // 获得所有验证规则
    let validators = Object.keys(rule).filter(key => key !== 'key' && key !== 'required')
    // 调用相应的验证
    validators.forEach(validatorsKey => {
      if (rule[validatorsKey]) {
        let error = validate[validatorsKey](value, rule[validatorsKey])
        if (error) {
          ensureObject(errors, rule.key)
          errors[rule.key][validatorsKey] = error
        }
      }
    })
  })
  return errors
}

validate.required = (value) => {
  if (!value && value !== 0) {
    return '必填'
  }
}
validate.pattern = (value, pattern) => {
  if (pattern === 'email') {
    pattern = /^.+@.+$/
  }
  if (pattern.test(value) === false) {
    return '格式错误'
  }
}
validate.minLength = (value, minLength) => {
  if (value.length < minLength) {
    return '长度不够'
  }
}


function ensureObject (obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}