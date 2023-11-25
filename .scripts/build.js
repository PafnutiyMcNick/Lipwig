const esbuild = require('esbuild')
const fs = require('node:fs/promises')

const entries = [
  'example'
]

const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        [[style]]
    </style>
</head>
<body>
<div id="root"></div>
<script>
  [[script]]
</script>
</body>
</html>
`
async function main() {
  for (const entry of entries) {
    const result = await esbuild.build({
      entryPoints: ['src/' + entry + '.tsx'],
      bundle: true,
      write: false,
      minify: false,
      outdir: '.build'
    })
    const js = []
    const css = []
    for (const file of result.outputFiles) {
      if (file.path.endsWith('.js')) {
        js.push(file.text)
      }
      if (file.path.endsWith('.css')) {
        css.push(file.text)
      }
    }
    const outputFileName = entry + '.html';
    const fullHtml = template.replaceAll('[[style]]', css.join('\n')).replaceAll('[[script]]', js.join('\n'))
    console.log("Writing to", outputFileName)
    await fs.writeFile(outputFileName, fullHtml);
  }
}

main().catch((e) => {
  console.error(e)
})
