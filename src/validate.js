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
    if (rule.pattern) {
      let error = validate.pattern(value, rule.pattern)
      if (error) {
        ensureObject(errors, rule.key)
        errors[rule.key].pattern = error
      }
    }
    if (rule.minLength) {
      let error = validate.minLength(value, rule.minLength)
      if (error) {
        ensureObject(errors, rule.key)
        errors[rule.key].minLength = error
      }
    }
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