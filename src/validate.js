class validator {
  static add (name, fn) {
    validator.prototype[name] = fn
  }
  validate(data, rules) {
    let errors = {}
    rules.forEach(rule => {
      let value = data[rule.key]
      if (rule.required) {
        let error = this.required(value)
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
        if (this[validatorsKey]) {
          let error = this[validatorsKey](value, rule[validatorsKey])
          if (error) {
            ensureObject(errors, rule.key)
            errors[rule.key][validatorsKey] = error
          }
        } else {
          throw `不存在的校验器：${validatorsKey}`
        }
      })
    })
    return errors
  }
  required (value) {
    if (!value && value !== 0) {
      return '必填'
    }
  }
  pattern (value, pattern) {
    if (pattern === 'email') {
      pattern = /^.+@.+$/
    }
    if (pattern.test(value) === false) {
      return '格式错误'
    }
  }
  minLength (value, minLength) {
    if (value.length < minLength) {
      return '长度不够'
    }
  }
  maxLength (value, maxLength) {
    if (value.length > maxLength) {
      return '长度过长'
    }
  }
}
// export default function validate(data, rules) {
//   let errors = {}
//   rules.forEach(rule => {
//     let value = data[rule.key]
//     if (rule.required) {
//       let error = validate.required(value)
//       if (error) {
//         ensureObject(errors, rule.key)
//         errors[rule.key].required = error
//         return
//       }
//     }
//     // 获得所有验证规则
//     let validators = Object.keys(rule).filter(key => key !== 'key' && key !== 'required')
//     // 调用相应的验证
//     validators.forEach(validatorsKey => {
//       if (validate[validatorsKey]) {
//         let error = validate[validatorsKey](value, rule[validatorsKey])
//         if (error) {
//           ensureObject(errors, rule.key)
//           errors[rule.key][validatorsKey] = error
//         }
//       } else {
//         throw `不存在的校验器：${validatorsKey}`
//       }
//     })
//   })
//   return errors
// }

// validate.required = (value) => {
//   if (!value && value !== 0) {
//     return '必填'
//   }
// }
// validate.pattern = (value, pattern) => {
//   if (pattern === 'email') {
//     pattern = /^.+@.+$/
//   }
//   if (pattern.test(value) === false) {
//     return '格式错误'
//   }
// }
// validate.minLength = (value, minLength) => {
//   if (value.length < minLength) {
//     return '长度不够'
//   }
// }
// validate.maxLength = (value, maxLength) => {
//   if (value.length > maxLength) {
//     return '长度过长'
//   }
// }


function ensureObject (obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}

export default validator