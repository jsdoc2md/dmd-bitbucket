const BBLINK_PREFIX = '#markdown-header-'
const index = []
const links = {}

function getLink (parent, name, link) {
  if (parent === 'event') return name.toLowerCase()
  let sig = parent + '#' + name
  let out = links[sig]

  if (link) {
    links[sig] = link
    out = link
  } else if (!out) {
    sig = 'null#' + name
    out = links[sig]
  }

  return out
}

exports.bbLink = function (parent, prefix, accessSymbol, name, methodSign, returnTypes) {
  const link = [
    parent,
    prefix ? prefix + ' ' : '',
    accessSymbol,
    name,
    methodSign,
    returnTypes ? ' ' + returnTypes : ''
  ].join('').replace(/[^ \w]+/g, '').replace(/ +/g, '-').toLowerCase()
  return getLink(parent, name, link)
}

exports.bbGuessLink = function (parent, prefix, accessSymbol, name, methodSign, returnTypes) {
  const link = getLink(parent, name)
  if (link) {
    return '[' + name + '](' + BBLINK_PREFIX + link + ')'
  }
  return name
}

exports.bbParseLink = function (roughName) {
  if (!roughName) return
  if (roughName.indexOf('http') >= 0) {
    return '[' + roughName + '](' + roughName + ')'
  }
  const parts = roughName.split(/[#\.:]/)
  const link = getLink(parts[0], parts[1])

  if (link) {
    return '[' + roughName + '](' + BBLINK_PREFIX + link + ')'
  }
  return roughName
}
