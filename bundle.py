import os
import base64
import re

folder = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai"
html_path = os.path.join(folder, "index.html")
css_path = os.path.join(folder, "styles.css")
db_path = os.path.join(folder, "medicinal_database.js")
app_path = os.path.join(folder, "app.js")
assets_dir = os.path.join(folder, "assets")

with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

with open(db_path, "r", encoding="utf-8") as f:
    db_js = f.read()

with open(app_path, "r", encoding="utf-8") as f:
    app_js = f.read()

# Replace assets with base64 data URIs
if os.path.exists(assets_dir):
    for img_file in os.listdir(assets_dir):
        if img_file.lower().endswith((".jpg", ".png", ".jpeg", ".webp", ".svg")):
            img_path = os.path.join(assets_dir, img_file)
            with open(img_path, "rb") as f:
                b64_str = base64.b64encode(f.read()).decode("utf-8")
            if img_file.lower().endswith(".svg"):
                mime = "image/svg+xml"
            elif img_file.lower().endswith((".jpg", ".jpeg")):
                mime = "image/jpeg"
            else:
                mime = "image/png"
            data_uri = f"data:{mime};base64,{b64_str}"
            rel_ref = f"assets/{img_file}"
            db_js = db_js.replace(rel_ref, data_uri)
            app_js = app_js.replace(rel_ref, data_uri)
            css = css.replace(rel_ref, data_uri)
            html = html.replace(rel_ref, data_uri)

# Combine into standalone HTML
bundled = html.replace('<link rel="stylesheet" href="styles.css">', f"<style>\n{css}\n</style>")
script_block = f"<script>\n{db_js}\n{app_js}\n</script>"

bundled = re.sub(r'<script\s+src="medicinal_database\.js"[^>]*></script>', '', bundled)
# Use lambda replacement to prevent Python re.sub from interpreting \n and backslashes in JS code as escape sequences
bundled = re.sub(r'<script\s+src="app\.js"[^>]*></script>', lambda _: script_block, bundled)

out_paths = [
    r"C:\Users\THIS PC\Downloads\VinaVita-AI-Mixologist.html",
    r"C:\Users\THIS PC\Downloads\AnThao-AI-Mixologist.html"
]

for out_path in out_paths:
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(bundled)
    print(f"Successfully built standalone package: {out_path} ({os.path.getsize(out_path):,} bytes)")

print("Bundling completed successfully!")
