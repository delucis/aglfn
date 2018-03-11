const FS = require('fs')
const WRITE_JSON = require('write-json-file')

FS.readFile('node_modules/aglfn/aglfn.txt', 'utf8', (err, txt) => {
  if (err) console.error(err)

  let lines = txt.split('\n')

  let aglfn = lines.reduce((aglfn, line) => {
    if (line.startsWith('#')) return aglfn
    if (!line.length) return aglfn
    let fields = line.split(';')
    aglfn.push({
      unicodeValue: fields[0],
      glyphName: fields[1],
      charName: fields[2]
    })
    return aglfn
  }, [])

  WRITE_JSON('dist/aglfn.json', aglfn)
    .catch(err => { if (err) console.error(err) })
})
