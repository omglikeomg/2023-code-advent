import fs from 'fs'

const folders = fs.readdirSync('./', { recursive: true })
    .filter(v => v.search('exercise.js') !== -1 && v !== 'exercise.js')

const promises = folders.map(async (folder) => {
    console.log(folder)
    const day = folder.split('/')[0]
    const { default: { result_1, result_2 } } = await import(`./${folder}`)
    return { day, result_1, result_2 }
})

const results = await Promise.all(promises)

console.table(results.reduce((acc, { day, ...x }) => { acc[day] = x; return acc }, {}))
