import os
f1 = 'css/style.css'
f2 = 'css/style.min.css'
with open(f1) as f:
    c1 = f.read()
with open(f2) as f:
    c2 = f.read()

fonts = [
    "url('../fonts/Inter-normal-300.woff2') format('woff2'),",
    "url('../fonts/Inter-normal-400.woff2') format('woff2'),",
    "url('../fonts/Inter-normal-700.woff2') format('woff2'),",
    "url('../fonts/Inter-normal-800.woff2') format('woff2'),",
    "url('../fonts/Inter-normal-900.woff2') format('woff2'),",
    "url('../fonts/PlayfairDisplay-normal-400.woff2') format('woff2'),",
    "url('../fonts/PlayfairDisplay-normal-600.woff2') format('woff2'),",
    "url('../fonts/PlayfairDisplay-normal-700.woff2') format('woff2'),",
    "url('../fonts/PlayfairDisplay-italic-400.woff2') format('woff2'),"
]

for p in fonts:
    c1 = c1.replace(p + '\n', '')
    c1 = c1.replace(p, '')
    c2 = c2.replace(p, '')

with open(f1, 'w') as f:
    f.write(c1)
with open(f2, 'w') as f:
    f.write(c2)
print("done")
