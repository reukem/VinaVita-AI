import sys

sys.stdout.reconfigure(encoding='utf-8')

p = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\index.html"
with open(p, "r", encoding="utf-8") as f:
    html = f.read()

pos = 0
while True:
    idx = html.find("viewSignatures", pos)
    if idx == -1:
        break
    print(f"Match at {idx}: {html[idx-40:idx+60]}")
    pos = idx + 14
